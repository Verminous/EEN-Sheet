//////////////////////////////////////////////////////////////////////////////////////////////////////
// RECORD LOG 
// Here we will find the main part of the code responsible for recording blockchain data on the LOG.
// It keeps the LOG sheet organized by grouping rows by day, month and years.
// It will also keep the LOG sheet clean, without any errors caused bt API calls and Google time triggers.
// 1 - Declares global constant variables.
// 2 - Declares the function recordLog() which records data at the bottom of "LOG" sheet
// 3 - Declares the functions for grouping of rows: group_by_days(), group_by_months() and group_by_years().
// 4 - Declares the function checkRows() to check if day, month or year have passed, if so execute corresponding function.
// 5 - Declares the function formatNumbers() to keep the "LOG" values properly formated.
// 6 - Declares the function correctLogErrors() to keep the "LOG" free of "Loading…" errors.
// 7 - Declares the function deleteTriggerError() to keep the "LOG" free of Google's Time Trigger errors.
// 8 - Declares 2 other tweaks (functions): minuteConverter() and toBottom(). 

//////////////////////////////////////////////////////////////////////////////////////////////////////
// CONSTANT VARIABLE DECLARATION
// by Verminous
// Identify Sheet, TimeZone and Locale

const logSheetName = "LOG";
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(logSheetName);
const timeZone = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone();
const locale = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetLocale();

/////////////////////////////////////////////////////////////////////////////////////////////////////
// RECORD NEW ROWS WITH VALUES TO BOTTOM OF LOG
// by mix1009
// Will simply get the new updated values at row 2 and record these on new rows at the bottom of "LOG" sheet

function recordLog() {
    let logSheet = getSheetWithName(logSheetName);
    if (logSheet === null) {
        logSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(logSheetName, 1);
    }
    rangeX = logSheet.getRange(2, 1, 1, sheet.getLastColumn());
    let valuesX = rangeX.getValues();
    valuesX[0][0] = new Date();
    logSheet.appendRow(valuesX[0]);

    // Custom functions executed after new row is recorded:

    // checks for Google triggers errors
    deleteTriggerError();

    // checks for API call errors
    correctLogErrors();

    // compares 2 last rows to determine change by day, month, year
    checkRows();

    // keeps columns formated to its proper number format: date, currencies, percentage, number
    formatNumbers();

    // maintains active cell at the bottom of LOG
    toBottom();

    // Maintains empty row at the bottom
    sheet.appendRow([""]);
}

