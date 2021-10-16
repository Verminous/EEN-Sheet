////////////////////////////////////////////////////////////////////////////////////////////////
// REFRESH APIs
// by Vadorequest
// This function by Vadorequest generates a random number in the "randomNumber" sheet.
// I separated in 2 parts. 1st for the TFUEL supply which gets refreshed every time the trigger is executed.
// And the 2nd part is used for wallet addresses and prices API calls. This part is only executed

// Updates cell U1 with a random number, used to refresh "TFUEL Supply" with time trigger. 
function refreshSupply() {
    SpreadsheetApp.getActive().getSheetByName('LOG').getRange("U3").setValue(getRandomInt(1, 200));
    // Check Currency set by user and apply to charts 
}

// Updates cell A4 with a random number, used to refresh wallet addresses and prices.
function refreshWallets() {
    SpreadsheetApp.getActive().getSheetByName('LOG').getRange("U1").setValue(getRandomInt(1, 200));
}

// Basic randon number generator function.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for refresh button which will update all values on LOG: TFUEL Supply and Wallets + Prices 
function refreshAll() {
    myFirstTime();
    refreshSupply();
    refreshWallets();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TIMER PLUS
// by Verminous
// It will allow the refresh of wallets and prices. 
// Timer reset defined at "EEN_SHEET!R1" and recorded on "LOG!U2". 
// This is in order to prevent to reach limit of API calls defined by Google.

function timerPlus() {
    let ss1 = SpreadsheetApp.getActiveSpreadsheet();
    let yesCount1 = ss1.getRange("LOG!U2");
    let yesAdd1 = yesCount1.getValue();
    yesCount1.setValue(yesAdd1 + 1);

    Utilities.sleep(500);
    let timeTriggerRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("Y126");
    let timeTrigger = timeTriggerRange.getValue();
    let limit = timeTrigger;
    let countRangeStateRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG").getRange("U2");
    let countRangeState = countRangeStateRange.getValue();
    if (countRangeState > limit) {
        resetCell();
        refreshWallets();
    }
}

function resetCell() {
    let ss0 = SpreadsheetApp.getActiveSpreadsheet();
    let yesCount0 = ss0.getRange("LOG!U2");
    let yesAdd0 = yesCount0.getValue();
    yesCount0.setValue(0);
}

//////////////////////////////////////////////////////////////////////////
// MY TIMER
// by Verminous
// Used for delay effects for the on/Off switch button

function myTimer() {
    Utilities.sleep(10);
}



