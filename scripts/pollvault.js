//Pollvault
//
//AGPL 3 or later
//Match Text (Optional) = text entry
//Date Submitted (Optional) From: = dropdown month, dropdown date, text entry year, calendar button
//Date Submitted (Optional) To: = dropdown month, dropdown date, text entry year, calendar button
//Date Updated (Optional) From: = dropdown month, dropdown date, text entry year
//Date Updated (Optional) To: = dropdown month, dropdown date, text entry year
//Max Number Results: dropdown (10, 50, 100, 200, 400, Show All)
//Category: dropdown (Doesn't Matter, BioWare Contest, Capture The Flag, City Adventure, Classic PnP Conversion, Combat, D20 Modern, Deathmatch Arenas, Dramatic, Dungeon Adventure, Epic, Final Version, Forest Adventure, Hardcore Rules, Horror/Survival Horror, Humorous/Parody, Kid Friendly, Mountain Adventure, None/Freeform, Official Campaign, Old BioWare Contest, Other, Persistent Worlds, Puzzles, PvP, Roleplay, Romance, Snowy Adventure, Temple/Crypt Adventure, Tutorial, Twisted/Dark, Uses Stone of Recall/Town Portal, Various Settings)
//Don't Show This Category: dropdown (same as above except replace Doesn't Matter with Show All)
//Minimum Rating (Needs 10 votes): dropdown (Doesn't Matter, 10.00, 9.75, 9.50, 9.25, 9.00, 8.75, 8.50, 8.25, 8.00, 7.75, 7.50, 7.25, 7.00, 6.75, 6.50, 6.25, 6.00, 5.75, 5.50, 5.25, 5.00, 4.75, 4.50, 4.25, 4.00, 3.75, 3.50, 3.25, 3.00, 2.75, 2.50, 2.25, 2.00, 1.75, 1.50, 1.25, 1.00)
//Hall of Fame: dropdown menu (Doesn't Matter, Yes, No)
//Which Version?: dropdown (Doesn't Matter, All NWN/No SoU/No HotU/No CEP, All SoU, All HotU, All CEP, Works on all versions, CEP-1.00 Requires Community Expansion Project, CEP-1.01 Requires Community Expansion Project, CEP-1.50 Requires Community Expansion Project, CEP-1.51 Requires Community Expansion Project, CEP-1.52 Requires Community Expansion Project, CEP-2.00 Requires Community Expansion Project, Requires SoU & CEP, Requires HotU & CEP, Requires Both Expansions (SoU & HotU), Requires All Expasions (SoU & HotU & CEP), HotU-1.69, HotU-1.68, HotU-1.67, HotU-1.66, HotU-1.65, HotU-1.64, HotU-1.63, HotU-1.62, HotU-1.61, HotU-1.59, SoU-1.69, SoU-1.68, SoU-1.67, SoU-1.66, SoU-1.65, SoU-1.64, SoU-1.63, SoU-1.62, SoU-1.61, SoU-1.32, SoU-1.31, SoU-1.30, NWN-1.69, NWN-1.68, NWN-1.67, NWN-1.66, NWN-1.65, NWN-1.64, NWN-1.63, NWN-1.62, NWN-1.61, NWN-1.32, NWN-1.31, NWN-1.30, NWN-1.29 or lower, NWN-1.30, NWN-1.29, NWN-1.28, NWN-1.27, NWN-1.26, NWN-1.25, NWN-1.24, NWN-1.23, NWN-1.22, NWN-1.21, NWN-1.20, NWN-1.19, NWN-1.18)
//Level: From: dropdown menu (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40), To: dropdown menu (same as from)
//Level: Include those listed as "Any" dropdown menu (Yes, No)
//Number Players: From: dropdown menu (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64), To: dropdown menu (same as from)
//Number Players: Include those listed as "Any" dropdown menu (Yes, No)
//Gameplay Hours: From: dropdown menu (Doesn't Matter, <1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 60+), To: dropdown menu (same as from)
//Single or Multiplayer: dropdown menu (Doesn't Matter, Single Player, Multiplayer, Single Player or Multiplayer)
//DM Needed?: dropdown menu (Doesn't Matter, No DM Required, Occasional DM Needed, DM Required, Multiple DMs Required, Part of Series)
//Alignments: text entry
//Races: text entry
//Classes: text entry
//Setting: text entry
//Tricks & Traps: dropdown menu (Doesn't Matter, Non-Existent, Dependent on Module, Light, Medium, Heavy)
//Roleplay: dropdown menu (Doesn't Matter, Non-Existent, Dependent on Module, Light, Medium, Heavy)
//Hack & Slash: dropdown menu (Doesn't Matter, Non-Existent, Dependent on Module, Light, Medium, Heavy)
//Scope: dropdown menu (Doesn't Matter, Small, Dependent on Module, Medium, Large, Epic, Part of Series)
//Content Rating: dropdown menu (Doesn't Matter, Everyone, Teen, Mature, Adult, Extreme)
//Language: dropdown menu (Doesn't Matter, Asian, English, Chinese, French, German, Italian, Japanese, Korean, Russian, Spanish, Other)
//Show Screenshots: dropdown menu (No, Yes)
//Submit: button SEARCH