function getSheetWithName(name) {
    let sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    for (let idx in sheets) {
        if (sheets[idx].getName() === name) {
            return sheets[idx];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// GROUPS FUNCTION
// by Yuri Khristich
// Will group rows by DAY, MONTH and YEAR.
// My tweaks: 
// Will only group last day, month and year when over at 24h00m.
// Will automatically organize with Year number and month names after these are over at 24h00m.

let rowBlock = sheet.getRange(sheet.getLastRow() - 1, 1).getValue();   // Get value for second last row
let cells;
let firstRowOfBlock;

// Used for getting the arrays with blocks of rows of `d`+ `m`+ `y`
let range = sheet.getRange("A4:A");
console.log(range);
let startRow = range.getRow();

// GROUP ROWS BY YEARS
function group_by_years() {
    // Used to get block of rows for last year
    let [yrs] = Utilities.formatDate(rowBlock, timeZone, "yyyy").split(",");
    let cells = range.getValues().map((x, i) => x.concat(i + startRow)).filter(x => {   // filter "dd"
        let date = new Date(x[0]);
        let year = date.getFullYear();
        return (`${yrs}` === `${year}`);
    }).map(x => x[1]);
    // Used to get index of block of rows
    firstRowOfBlock = cells[0];
    // Creates new row with year number for easy group navigation
    sheet.insertRowBefore(cells[0]);
    sheet.getRange(cells[0], 1).setValue(new Date(yrs, 0, 1, 0, 0, 0, 1)).setNumberFormat('YYYY');
    sheet.getRange(firstRowOfBlock, 1, 1, sheet.getLastColumn()).setBackground('#131928');
    sheet.getRange(cells[0], 1).setFontSize(10);
    sheet.getRange(cells[0], 1).setFontWeight("bold");
    sheet.getRange(firstRowOfBlock, 1, 1, sheet.getLastColumn()).setBorder(false, false, true, false, false, false, "#000000", SpreadsheetApp.BorderStyle.DOTTED);
    // Grouping Function.
    get_rows_array().forEach(y => shift_rows(y.map(m => m.flat()).flat(), sheet));
}

// GROUP ROWS BY MONTHS
function group_by_months() {
    // Used to get block of rows for last month
    let [yrs, mths] = Utilities.formatDate(rowBlock, timeZone, "yyyy,MM").split(",");
    let cells = range.getValues().map((x, i) => x.concat(i + startRow)).filter(x => {   // filter "dd"
        let date = new Date(x[0]);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        return (`${yrs}` === `${year}` && `${mths}` === `${month}`);
    }).map(x => x[1]);
    // Used to get index of block of rows
    firstRowOfBlock = cells[0];
    // Creates new row with month name for easy group navigation
    sheet.insertRowBefore(cells[0]);
    sheet.getRange(firstRowOfBlock, 1).setValue(new Date(yrs, mths - 1, 1, 0, 0, 0, 1)).setNumberFormat('MMMM');
    sheet.getRange(firstRowOfBlock, 1, 1, sheet.getLastColumn()).setBackground('#131928');
    sheet.getRange(firstRowOfBlock, 1).setFontSize(9);
    sheet.getRange(firstRowOfBlock, 1).setFontWeight("bold");
    sheet.getRange(firstRowOfBlock, 1, 1, sheet.getLastColumn()).setBorder(false, false, true, false, false, false, "#000000", SpreadsheetApp.BorderStyle.DOTTED);
    // Grouping function.
    get_rows_array().flat().forEach(m => shift_rows(m.flat(), sheet));
}

// GROUP ROWS BY DAYS
function group_by_days() {
    // Used to get block of rows for last day "dd", month "MM" and year "YYYY"
    let [yrs, mths, dys] = Utilities.formatDate(rowBlock, timeZone, "yyyy,MM,dd").split(",");
    let cells = range.getValues().map((x, i) => x.concat(i + startRow)).filter(x => {   // filter "dd"
        let date = new Date(x[0]);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = date.getDate();
        return (`${yrs}` === `${year}` && `${mths}` === `${month}` && `${dys}` === `${day}`);
    }).map(x => x[1]);
    // Used to get index of block of rows
    firstRowOfBlock = cells[0];
    // Check for errors and correct these
    correctLogErrors();
    // Grouping Function
    get_rows_array().flat().flat().forEach(d => shift_rows(d.flat(), sheet));
}

function get_rows_array() {
    let rowStart = firstRowOfBlock;
    let rows = sheet.getLastRow() - rowStart + 1;
    let values = sheet.getRange(rowStart, 1, rows, 1).getValues().flat();
    let o = {};
    // make the object {'year': { 'month':[days] } }
    values.forEach((date, i) => {
        let [y, m, d] = Utilities.formatDate(date, timeZone, "yyyy,MM,dd").split(",");
        // console.log(y, m, d);
        if (!o[y]) o[y] = {};
        if (!o[y][m]) o[y][m] = {};
        if (!o[y][m][d]) o[y][m][d] = [];
        o[y][m][d].push(rowStart + i);
    });

    // convert the unordered object {year:{month:[days]}}
    // into the ordered 3d-array [year[month[days]]]
    const numsort = (a, b) => parseInt(a) - parseInt(b);
    return Object.keys(o).sort(numsort)
        .map(y => Object.keys(o[y]).sort(numsort)
            .map(m => Object.values(o[y][m]).sort(numsort)));
}

function shift_rows(rows, sheet) {
    if (rows.length === 1) return;
    let range = `${rows[1]}:${rows.slice(-1)}`;
    sheet.getRange(range).shiftRowGroupDepth(1);
    // Collapse group.
    let groupClps = sheet.getRowGroup(firstRowOfBlock, 1);
    groupClps.collapse();

}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// CHECK ROWS 
// by Verminous
// Function that compares 2 last rows to determine: change by day (d), by month (d+M) or by year (d+M+Y)

function checkRows() {
    // Get last and second last row numbers
    let lastRow = sheet.getLastRow();
    let secondLastRow = lastRow - 1;

    // Get the dates of those rows
    let dateLast = sheet.getRange(lastRow, 1).getValue();
    let dateSecondLast = sheet.getRange(secondLastRow, 1).getValue();

    // retrieving day of the month from last 2 rows
    let dayLastRow = Utilities.formatDate(dateLast, timeZone, "dd");
    let daySecondLastRow = Utilities.formatDate(dateSecondLast, timeZone, "dd");

    // retrieving month nº from last 2 rows
    let monthLastRow = Utilities.formatDate(dateLast, timeZone, "MM");
    let monthSecondLastRow = Utilities.formatDate(dateSecondLast, timeZone, "MM");

    // retrieving year from last 2 rows
    let yearLastRow = Utilities.formatDate(dateLast, timeZone, "yyyy");
    let yearSecondLastRow = Utilities.formatDate(dateSecondLast, timeZone, "yyyy");

    if (yearLastRow > yearSecondLastRow) {
        group_by_years();
        group_by_months();
        group_by_days();
    } else {
        if (monthLastRow > monthSecondLastRow) {
            group_by_months();
            group_by_days();
        } else {
            if (dayLastRow > daySecondLastRow) {
                group_by_days();
            } else {
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FORMAT COLUMNS 
// by Verminous
// Function to reformat cells as new values are being recorded, in order to prevent problems with number formats.
// Function ill be called by recordLog().

function formatNumbers() {
    sheet.getRange(sheet.getLastRow(), 2).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 3).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 4).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 5).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 6).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 7).setNumberFormat("0.00%");
    sheet.getRange(sheet.getLastRow(), 8).setNumberFormat("0.00%");
    sheet.getRange(sheet.getLastRow(), 9).setNumberFormat("General");
    sheet.getRange(sheet.getLastRow(), 10).setNumberFormat("General");
    sheet.getRange(sheet.getLastRow(), 11).setNumberFormat("General");
    sheet.getRange(sheet.getLastRow(), 12).setNumberFormat("0.00%");
    sheet.getRange(sheet.getLastRow(), 13).setNumberFormat("General");
    sheet.getRange(sheet.getLastRow(), 14).setNumberFormat("0.00%");
    sheet.getRange(sheet.getLastRow(), 15).setNumberFormat("0.00%");
    sheet.getRange(sheet.getLastRow(), 16).setNumberFormat("0.00%");
    sheet.getRange(sheet.getLastRow(), 17).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 18).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 19).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow(), 20).setNumberFormat("#,##0.00");
    sheet.getRange(sheet.getLastRow() - 1, 1, sheet.getLastRow(), 1).setBorder(null, null, null, true, null, null, "#3f4b77", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 2, sheet.getLastRow(), 2).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 3, sheet.getLastRow(), 3).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 4, sheet.getLastRow(), 4).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 5, sheet.getLastRow(), 5).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 6, sheet.getLastRow(), 6).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 7, sheet.getLastRow(), 7).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 8, sheet.getLastRow(), 8).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 9, sheet.getLastRow(), 9).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 10, sheet.getLastRow(), 10).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 11, sheet.getLastRow(), 11).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 12, sheet.getLastRow(), 12).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 13, sheet.getLastRow(), 13).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 14, sheet.getLastRow(), 14).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 15, sheet.getLastRow(), 15).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 16, sheet.getLastRow(), 16).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 17, sheet.getLastRow(), 17).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 18, sheet.getLastRow(), 18).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 19, sheet.getLastRow(), 19).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 20, sheet.getLastRow(), 20).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
    sheet.getRange(sheet.getLastRow() - 1, 21, sheet.getLastRow(), 21).setBorder(null, true, null, true, null, null, "#364167", SpreadsheetApp.BorderStyle.DOTTED);;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DELETE ERROR "Loading…"
