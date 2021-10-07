//////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN FUNCTION TO BE EXECUTED BY TIME TRIGGER
// by Verminous
// Needs to be configured in Triggers. It will only work well if set for 1, 5 or 10 mins. I prefer 10 min.
// 1 - Execute refreshSupply(): will refresh Blockchain data from API just for TFUEL Supply.
// 2 - Execute timerPlus(): updates timer for remaining Blockchain data.
// 3 - Execute alertRewards(): check for change in rewards/earnings and if so notify user.
// 4 - Execute recordLog(): records new data on the "LOG" sheet.

function EEN_Sheet_Trigger() {

    // Will refresh Blockchain data from API just for TFUEL Supply.
    refreshSupply();

    // Refresh remaining Blockchain values every X minutes, defined by Time Trigger and "EEN_SHEET!R1". 
    // Recommended 10 minutes for time trigger and thus "EEN_SHEET!V8" -> "EEN_SHEET!R1".
    timerPlus();

    // Check for change in rewards/earnings and if so notify user
    alertRewards();

    // Always records row with new values on the bottom of the "LOG" sheet.
    recordLog();
}
