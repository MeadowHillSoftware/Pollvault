//Pollvault
//
//AGPL 3 or later
//Max Number Results: dropdown (10, 50, 100, 200, 400, Show All)
//Hall of Fame: dropdown menu (Doesn't Matter, Yes, No)
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

oPollvault.checkLength = function (oObject, sMin, sMax, sField) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var sLength = oMod[sField];
            if (sLength === "60+") {
                var iLength = 61;
            } else if (sLength === "<1") {
                var iLength = 0;
            } else {
                var iLength = Number(sLength);
            }
            if (sMax === "60+" || "Doesn't Matter") {
                var iMax = 61;
            } else if (sMax === "<1") {
                var iMax = 0;
            } else {
                var iMax = Number(sMax);
            }
            if (sMin === "60+") {
                var iMin = 61;
            } else if (sMin === "<1" || "Doesn't Matter") {
                var iMin = 0;
            } else {
                var iMin = Number(sMin);
            }
            if (iLength >= iMin && iLength <= iMax) {
                oResults[sFolder] = oMod;
            }
        }
    }
    return oResults;
};

oPollvault.displayResults = function(oObject, sType) {
    var aMods = Object.keys(oObject);
    var table = $('<table></table>');
    var headerRow = $('<tr></tr>');
    var titleCell = $('<td>Title</td>');
    headerRow.append(titleCell);
    var creatorCell = $('<td>Author</td>');
    headerRow.append(creatorCell);
    var submittedCell = $('<td>Date<br>Submitted</td>');
    headerRow.append(submittedCell);
    var updatedCell = $('<td>Date<br>Updated</td>');
    headerRow.append(updatedCell);
    var minLevelCell = $('<td>Min<br>Level</td>');
    headerRow.append(minLevelCell);
    var maxLevelCell = $('<td>Max<br>Level</td>');
    headerRow.append(maxLevelCell);
    var minPlayersCell = $('<td>Min #<br>Players</td>');
    headerRow.append(minPlayersCell);
    var maxPlayersCell = $('<td>Max #<br>Players</td>');
    headerRow.append(maxPlayersCell);
    table.append(headerRow);
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var sTitle = oMod["Title"];
        if (sTitle.length > 49) {
            sTitle = sTitle.slice(0, 47) + "...";
        }
        var url = "https://neverwintervault.org/rolovault/projects/nwn1/" + sType + "/" + sFolder;
        var link = $('<a />')
            .attr('href', url)
            .text(sTitle);
        var nameCell = $('<td></td>');
        nameCell.append(link);
        var row = $('<tr></tr>');
        row.append(nameCell);
        var authorCell = $('<td></td>');
        var sAuthor = oMod["Author"];
        if (sAuthor.length > 29) {
            sAuthor = sAuthor.slice(0, 27) + "...";
        }
        authorCell.append(sAuthor);
        row.append(authorCell);
        var submittedDate = $('<td></td>');
        var iSubmitted = oMod["Submitted"];
        var sSubmitted = String(iSubmitted);
        var sSubmittedYear = sSubmitted.slice(0, 4);
        sSubmittedYear = sSubmittedYear.slice(2, 4);
        var sSubmittedMonth = sSubmitted.slice(4, 6);
        if (sSubmittedMonth[0] === "0") {
            sSubmittedMonth = sSubmittedMonth.slice(1, 2);
        }
        var sSubmittedDate = sSubmitted.slice(6, 8);
        if (sSubmittedDate[0] === "0") {
            sSubmittedDate = sSubmittedDate.slice(1, 2);
        }
        sSubmitted = sSubmittedMonth + "-" + sSubmittedDate + "-" + sSubmittedYear;
        var updatedDate = $('<td></td>');
        var iUpdated = oMod["Updated"];
        var sUpdated = String(iUpdated);
        var sUpdatedYear = sUpdated.slice(0, 4);
        sUpdatedYear = sUpdatedYear.slice(2, 4);
        var sUpdatedMonth = sUpdated.slice(4, 6);
        if (sUpdatedMonth[0] === "0") {
            sUpdatedMonth = sUpdatedMonth.slice(1, 2);
        }
        var sUpdatedDate = sUpdated.slice(6, 8);
        if (sUpdatedDate[0] === "0") {
            sUpdatedDate = sUpdatedDate.slice(1, 2);
        }
        sUpdated = sUpdatedMonth + "-" + sUpdatedDate + "-" + sUpdatedYear;
        submittedDate.append(sSubmitted);
        row.append(submittedDate);
        updatedDate.append(sUpdated);
        row.append(updatedDate);
        var minLevelCell = $('<td></td>');
        var sMinLevel = oMod["Min Character Level"];
        minLevelCell.append(sMinLevel);
        row.append(minLevelCell);
        var maxLevelCell = $('<td></td>');
        var sMaxLevel = oMod["Max Character Level"];
        maxLevelCell.append(sMaxLevel);
        row.append(maxLevelCell);
        var minPlayersCell = $('<td></td>');
        var sMinPlayers = oMod["Min # Players"];
        minPlayersCell.append(sMinPlayers);
        row.append(minPlayersCell);
        var maxPlayersCell = $('<td></td>');
        var sMaxPlayers = oMod["Max # Players"];
        maxPlayersCell.append(sMaxPlayers);
        row.append(maxPlayersCell);
        table.append(row);
    }
    $('#results')
        .empty()
        .append('<br>')
        .append(table);
};