// by Tanaike
// Sometimes the API calls get an error. I changed "#ERROR" to "Loading…" but still "Loading…" gets recorded to the cells sometimes.
// This code will replace "Loading…" with the value on the cell above.

function correctLogErrors() {
    // Get sheet and date range
    let sheetX = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG");
    // Get cell range  
    let checkRangeX = sheetX.getRange(sheetX.getLastRow() - 1, 2, sheetX.getLastRow() - sheetX.getLastRow() + 2, sheetX.getLastColumn() - 1);
    // Get array from range
    const currentValues = checkRangeX.getDisplayValues();
    // Replace errors "Loading…" with value from cell above, at the array level
    const transposed = currentValues[0].map((_, c) => currentValues.map(r => r[c]));
    const transposedValues = transposed.map(row => {
        let temp = "";
        return row.map((e, i) => {
            if (i > 0) {
                if (e === "Loading…") {
                    return temp;
                } else {
                    temp = e;
                }
            } else {
                temp = e;
            }
            return e;
        });
    });
    const values = transposedValues[0].map((_, c) => transposedValues.map(r => r[c]));
    // console.log(values)
    // Write array without errors back to cell range
    checkRangeX.setValues(values);
}

//////////////////////////////////////////////////////////////////////////////////////////////
// DELETE TRIGGER ERROR
// by Verminous
// Google trigger tool even if set for ex. 10 min, it will sometimes be executed 3 or 4 times in a row with less than 1 min. apart.
// This script will check the time difference in minutes between the last and second last rows after `recordLog()` is executed.
// If the difference is less than "X", depending on the user configuration can be 1, 5 or 10 mins, it will delete the new row.
// I added a tollerance of 30 secs for 10 min; 20 secs for 5 min; and 15 secs for 1 min. 
// I used minuteConverter() function to convert time to decimals, so the script understands what I want the tolerance to be. 

