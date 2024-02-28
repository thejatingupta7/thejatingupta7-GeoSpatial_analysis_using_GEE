// https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V3_2

var dataset = ee.ImageCollection('JAXA/ALOS/AW3D30/V3_2');
var elevation = dataset.select('DSM').mean();
var elevationVis = {
  min: 0,
  max: 5000,
  palette: ['0000ff', '00ffff', 'ffff00', 'ff0000', 'ffffff']
};
Map.setCenter(80.683565, 27.568227, 10);         // (latitude, longitude, elevation-zoom)
Map.addLayer(elevation, elevationVis, 'Elevation');

// check land having elevation greater than 140 metres
var elevGt140 = elevation.gt(140);        // gt : (greater than - function)
elevGt140 = elevGt140.updateMask(elevGt140);
Map.addLayer(elevGt140, {palette: ["black"]}, "elevGt140");