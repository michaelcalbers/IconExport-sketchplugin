@import 'common.js'

var onRun = function(context) {
  //reference the sketch document
  var doc = context.document;
  //reference the pages array in the document
  var pages = [doc pages];
  //create a variable to hold how many layers exist
//  var layerCount = 0;
  //create a variable to hold how many symbol layers exist
//  var symbolCount = 0;

  //loop through the pages array
  for (var p = 0; p < pages.count(); p++){
    //reference each page
    var page = pages[p];
    //get the name of the page
    var pageName = [page name];
    //reference the artboards array of each page
    var artboards = [page artboards];
    log(pageName);
    //If it's the Icons page, log it in the console
    if (pageName == "Icons") { // type coersion expected/needed
      log("      Yes! It is " + pageName);
    }

    //loop through the artboards of each page
//    for (var a = 0; a < artboards.count(); a++){
      //reference each artboard of each page
//      var artboard = artboards[a];
      //reference the layers array of each artboard
//      var layers = [artboard layers];

      //loop through the layers array
//      for(var l = 0; l < layers.count(); l++){
        // increment symbol count
//        layerCount = layerCount + 1;
        //reference each layer of each artboard
//        var layer = layers[l];

        //check to see if the layer is a Symbol
//        if(layer.class() == "MSSymbolInstance"){

          // increment symbol count
//          symbolCount = symbolCount + 1;

//          }
//        }
//      }
    }
//    var alertMessage = symbolCount + " symbols & " + layerCount + " layers";
//    var alertMessage = symbolCount + " symbols";
//    alert("Symbol & Layer Count", alertMessage);
}