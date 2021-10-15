////////////////////////////////////////////////////////////////////////////////////////////////
// ON OFF SWITCH
// by Verminous
// Used for the On/Off switcho button on "EEN_SHEET" sheet.


function onOffSwitch() {

    let onOffSwitchBtRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("A126");
    let onOffSwitchBt = onOffSwitchBtRange.getValue();

    if (onOffSwitchBt) {
        onOffSwitchBtRange.setValue("FALSE");
    }
    else {
        onOffSwitchBtRange.setValue("TRUE");
    }
}