"use strict";

var oPollvault = {};

oPollvault.addMainEventListeners = function() {
    $('#search-button').on('click', oPollvault.handleSearchButtonClick);
    $('#submitted-from-month').on('change', oPollvault.handleDateChange);
    $('#submitted-from-year').on('change', oPollvault.handleDateChange);
    $('#submitted-to-month').on('change', oPollvault.handleDateChange);
    $('#submitted-to-year').on('change', oPollvault.handleDateChange);
    $('#type').on('change', oPollvault.handleFileUpload);
    $('#updated-from-month').on('change', oPollvault.handleDateChange);
    $('#updated-from-year').on('change', oPollvault.handleDateChange);
    $('#updated-to-month').on('change', oPollvault.handleDateChange);
    $('#updated-to-year').on('change', oPollvault.handleDateChange);
};

oPollvault.checkDate = function (oObject, iFrom, iTo, sField) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var iDate = oMod[sField];
            if (iDate >= iFrom && iDate <= iTo) {
                oResults[sFolder] = oMod;
            }
        }
    }
    return oResults;
};

oPollvault.displayResults = function(oObject, sType) {
    var aMods = Object.keys(oObject);
    $('#results')
        .empty()
        .append('<br>');
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var sTitle = oMod["Title"];
        var url = "https://neverwintervault.org/rolovault/projects/nwn1/" + sType + "/" + sFolder;
        var link = $('<a />')
            .attr('href', url)
            .text(sTitle);
        $('#results')
            .append(link)
            .append('<br>');
    }
};

