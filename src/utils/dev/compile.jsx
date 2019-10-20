#target estoolkit#dbg
var tempStaging = File(File($.fileName).parent.parent.path + "/host");
var hostFolders = tempStaging.getFiles();
for (var i = 0; i < hostFolders.length; i++) {
  var files = hostFolders[i].getFiles();

  for (var j = 0; j < files.length; j++) {
    var activeFile = new File(files[j]);
    if (activeFile.name == "host.jsx") {
      var fileIn = activeFile;

      fileIn.open("r");
      var s = fileIn.read();
      fileIn.close();
      var t = app.compile(s);

      var fileOut = File(fileIn.absoluteURI);
      fileIn.remove();
      fileOut.open("w");
      fileOut.write(t);
      fileOut.close();
    }
  }
}