oPollvault.excludeByString = function(oObject, sField, sValue) {
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var sString = oMod[sField];
            if (sString !== sValue) {
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
    var sCategory = $('#category').val();
    if (sCategory !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Category", sCategory);
    }
    var sCategory = $('#exclude-category').val();
    if (sCategory !== "Show All") {
        oResults = oPollvault.excludeByString(oResults, "Category", sCategory);
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
    var sVersion = $('#version').val();
    if (sVersion !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Expansions", sVersion);
    }
    var sAnyLevel = $('#any-level').val();
    var sMinLevel = $('#min-level').val();
    var iMinLevel = Number(sMinLevel);
    var sMaxLevel = $('#max-level').val();
    var iMaxLevel = Number(sMaxLevel);
    if (sAnyLevel === "No" || iMinLevel !== 1 || iMaxLevel !== 40) {
        oResults = oPollvault.minMaxCharacterLevel(oResults, "Min Character Level", iMinLevel, sAnyLevel);
        oResults = oPollvault.minMaxCharacterLevel(oResults, "Max Character Level", iMaxLevel, sAnyLevel);
    }
    var sAnyPlayers = $('#any-players').val();
    var sMinPlayers = $('#min-players').val();
    var iMinPlayers = Number(sMinPlayers);
    var sMaxPlayers = $('#max-players').val();
    var iMaxPlayers = Number(sMaxPlayers);
    if (sAnyLevel === "No" || iMinPlayers !== 1 || iMaxPlayers !== 64) {
        oResults = oPollvault.minMaxPlayerNumbers(oResults, "Min # Players", iMinPlayers, sAnyPlayers);
        oResults = oPollvault.minMaxPlayerNumbers(oResults, "Max # Players", iMaxPlayers, sAnyPlayers);
    }
    var sMinLength = $('#min-length').val();
    var sMaxLength = $('#max-length').val();
    if (sMinLength !== "Doesn't Matter" || sMaxLength !== "Doesn't Matter") {
        oResults = oPollvault.checkLength(oResults, sMinLength, sMaxLength, "Gameplay Length");
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
    var sAlignment = $('#alignment').val();
    if (sAlignment !== "") {
        oResults = oPollvault.matchTextInOneField(oResults, "Alignments", sAlignment);
    }
    var sRace = $('#race').val();
    if (sRace !== "") {
        oResults = oPollvault.matchTextInOneField(oResults, "Races", sRace);
    }
    var sClass = $('#class').val();
    if (sClass !== "") {
        oResults = oPollvault.matchTextInOneField(oResults, "Classes", sClass);
    }
    var sSetting = $('#setting').val();
    if (sSetting !== "") {
        oResults = oPollvault.matchTextInOneField(oResults, "Setting", sSetting);
    }
    var sTraps = $('#traps').val();
    if (sTraps !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Tricks & Traps", sTraps);
    }
    var sRoleplay = $('#roleplay').val();
    if (sRoleplay !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Roleplay", sRoleplay);
    }
    var sHack = $('#hack').val();
    if (sHack !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Hack & Slash", sHack);
    }
    var sScope = $('#scope').val();
    if (sScope !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Scope", sScope);
    }
    var sContent = $('#content').val();
    if (sContent !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Content Rating", sContent);
    }
    var sLanguage = $('#language').val();
    if (sLanguage !== "Doesn't Matter") {
        oResults = oPollvault.searchByString(oResults, "Language", sLanguage);
    }
    oPollvault.displayResults(oResults, "modules");
};

oPollvault.handleType = function(event) {
    event.stopPropagation();
    var sType = oPollvault.reader.result;
    oPollvault.oCurrentType = JSON.parse(sType);
    var sName = oPollvault.sType;
    if (sName === "modules") {
        $('#search').removeClass('hidden-element');
    }
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

oPollvault.matchTextInOneField = function(oObject, sField, sValue) {
    sValue = sValue.toLowerCase();
    var aMods = Object.keys(oObject);
    var oResults = {};
    for (var m = 0; m < aMods.length; m++) {
        var sFolder = aMods[m];
        var oMod = oObject[sFolder];
        var aFields = Object.keys(oMod);
        if (aFields.indexOf(sField) !== -1) {
            var sString = oMod[sField];
            sString = sString.toLowerCase();
            if (sString.indexOf(sValue) !== -1) {
                oResults[sFolder] = oMod;
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
            if (iInteger !== "Any") {
                iInteger = Number(iInteger);
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

oPollvault.minMaxPlayerNumbers = function(oObject, sField, iValue, sAny) {
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
            if (iInteger !== "Any") {
                iInteger = Number(iInteger);
            }
            if (sField === "Max # Players") {
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