oPollvault.greaterThanOrEqualTo = function(oObject, sField, iValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
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

oPollvault.handleDateChange = function(event) {
    event.stopPropagation();
    var target = $(event.target);
    var sId = target.attr('id');
    var aShort = ["Apr", "Jun", "Sep", "Nov"];
    var iDays = 0;
    var aId = sId.split("-");
    var sPrefix = aId[0] + "-" + aId[1] + "-";
    var sType = aId[2];
    if (sType === "month") {
        var date = $(('#' + sPrefix + 'date'));
        date.empty();
        var sMonth = target.val();
        if (sMonth !== "Feb") {
            if (aShort.indexOf(sMonth) === -1) {
                iDays = 31;
            } else {
                iDays = 30;
            }
        } else {
            var year = $(('#' + sPrefix + 'year'));
            var sYear = year.val();
            var aLeaps = ["2004", "2008", "2012"];
            if (aLeaps.indexOf(sYear) === -1) {
                iDays = 28;
            } else {
                iDays = 29;
            }
        }
    } else if (sType === "year") {
        var sMonth = $(('#' + sPrefix + 'month')).val();
        if (sMonth === "Feb") {
            var sYear = target.val();
            var aLeaps = ["2004", "2008", "2012"];
            if (aLeaps.indexOf(sYear) === -1) {
                iDays = 28;
            } else {
                iDays = 29;
            }
            var date = $(('#' + sPrefix + 'date'));
            date.empty();
        }
    }
    for (var i = 0; i < iDays; i++) {
        var iDate = i + 1;
        var sDate = String(iDate);
        var option = $('<option></option>');
        option.text(sDate);
        date.append(option);
    }
};

oPollvault.handleSearchButtonClick = function(event) {
    event.stopPropagation();
    var oResults = oPollvault.oCurrentType;
    var sText = $('#text').val();
    if (sText !== "") {
        oResults = oPollvault.matchText(oResults, sText);
    }
    var oMonthNumberMap = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    };
    var sSubmittedFromMonth = $('#submitted-from-month').val();
    sSubmittedFromMonth = oMonthNumberMap[sSubmittedFromMonth];
    var sSubmittedFromDate = $('#submitted-from-date').val();
    if (sSubmittedFromDate.length === 1) {
        sSubmittedFromDate = "0" + sSubmittedFromDate;
    }
    var sSubmittedFromYear = $('#submitted-from-year').val();
    var sSubmittedFrom = sSubmittedFromYear + sSubmittedFromMonth + sSubmittedFromDate;
    var iSubmittedFrom = Number(sSubmittedFrom);
    var sSubmittedToMonth = $('#submitted-to-month').val();
    sSubmittedToMonth = oMonthNumberMap[sSubmittedToMonth]
    var sSubmittedToDate = $('#submitted-to-date').val();
    if (sSubmittedToDate.length === 1) {
        sSubmittedToDate = "0" + sSubmittedToDate;
    }
    var sSubmittedToYear = $('#submitted-to-year').val();
    var sSubmittedTo = sSubmittedToYear + sSubmittedToMonth + sSubmittedToDate;
    var iSubmittedTo = Number(sSubmittedTo);
    if (iSubmittedFrom > 20020101 || iSubmittedTo < 20131231) {
        oResults = oPollvault.checkDate(oResults, iSubmittedFrom, iSubmittedTo, "Submitted");
    }
    var sUpdatedFromMonth = $('#updated-from-month').val();
    sUpdatedFromMonth = oMonthNumberMap[sUpdatedFromMonth];
    var sUpdatedFromDate = $('#updated-from-date').val();
    if (sUpdatedFromDate.length === 1) {
        sUpdatedFromDate = "0" + sUpdatedFromDate;
    }
    var sUpdatedFromYear = $('#updated-from-year').val();
    var sUpdatedFrom = sUpdatedFromYear + sUpdatedFromMonth + sUpdatedFromDate;
    var iUpdatedFrom = Number(sUpdatedFrom);
    var sUpdatedToMonth = $('#updated-to-month').val();
    sUpdatedToMonth = oMonthNumberMap[sUpdatedToMonth]
    var sUpdatedToDate = $('#updated-to-date').val();
    if (sUpdatedToDate.length === 1) {
        sUpdatedToDate = "0" + sUpdatedToDate;
    }
    var sUpdatedToYear = $('#updated-to-year').val();
    var sUpdatedTo = sUpdatedToYear + sUpdatedToMonth + sUpdatedToDate;
    var iUpdatedTo = Number(sUpdatedTo);
    if (iUpdatedFrom > 20020101 || iUpdatedTo < 20131231) {
        oResults = oPollvault.checkDate(oResults, iUpdatedFrom, iUpdatedTo, "Updated");
    }
    var sVotes = $('#votes').val();
    if (sVotes !== "Doesn't Matter") {
        var iVotes = Number(sVotes);
        oResults = oPollvault.greaterThanOrEqualTo(oResults, "Votes", iVotes);
    }
    var sRating = $('#rating').val();
    if (sRating !== "Doesn't Matter") {
        var iRating = Number(sRating);
        oResults = oPollvault.greaterThanOrEqualTo(oResults, "Rating", iRating);
    }
    var sMultiplayer = $('#multiplayer').val();
    if (sMultiplayer !== "Doesn't Matter") {
        var aMultiplayer = [];
        if (sMultiplayer === "Single Player") {
            aMultiplayer.push(sMultiplayer);
            aMultiplayer.push("Single Player or Multiplayer");
        } else if (sMultiplayer === "Multiplayer") {
            aMultiplayer.push(sMultiplayer);
            aMultiplayer.push("Single Player or Multiplayer");
        } else if (sMultiplayer === "Single Player Only") {
            aMultiplayer.push("Single Player");
        } else {
            aMultiplayer.push("Multiplayer");
        }
        oResults = oPollvault.matchOneString(oResults, "Single or Multiplayer", aMultiplayer);
    }
    var sDM = $('#dm').val();
    if (sDM !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "DM Needed", sDM);
    }
    var sAnyLevel = $('#any-level').val();
    var sMinLevel = $('#min-level').val();
    var iMinLevel = Number(sMinLevel);
    oResults = oPollvault.minMaxCharacterLevel(oResults, "Min Character Level", iMinLevel, sAnyLevel);
    var sMaxLevel = $('#max-level').val();
    var iMaxLevel = Number(sMaxLevel);
    oResults = oPollvault.minMaxCharacterLevel(oResults, "Max Character Level", iMaxLevel, sAnyLevel);
    oPollvault.displayResults(oResults, "modules");
};

oPollvault.lessThanOrEqualTo = function(oObject, sField, iValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
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
};

oPollvault.matchOneString = function(oObject, sField, aValues) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
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

oPollvault.matchText = function(oObject, sValue) {
    sValue = sValue.toLowerCase();
    var aMods = Object.keys(oObject);
    var oResults = {};
    var aSearchFields = ["Description", "Title", "Races", "Alignments", 
        "Author", "Setting", "Classes"];
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var aFields = Object.keys(oMod);
        for (var f = 0; f < aSearchFields.length; f++) {
            var sField = aSearchFields[f];
            if (aFields.indexOf(sField) !== -1) {
                var sString = oMod[sField];
                sString = sString.toLowerCase();
                if (sString.indexOf(sValue) !== -1) {
                    oResults[sFolder] = oMod;
                }
            }
        }
    }
    return oResults;
};

oPollvault.minMaxCharacterLevel = function(oObject, sField, iValue, sAny) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var iInteger = oMod[sField];
            if (sAny === "Yes" && iInteger === "Any") {
                oResults[sFolder] = oMod;
            }
            if (sField === "Max Character Level") {
                if (iInteger >= iValue) {
                    oResults[sFolder] = oMod;
                }
            } else {
                if (iInteger <= iValue) {
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
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
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
