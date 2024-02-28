/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[77.8234099528404, 29.994717580056808],
          [77.8234099528404, 29.06750398116804],
          [79.9437712809654, 29.06750398116804],
          [79.9437712809654, 29.994717580056808]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//-----------------------------------------------------------------------------------------------------------------------
// A way to define the study area (area of map) for the project
// 1. Go to Assets --> click NEW --> import shape file
// 2. draw over the map uing the tools given and a variable named geometry given above
//-----------------------------------------------------------------------------------------------------------------------


// This is the Sentinel-2-collection (all the possible available sentinel 2 imagery)
var S2_collection = ee.ImageCollection("COPERNICUS/S2").filterBounds(geometry).filterDate("2023-12-01", "2023-12-15");

// These are the bands that we want to be displayed
var S2_bands = ['B8', 'B4', 'B3'];
// we can also edit the bands using the layers option on the map

// This turns the whole S2 collection into one image, finding the middle value for each pixel
var S2_mosaic = S2_collection.median().clip(geometry);

// This controls how we want the S2 image to be displayed
var S2_display = {bands: S2_bands, min:500, max:4000};

// This adds the S2 mosaic to the map, using the S2_display visual paramters, and giving it the name "S2_image"
Map.addLayer(S2_mosaic, S2_display, "S2_Image");

// This automatically pans the map to the middle of our Sentinel-2_image
Map.centerObject(geometry);


//-----------------------------------------------------------------------------------------------------------------------
// NDVI (NORMALIZED DIFFERENCED VEGETATION INDEX)
//-----------------------------------------------------------------------------------------------------------------------

//To calculate  NDVI from the multi-band images
var ndvi = S2_mosaic.normalizedDifference(["B8", "B4"]);

// or

// Compute the Normalized Difference Vegetation Index (NDVI)
// var nir = S2_mosaic.select('B8');
// var red = S2_mosaic.select('B4');
// var ndvi = nir.subtract(red).divide(nir.add(red));

//Visualization parameters
var ndviVis = {
min: -0.05,
max: 0.5,
palette: [
'FFFFFF', 'CE7E45', 'DF923D', 'F18555', 'FCD163', '996718', '74A901',
'664000', '529400', '3E8601', '207401', '056201', '004C00', '023801',
'012E01', '011001', '011301'
  ],
};

Map.addLayer(ndvi, ndviVis, 'ndvi',0);

var vegetation = ndvi.gte(0.2);
Map.addLayer(vegetation.updateMask(vegetation), {palette : ['0b8926']} ,'Vegetation')



/*

Export.image.toDrive({
Image: ndvi,
description: "NOVI_sentinel",
folder: 'NOVI_sentinel',
region: geometry,
scale: 10,
maxPixels: 10e13,
});

*/


//-----------------------------------------------------------------------------------------------------------------------
// NDWI (NORMALIZED DIFFERENCED WATER INDEX)
//-----------------------------------------------------------------------------------------------------------------------

// To calculate NDWI from the multi-band image
var ndwi = S2_mosaic.normalizedDifference(["B3", "B8"]);

// Compute the Normalized Difference Water Index (NDWI)
// var nir = S2_mosaic.select('B8');
// var red = S2_mosaic.select('B3');
// var ndwi = green.subtract(nir).divide(green.add(nir)):

// Visulaization parameters
var ndwiVis ={
  min:-0.4,
  max: 0.2,
  palette: ['119508', 'ffffff', '0c2aff'],
};
Map.addLayer(ndwi, ndwiVis, "ndwi", 0);

var water = ndwi.gte(0.06);
Map.addLayer(water.updateMask(water), {palette: ['1653ff']}, "Water")



//-----------------------------------------------------------------------------------------------------------------------
// NDSI (NORMALIZED DIFFERENCED SNOW INDEX)
//-----------------------------------------------------------------------------------------------------------------------

// To calculate NDSI from the multi-band image
var ndsi = S2_mosaic.normalizedDifference(["B3", "B12"]);

// Compute the Normalized Difference Water Index (NDWI)
// var swir = S2_mosaic.select('B12');
// var red = S2_mosaic.select('B3');
// var ndsi = green.subtract(swir).divide(green.add(swir)):

// Visulaization parameters
var ndsiVis ={
  min:-0.3,
  max: 0.8,
  palette: ['119508', 'ffffff', '0c2aff'],
};
Map.addLayer(ndsi, ndsiVis, "ndsi", 0);

var water = ndwi.gte(0.06);
Map.addLayer(water.updateMask(water), {palette: ['25fff5']}, "Snow")

//-----------------------------------------------------------------------------------------------------------------------