function deleteTriggerError() {
    let logSheetName = "LOG";
    let logSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(logSheetName);
    let lastRowTimer = new Date(logSheet.getRange(logSheet.getLastRow(), 1).getValue());
    let secondLastRowTimer = new Date(logSheet.getRange(logSheet.getLastRow() - 1, 1).getValue());
    let timerDifference = (((lastRowTimer.getTime() - secondLastRowTimer.getTime()) / 1000) / 60);
    let timerDifLimitRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("V8").getValue();
    let timerDifLimitValue;
    // console.log(timerDifference);
    switch (timerDifLimitRange) {
        case '1 0  M I N U T E S':
            timerDifLimitValue = timerDifLimitRange.replace("1 0  M I N U T E S", minuteConverter('9:45'));
            break
        case '5  M I N U T E S':
            timerDifLimitValue = timerDifLimitRange.replace("5  M I N U T E S", minuteConverter('4:45'));
            break
        case '1  M I N U T E':
            timerDifLimitValue = timerDifLimitRange.replace("1  M I N U T E", minuteConverter('0:45'));
            break
        default:
    }
    logSheet.appendRow([""]);
    if (timerDifference < timerDifLimitValue) {
        // console.log(timerDifference, timerDifLimitValue);
        logSheet.deleteRow(logSheet.getLastRow());
    } else {
        // console.log("FALSE");
    }
}

////////////////////////////////////////////////////
// Converts time to decimals. Used for switch above.
// by RoToRa
function minuteConverter(time) {
    const [h, m] = time.split(':');
    const value = +h + +m / 60;
    return value.toFixed(2);
}

//////////////////////////////////////////////////////////////////////////////////////////////
// SET SCROLL POSITION
// by Verminous
// Used to get the scroll position to the bottom of "LOG".
// Will also set "LOG" as the active sheet 2 seconds after opening the spreadsheet (was not my intention).

function toBottom() {
    sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1));
}


