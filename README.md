# IconExport

This plugin is (supposed to) traverse all Pages in a Sketch file, find the Page named 'Icons', get all the layers on the Icons Page, and export them in PNG and SG formats.
It does not quite do that right now as I've hit problems deciphering which kinds of layers can be successuflly exported through a simple 'layer.export()' call.


Partially based on code in [The Beginner’s Guide to Writing Sketch Plugins Part 4 — Real World Examples](https://medium.com/@marianomike/the-beginners-guide-to-writing-sketch-plugins-part-4-real-world-examples-c0bff9085912) article and Bohemian Coding's Exporting Examples ([web](http://developer.sketchapp.com/examples/plugins/exporting/) | [git](https://github.com/BohemianCoding/plugins.examples.exporter) ).
