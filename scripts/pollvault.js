//Pollvault
//
//AGPL 3 or later

"use strict";

var oPollvault = {};

oPollvault.addMainEventListeners = function() {
    $('#type').on('change', oPollvault.handleFileUpload);
};

oPollvault.handleFileUpload = function(event) {
    event.stopPropagation();
    var aFiles = $('#type').prop("files");
    var file = aFiles[0];
    var sFileName = file.name;
    var aFileName = sFileName.split(".");
    var sType = "";
    for (var w = 0; w < (aFileName.length - 1); w++) {
        var sWord = aFileName[w];
        sType += sWord;
    }
    oPollvault.sType = sType;
    oPollvault.sFileName = sType + ".json";
    oPollvault.reader = new FileReader();
    oPollvault.reader.readAsText(file);
    oPollvault.reader.onload = oPollvault.handleType;
};

oPollvault.handleType = function(event) {
    event.stopPropagation();
    var sType = oPollvault.reader.result;
    oPollvault.oCurrentType = JSON.parse(sType);
    console.log(oPollvault.oCurrentType["1"]);
    console.log(oPollvault.oCurrentType["6000"]);
};

oPollvault.addMainEventListeners();
