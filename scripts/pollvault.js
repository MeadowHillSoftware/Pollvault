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
    var oResults = oPollvault.greaterThanOrEqualTo(oPollvault.oCurrentType, "Votes", 10);
    oResults = oPollvault.greaterThanOrEqualTo(oResults, "Rating", 7.0);
    oResults = oPollvault.matchOneString(oResults, "Single or Multiplayer", ["Multiplayer", "Single Player or Multiplayer"]);
    oResults = oPollvault.searchByString(oResults, "DM Needed", "No DM Required");
    oResults = oPollvault.MinMaxCharacterLevel(oResults, "Max Character Level", 12);
    oResults = oPollvault.MinMaxCharacterLevel(oResults, "Min Character Level", 10);
    console.log(oResults);
};

oPollvault.matchOneString = function(oObject, sField, aValues) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m]
        var oMod = oObject[sFolder]
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var sString = oMod[sField];
            if (aValues.indexOf(sString) !== -1) {
                oResults[sFolder] = oMod;
            }
        }
    }
    return oResults;
};

oPollvault.greaterThanOrEqualTo = function(oObject, sField, iValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m]
        var oMod = oObject[sFolder]
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var iInteger = oMod[sField];
            if (iInteger >= iValue) {
                oResults[sFolder] = oMod;
            }
        }
    }
    return oResults;
};

oPollvault.lessThanOrEqualTo = function(oObject, sField, iValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m]
        var oMod = oObject[sFolder]
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var iInteger = oMod[sField];
            if (iInteger <= iValue) {
                oResults[sFolder] = oMod;
            }
        }
    }
    return oResults;
};

oPollvault.MinMaxCharacterLevel = function(oObject, sField, iValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m]
        var oMod = oObject[sFolder]
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var iInteger = oMod[sField];
            if (sField === "Max Character Level") {
                if (iInteger === "Any" || (iInteger >= iValue)) {
                    oResults[sFolder] = oMod;
                }
            } else {
                if (iInteger === "Any" || (iInteger <= iValue)) {
                    oResults[sFolder] = oMod;
                }
            }
        }
    }
    return oResults;
};

oPollvault.searchByString = function(oObject, sField, sValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m]
        var oMod = oObject[sFolder]
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var sString = oMod[sField];
            if (sString === sValue) {
                oResults[sFolder] = oMod;
            }
        }
    }
    return oResults;
};

oPollvault.addMainEventListeners();
