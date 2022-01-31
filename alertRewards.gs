////////////////////////////////////////////////////////////////////////////////////////////////
// REWARDS ALERT 
// by Verminous
// Check for change in rewards/earnings and if so notify user.

function alertRewards() {

    // Fetch the present main wallet balance 
    let presentTfuelRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG").getRange("B2");
    let presentTfuel = presentTfuelRange.getValue();
    // Fetch last main wallet balance
    let lastTfuelRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG").getRange(sheet.getLastRow() - 1, 2);
    let lastTfuel = lastTfuelRange.getValue();
    // Fetch the present EEN wallet balance 
    let presentEENRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG").getRange("E2");
    let presentEEN = presentEENRange.getValue();
    // Fetch last EEN wallet balance
    let lastEENRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG").getRange(sheet.getLastRow() - 1, 5);
    let lastEEN = lastEENRange.getValue();
    // Fetch Email address
    let emailAddressRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("U1");
    let emailAddress = emailAddressRange.getValue();
    // Fetch switch state
    let switchStateRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("J1");
    let switchState = switchStateRange.getValue();
    // Fetch REWARD ALERT Switch state
    let alertRewardStateRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("V1");
    let alertRewardState = alertRewardStateRange.getValue();
    // Fetch EEN ALERT Switch state
    let alertEENStateRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("W1");
    let alertEENState = alertEENStateRange.getValue();
    // Wait 5 seconds then verify Switch State 
    Utilities.sleep(1000);
    if (switchState !== "O F F L I N E") {
        // Check Reward alert Switch state
        if (alertRewardState !== "O F F") {
            // If present balance is greater than last logged one, send Alert email
            if (presentTfuel > lastTfuel || presentTfuel < lastTfuel) {
                let message = 'Balance update:' + '\n' + Math.round((presentTfuel - lastTfuel) * 100) / 100 + '\n' + '\n' + 'Total balance:' + '\n' + presentTfuel;
                let subject = 'ALERT';
                MailApp.sendEmail(emailAddress, subject, message);
            }
        }
        //       console.log(switchState,alertRewardState);
        //        console.log(presentTfuel,lastTfuel);
        //        console.log(emailAddress);

        // Check EEN alert Switch state
        if (alertEENState !== "O F F") {
            // If present EEN wallet balance is greater than last logged one, send Alert email
            if (presentEEN > lastEEN || presentEEN < lastEEN) {
                let message = 'EEN wallet balance update:' + '\n' + Math.round((presentEEN - lastEEN) * 100) / 100 + '\n' + '\n' + 'Total balance:' + '\n' + presentEEN;
                let subject = 'ALERT';
                MailApp.sendEmail(emailAddress, subject, message);
            }
        }
        //        console.log(alertEENState);
        //        console.log(presentEEN,lastEEN);
        //        console.log(emailAddress);
    }
}