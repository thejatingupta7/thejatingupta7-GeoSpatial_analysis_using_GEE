/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var water = /* color: #0047ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([78.1344567701286, 30.256251074011978]),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([78.1234704420036, 30.281158577707554]),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([77.88269361345714, 30.338465411246723]),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([77.83256849138682, 30.35505719594231]),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([77.85728772966807, 30.376089163935887]),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([77.98363050310557, 30.350613243722805]),
            {
              "class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([78.13246705953128, 30.20690689670954]),
            {
              "class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([78.07616212789065, 30.179606308501487]),
            {
              "class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([78.12972047750003, 30.16417219380597]),
            {
              "class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([78.27528932515628, 30.12379462401287]),
            {
              "class": 0,
              "system:index": "9"
            })]),
    forest = /* color: #00852d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([77.74210892462247, 30.370863085090573]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([77.89591751837247, 30.289075272916072]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([77.97694168829435, 30.249935229850745]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([78.0415747294092, 30.236165084365997]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([78.08257560171184, 30.462964711426828]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([78.17115287221965, 30.450238913282806]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([78.00464133657512, 30.479535351801086]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([78.08289305924517, 30.38596288195736]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([78.03929106949907, 30.383741633290118]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([77.99843566178423, 30.394255097496746]),
            {
              "class": 1,
              "system:index": "9"
            })]),
    developed = /* color: #ff0909 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([78.11972907942226, 30.176859118628816]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([78.12075904768398, 30.17032941381526]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([78.14461997908046, 30.175523532387693]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([78.16109947126796, 30.175078332951237]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([78.1576662437289, 30.156674996747096]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([78.2129412071078, 30.186059331916063]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([78.0964671854627, 30.271351916299256]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([78.05963984638322, 30.28227619611732]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([78.04350367694963, 30.306287886294616]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([78.01569453388322, 30.3018417205654]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([78.02118769794572, 30.32466323175581]),
            {
              "class": 2,
              "system:index": "10"
            })]),
    herbaceous = /* color: #ffc507 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([77.96351657596983, 30.32283560950497]),
            {
              "class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([77.95991168705382, 30.325206415041496]),
            {
              "class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([77.91957126346983, 30.323724668305392]),
            {
              "class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([77.9967661152236, 30.337815016170993]),
            {
              "class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([77.9974527607314, 30.345666888484395]),
            {
              "class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([77.7574190608141, 30.451610761208684]),
            {
              "class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([77.76248307143422, 30.453756476248476]),
            {
              "class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([77.74579901107187, 30.470303231613887]),
            {
              "class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([77.75266546614999, 30.47414994885969]),
            {
              "class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([77.73386854537362, 30.46734411494748]),
            {
              "class": 3,
              "system:index": "9"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

// --------------------------------------------------------------------------------------------
// https://bit.ly/3I5iiLA - CODE
// --------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------
// CLASSIFICATION:
//        (pixel based supervised & unsupervised classification)
//-----------------------------------------------------------------------------------------------------------------------

/*
Supervised Classification : 

--> It uses training dataset with known 
labels and spectrak characteristsics (Yes or No)

1. Get a scene
2. Collect training data
3. Select and train a classifier using the trining data
4. Classify the image using the selected classifier
*/

//-----------------------------------------------------------------------------------------------------------------------

var pt = ee.Geometry.Point([78.0326, 30.3168]);

var landsat = ee.ImageCollection("LANDSAT/LC08/C02/T1_TOA")
              .filterBounds(pt)
              .filterDate("2019-01-01", "2020-01-01")
              .sort("CLOUD_COVER")
              .first();

var viz = {min:0.0, max:0.4, bands: ["B4", "B3", "B2"]};
Map.addLayer(landsat, viz, "Landsat Image");

//-----------------------------------------------------------------------------------------------------------------------

// Training starts - Combine Training feature Collection
var training_features = ee.FeatureCollection([
  forest, developed, water, herbaceous
]).flatten();
// print(training_features);


// Defining prediction bands
var prediction_bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10'];


// Sample Training points
var classifier_training = landsat.select(prediction_bands).sampleRegions({
  collection: training_features,
  properties: ['class'],
  scale: 30
});

// Splitting the data into Training & Testing
var training_testing = classifier_training.randomColumn();
var training_set = training_testing.filter(ee.Filter.lessThan("random", 0.8));
var testing_set = training_testing.filter(ee.Filter.greaterThanOrEquals("random", 0.8));


// Training CART (Classification & Regression Trees) - SUPERVISED
var classifier = ee.Classifier.smileCart().train({
  features: training_set,
  classProperty:'class',
  inputProperties: prediction_bands
});

// Classify the Landsat image.
var classified = landsat.select(prediction_bands).classify(classifier);

// Define classification image visualization parameters.
var classificationVis = {
  min: 0,
  max: 3,
  palette: ['589400', 'ff0000', '1a11ff', 'd0741e']
};

// Add the classified image to the map.
Map.addLayer(classified, classificationVis, 'CART classified');
// the classification needs to have more data to correctly identify the features



// --------------------------------- Training RANDOM FOREST ---------------------------------------
var rf_classifier = ee.Classifier.smileRandomForest(50).train({
  features: training_set,
  classProperty:'class',
  inputProperties: prediction_bands
});

// Classify the Landsat image.
var rf_classified = landsat.select(prediction_bands).classify(rf_classifier);

// Add the classified image to the map.
Map.addLayer(rf_classified, classificationVis, 'RF classified');
// the classification needs to have more data to correctly identify the features

// --------------------------------------------------------------------------------------------------------------------------

// ------------------------------------UNSUPERVISED CLASSIFICATION --------------------------------------

var training  = landsat.sample({
  region: landsat.geometry(),
  scale:30,
  numPixels: 1000,
  tileScale: 8
});

// Initialize the clusterer
var clusterer = ee.Clusterer.wekaCascadeKMeans(50).train(training);

// CLuster the input using the trained the clusterer
var k_classified = landsat.cluster(clusterer);

// Display the clusters with random colors
Map.addLayer(k_classified.randomVisualizer(), classificationVis, "k-means classified - random colors");


//-----------------------------------------------------------------------------------------------------------------------
//--------------------------------------------ACCURACY ASSESSMENT---------------------------------------------------------
print("Accuracy metrics - CART ");
print("Training overall accuracy: ", classifier.confusionMatrix().accuracy()); // accuracy

var confusionMatrix = testing_set.classify(classifier)                         // confusion matrix
  .errorMatrix({
    actual:"class",
    predicted: "classification"
});

print("Testing Confusion matrix:", confusionMatrix);
print("Testing Overall Accuracy:", confusionMatrix. accuracy());
print("Producers Accuracy:", confusionMatrix.producersAccuracy());
print("Comsumers Accuracy:", confusionMatrix.consumersAccuracy());
print("Kappa:", confusiomMatrix.kappa());


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
