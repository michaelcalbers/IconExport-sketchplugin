@import 'common.js'

var onRun = function(context) {
  // reference the sketch document
  var doc = context.document;
  // reference the pages array in the document
  var pages = [doc pages];
  // create a variable to hold how many artboards/icons to export
  var iconCount = 0;
  // We can specify a lot of different options for the exporting.
  var exportOptions_PNG = { "scales" : "1, 2, 3", "formats" : "png" }
  var exportOptions_SVG = { "formats" : "svg" }

  // loop through the pages array
  for (var p = 0; p < pages.count(); p++){
    // reference each page
    var page = pages[p];
    // get the name of the page
    var pageName = [page name];
    // reference the artboards array of each page
    var artboards = [page artboards];
    // If it's the Icons page, log it in the console
    if (pageName == "Icons") { // type coersion expected/needed
      log("Found " + pageName + " page.");

      // loop through the artboards of the Icons page
      for (var a = 0; a < artboards.count(); a++){
        // reference each artboard of each page
        var artboard = artboards[a];
        // get the artboard's name
        var artboardName = [artboard name];
        // log the artboard's name
        log("  " + artboardName);
        // export
        artboard.export(exportOptions_PNG);
//        artboard.export(exportOptions_SVG);

        // increment the icon count
        iconCount = iconCount + 1;

        //reference the layers array of each artboard
        var layers = [artboard layers];

        //loop through the layers array
        for(var l = 0; l < layers.count(); l++){
          //reference each layer of each artboard
          var layer = layers[l];

          //check to see if the layer is NOT a Symbol
          if(layer.class() != "MSSymbolInstance"){
            // log the artboard's name
            log("     " + layer);

          } // if Symbol
        } // for Layers
      } // for Artboards
    } // if Icons page
  } // for Pages
//  var alertMessage = iconCount + " icons exported.";
//  alert("Icon Export", alertMessage);
}