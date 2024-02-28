/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("FAO/GAUL/2015/level2"),
    imagecollection = ee.ImageCollection("MODIS/061/MOD11A1");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/*--------------------------------------------------------------------------------------------------------
1. Clipping and downloading Data using admin boundaries in
GEE -GAUL Second Level- District

2. Creating Study Area boundary in GEE and using it for clipping
and downloading the data in GEE

3. Uploading the custom study area boundary in GEE and using
it for clipping and downloading data
--------------------------------------------------------------------------------------------------------*/

// FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units
var districts = ee.FeatureCollection('FAO/GAUL/2015/level2');

Map.setCenter(78, 30, 5);

var styleParams = {
  fillColor: 'b5ffb4',
  color: '00909F',
  width: 1.0,
};

// Second Level Administrative Units
Map.addLayer(districts, {}, 'Second Level Administrative Units');

// DIstrict is highlighted
var ddn = districts.filter(ee.Filter.eq("ADM2_NAME", "Dehra Dun"));
Map.addLayer(ddn, {min: 77.87458524825155, max:30.6787168365806}, 'Dehradun');


// ------------------------------------------------------------------------------------------------------

// MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km
var LST_ddn = imagecollection.filterDate("2023-03-15", "2023-03-16")
                .select("LST_Day_1km")
                .first().clip(ddn);
Map.addLayer(LST_ddn, {min: 14000, max: 15100}, "Land Surface Temprature");

// EXPORTING IMAGE TO DRIVE------------------------------------------------------------------------------------
/*
Export.image.toDrive({
  description: "LST_march2023_1km_ddn",
  image: LST_ddn,
  scale: 1000,
  region:ddn,
  folder: 'DEMO_GEE'
});
*/
//UPLOADING THE DATA------------------------------------------------------------------------------------------------------------------
// for uploading make a zip folder with all files(.shp, .tif etc.) and upload in assets --> upload folder!




