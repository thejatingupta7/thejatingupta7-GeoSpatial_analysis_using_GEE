/* Earth Engine data structures
The two most fundamental geographic data structures in Earth Engine are Image and Feature corresponding to raster and vector data types, respectively.

Images are composed of bands and a dictionary of properties.

Features are composed of a Geometry and a dictionary of properties.

Stack of images (e.g. an image time series) is handled by an ImageCollection.

A collection of features is handled by a FeatureCollection.

Other fundamental data structures in Earth Engine include Dictionary, List, Array, Date, Number and String
It is important to remember that these are all server-side objects and are not manipulated the same way as client-side JavaScript objects.
*/

/*
Raster data are represented as Irage objects in Earth Engine.
Images are composed of one or more bands and each band has its own name, data type,
scale, mask and projection. Each image has metadata stored as a set of properties.
*/


// Loading images from GEE
var image = ee.Image("CGIAR/SRTM90_V4");      // name of image from GEE catalog
Map.setCenter(79.02, 30.2841, 2);             // (latitude, longitude, zoom-level)
Map.addLayer(image);

Map.addLayer(image, {min:0, max:3000}, "custom visualization");

Map.addLayer(image, {min:0, max:3000, palette: ["blue", "green", "red"]}, "custom palette");


// Define the visualization parameters
var viz_params = {
  bands: ['B5','B4','B3'],
  min: 0,
  max: 0.4
};
Map.setCenter(79.02, 30.2841, 10);            
Map.addLayer(image, viz_params, "false color composite");