/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION DIALOGUE
// by Verminous
// This will activate a dialogue explaining the terms and conditions and also how to configure the EEN Sheet.
// Because this uses script/code It can only be activated after the user accepts this Sheet's scripts to access his Google Account.
// The user can also access this dialogue by using "DIALOGUE" button on control panel.

function configDialogue(){
  let ui = SpreadsheetApp.getUi();
  let bccSend = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('EEN_SHEET').getRange(1,21).getValue();
  let bccSendReplace = bccSend.toString().replace(/,/g,"<br>");

  const html = `

<div style="font-family: Arial;">

<b>Welcome to <u>EEN Sheet beta</u></b><u>!<br /></u><br />
In order for this tool to work properly you will need to do some configuration first. <br />But before we go any further, please be mindful of the following terms to which I will assume you agree with if you start using this sheet. <br /><br />//////////////////////////////////////////////////////////////////////////////<br /><br /><u><b>1 </b>- </u><b><u>INVESTMENT DISCLAIMER</u>:</b><br />The information provided on this sheet does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of this sheet's content as such. I do not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.<br /><br /><u><b>2 </b>-</u><b><u> SECURITY</u></b><b><u><b><u> DISCLAIMER</u></b></u>:<br /></b>Please be aware that nowhere on this sheet do I ask for your Wallet Mnemonic Phrase, Private Keys or Keystore files. This sheet uses the information available on the THETA Public Blockchain. For this it makes use of <b>Theta's Explorer API</b>, documentation available <b><a href="https://docs.thetatoken.org/docs/explorer-api-reference" target="_blank">here</a></b>, and <b>Thetascan.io API</b>, documentation available <b><a href="https://www.thetascan.io/document/" target="_blank">here</a></b>. In order to import information from these APIs into this sheet, the following Open Source GAS scripts are used:<b> ImportJSON.gs</b>, script available <b><a href="https://github.com/bradjasper/ImportJSON" target="_blank">here</a></b>, and <b>IMPORTJSONAPI.gs</b>, script<b> </b>available <b><a href="https://github.com/qeet/IMPORTJSONAPI" target="_blank">here</a></b>.<br /><br />In order for you to use this sheet properly you will need to provide this sheet access to your Google Account<b>, </b>input your Theta's main Wallet public address, EEN Wallet public address and an email address for the alerts. No other information is required from you.<br /><br /></div><div style="font-family: Arial;"><b>PLEASE DON'T</b> insert your Wallet Mnemonic Phrase, Private Keys or 
Keystore files anywhere on this Sheet, that includes the cells on the 
sheet and the code available on the Script editor. This sheet does not need that information. If you do so you will 
risk loosing your funds. I will <b>NOT </b>assume responsibility for any loss of funds caused by your misuse of the EEN Sheet and it's code embedded on the cells 
and on the script editor. Please don't change any of the formulas in this sheet's cells as well as the code on the script editor. If you do so, you will be 
doing it at your own risk. The only modifications necessary are explained on the configuration steps below. I advise you to have a look at the code before using this sheet. Code is available at Github <a href="https://github.com/goatchild/EEN-Sheet" rel="nofollow" target="_blank"><b>here</b></a>. Or you can access the code through the Script editor:<br /><br /><b>TOOLS -&gt; SCRIPT EDITOR.<br /><br /></b><div style="font-family: Arial;"><div class="separator" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: left;"><img border="0" data-original-height="312" data-original-width="422" height="148" src="https://1.bp.blogspot.com/-hqtFcIVHvTE/YR58aJ-NGoI/AAAAAAAAoZg/X7Bfff7tp1YAocxcrlLCdkHnOGzjrPwbACLcBGAsYHQ/w200-h148/SCRIPT_EDITOR.png" width="200" /></div><br />
<br />&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><br /><br /><br /><u><b><br /></b></u></div><div style="font-family: Arial; text-align: left;"><br /></div><div style="font-family: Arial;">By continuing with the configuration process explained below you agree to these terms I've explained above and you assume responsibility for your online and offline behavior while using this sheet.<br />If you don't agree please close this window now, and delete the EEN Sheet from your Google Drive. Thank you!<br /><br />//////////////////////////////////////////////////////////////////////////////</div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"><b><u><b></b></u></b></div><div style="font-family: Arial;"><b><u><b></b></u></b></div><div style="font-family: Arial;"><b><u><b><u><br /></u>COPY THE GOOGLE SHEETS FILE:</b></u></b></div><div style="font-family: Arial;">First thing we need to do is to copy the Google Sheet File into your Google Drive or Google Docs. For this press the link below which will give you access to the <b>EEN Sheet beta </b>available from my Google Drive<u>:<br /><br /><a href="https://docs.google.com/spreadsheets/d/1DS8vd7LcP8OO9NDMIfQvAUqfFSXBXkre1AjCSlmFyMY/edit?usp=sharing" target="_blank">https://docs.google.com/spreadsheets/d/1DS8vd7LcP8OO9NDMIfQvAUqfFSXBXkre1AjCSlmFyMY/edit?usp=sharing</a></u><br /><br />Now go to:<br /><br /><b>FILE -&gt; MAKE A COPY<br /><br /></b>You can name the file however you like.<br />You will now be able to access the file from both Google Docs and Google Drive:<br /><a href="https://docs.google.com" target="_blank">https://docs.google.com</a><br /><a href="https://drive.google.com" target="_blank">https://drive.google.com</a><br /><b><u><br /></u></b></div><div style="font-family: Arial;"><b><u>CONFIGURATION:<br /></u></b>Below you will find all the steps necessary in order to get this sheet working. At the end of each step you can close this dialogue box if you are reading this from within the sheet, and come back afterwards for the next steps by pressing the SETUP button which you can find on the Control Panel at the right. If you are reading the Github “README.md” file, you can continue reading this text by pressing the same SETUP button as explained just above.<br /></div><div style="font-family: Arial;"><br /></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"><div class="separator" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="348" data-original-width="904" height="123" src="https://1.bp.blogspot.com/-lBQG8MDXK6U/YR5v5AQMC9I/AAAAAAAAoXg/1yMJdAR67Qkik01Zt-kyI0ynKheKyWjmQCLcBGAsYHQ/w320-h123/AUTHORIZATION.png" width="320" /></div><br />
<u><b><br /><br /><br /><br /><br /><br /><br />1 - AUTHORIZATION: </b></u>
<br />
If you are reading this either you are reading the README.md file from this project's Github page, or you already gave this sheet permission to access your Google Account after you pressed the screen on the first time you opened the file. Either way I need to explain how to proceed and the reason for this authorization: <br /><br />First thing you need to do is authorize the <b>EEN Sheet beta</b> to access your Google Account. This is because this sheet uses some functions like for example sending email alerts, update wallet balances using APIs, prices etc. This functions will only work if you give the sheet permission to access your Google account. In order to do this simply press the screen shown when you open the file for the first time. A browser pop up window will appear. Follow the steps for the authorization to complete. If you are unsure about the safety of this step please revise the code first by going to this project's Github page available <a href="https://github.com/goatchild/EEN-Sheet" rel="nofollow" target="_blank"><b>here</b></a>. Or you can access the code available through the Script editor:<br /><br />
<b>TOOLS -&gt; SCRIPT EDITOR.<br /><br /></b></div><div style="font-family: Arial;"><div class="separator" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: left;"><img border="0" data-original-height="312" data-original-width="422" height="148" src="https://1.bp.blogspot.com/-hqtFcIVHvTE/YR58aJ-NGoI/AAAAAAAAoZg/X7Bfff7tp1YAocxcrlLCdkHnOGzjrPwbACLcBGAsYHQ/w200-h148/SCRIPT_EDITOR.png" width="200" /></div><br />
<br />&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;"><br />After EEN Sheet receives authorization to access your Google account you may delete the screen vector art/image, and then press the ON/OFF switch at the top of the sheet.<br /></div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;"><u><b>2 - CONTROL PANEL</b></u></div><div style="font-family: Arial;">On the top right you will find the Control Panel. Here you will be able to enter your main wallet address, your EEN wallet address, as well as your email address.
This way you will be able to keep track of your TFUEL staking rewards as well as your EEN computing earnings and also receive email alerts when those rewards and earnings are received.
Copy paste your main wallet public address from where your TFUEL is being staked into the U3 cell group. Then copy paste your EEN wallet public address where your computing earnings (F@H, video encoding etc) are sent to, into the U5 cell group. Finally, type your email address, where, if you so wish, you'll receive an email notification whenever rewards and earnings are received, into the U6 cell group.<div style="bottom: 0px; left: 0px; position: relative;"><br /></div>
<u><div class="separator" style="clear: both; text-align: center;"><div class="separator" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="378" data-original-width="734" height="165" src="https://1.bp.blogspot.com/-mVXKUrrhwZo/YR5znILkepI/AAAAAAAAoYw/6fGR7rwbI1sQW95RT8PxhSm5vTz4txROACLcBGAsYHQ/s320/PANEL.png" width="320" /></div></div><br /><b><br /><br /><br /><br /><br /></b></u></div><div style="font-family: Arial;"><div style="text-align: left;"><div class="separator" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="136" data-original-width="714" height="61" src="https://1.bp.blogspot.com/-IDqWRicV-CM/YR5zIthkfPI/AAAAAAAAoYk/fr0YrsWeqH0lk7wwX1GbvNrDPgPD27GRACLcBGAsYHQ/s320/ALERTS.png" width="320" /></div><u></u></div><u><br /></u></div><div style="font-family: Arial;"><u><b><br /><br /><br /><br /><br /><br /><br /><br />2.1 - EMAIL ALERTS </b></u>
<br />
As explained just above you will be able to receive, if you so wish, alerts whenever you receive a staking TFUEL reward, or EEN TFUEL computing earnings. If you don't want to receive any email alerts please don't enter your email address and leave both check boxes unchecked. If you do want to receive one of the alerts, or both, be sure to enter your email address into the U6 cell, and leave both check boxes, or just one of them, checked.
If you are a TFUEL whale I advise you to opt out of the staking rewards ALERTS function as you would receive too many emails.&nbsp;</div><div style="font-family: Arial;">&nbsp;<u><b><br />2.2 - TIME TRIGGER </b></u><br /></div><div style="font-family: Arial;">This sheet will need to import data from the THETA Blockchain at a regular time period in order for it to build the line charts and display the balances, rewards and percentages. In order for this to happen you will need to configure a time trigger which executes a function, built into this sheets code, every time the time trigger executes. This function will refresh and record certain THETA blockchain information on the <b>LOG</b> spreadsheet, such as your Wallet balance, rewards received, TFUEL supply, total TFUEL staked, prices and so on.
<br /><br />In order to activate the time trigger please go to the Script editor:<br /><br />- On the Legacy code editor you can go to:<b> Edit -&gt; Current project's triggers</b><br />- If you are using the new version of the code editor, on the left press <b>Triggers.</b><br /><br />
Alternatively you can go to:
<br />
<a href="https://script.google.com/home" target="blank">https://script.google.com/home</a>
<br />
Then you will be able to see this sheet's project name: <b>EEN_sheet_beta</b>. 
<br />
To the right press the 3 dots and choose <b>TRIGGERS</b>.&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">Now on the bottom right, press <b>ADD TRIGGER</b>.
You will be presented with a dialogue box where you can configure your Trigger:</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;"><a href="https://1.bp.blogspot.com/-fA0gsa1HxcI/YV9a4ARtKvI/AAAAAAAAoc8/7c8MAcHxYlQGsNVTuSi81UJun4M-K_PSwCLcBGAsYHQ/s754/Screenshot%2B2021-10-07%2Bat%2B21.38.24.png" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" data-original-height="754" data-original-width="642" height="259" src="https://1.bp.blogspot.com/-fA0gsa1HxcI/YV9a4ARtKvI/AAAAAAAAoc8/7c8MAcHxYlQGsNVTuSi81UJun4M-K_PSwCLcBGAsYHQ/w220-h259/Screenshot%2B2021-10-07%2Bat%2B21.38.24.png" width="220" /></a> <br /></div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;">&nbsp;</div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"></div><div style="font-family: Arial;"><br /><br /><br /><a href="https://1.bp.blogspot.com/-fA0gsa1HxcI/YV9a4ARtKvI/AAAAAAAAoc8/7c8MAcHxYlQGsNVTuSi81UJun4M-K_PSwCLcBGAsYHQ/s754/Screenshot%2B2021-10-07%2Bat%2B21.38.24.png" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><br /><br /><br /><br /></a><ol style="text-align: left;"><li> First you will need to choose the function <b>EEN_Sheet_Trigger</b>. </li><li>Leave <b>HEAD</b> untouched. </li><li>Source should be <b>TIME-DRIVEN</b>. </li><li>Type of time based trigger should be <b>MINUTES TIMER</b>. In case you want the 1 hour time period please choose <b>HOUR TIMER</b>.<br /></li><li>Choose between 1, 5 and 10 minutes period. I advise you to choose 10 minutes. But 1 or 5 work too. With the 1 and 5 minutes periods you will run the risk of reaching the daily limit of JSON calls Google allows. Also Google Sheets only allows 5 million cells in 1 project. By using the 1 minute period you might reach this limit probably after 6 months or so. If that happens this sheet will not be able to add new rows on the <b>LOG</b> spreadsheet and you will not be able to keep track of your staking rewards. By using 10 minutes period this cell limit will only be reached after 9 years or so.&nbsp;</li><li>Regarding time periods above 10 minutes: 15, 30 minutes and 1 hour. The advantage is that the sheet will handle less cells when doing the calculations for the charts etc. and therefore will become more responsive. And the limit of cells will never become a problem. The only downside for using this larger time periods is that the calculations for TFUEL supply change, TFUEL burned, new TFUEL etc might at some point not work properly as the amount of TFUEL being burned increases over time because of increased network usage. This is because as of now the THETA Explorer API and Thetascan.io API do not provide a way to retrieve the amount of TFUEL being burned, neither the amount of new TFUEL being created, from the Theta Blockchain. I hope this changes in the future. As a workaround I wrote some formulas of the <b>LOG</b> spreadsheet which do a good job at the moment in calculating the amount of TFUEL being created and burned. If someone as a better idea on how to do this in a way that will never be affected by increased TFUEL burning please let me know. My email address is given below.<br /></li><li>Press <b>SAVE</b>.<br /><br /></li></ol>

</div><div style="font-family: Arial;"><div style="text-align: left;"><div class="separator" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="96" data-original-width="362" height="53" src="https://1.bp.blogspot.com/-rPLNkDgoV9c/YR5yt_XZhDI/AAAAAAAAoYU/-Fm4mMWT-lMDnT6qLB4Cs6ty3wcj-UWtQCLcBGAsYHQ/w200-h53/CHOSEN_TRIGGER.png" width="200" /></div><u></u></div><u><br />
<b><br /><br /><br />2.2.1 - TRIGGER TIME PERIOD </b></u>
<br />
Next step will be to go back to the Control Panel. Once there, where it reads <b>TRIGGER</b>, please indicate which time period you chose on step <b>2.2</b>: the 1 minute, 5 minutes, 10 minutes, 15 minutes, 30 minutes or the 1 hour time period.<br />This is important as it will affect the calculations executed on the <b>LOG</b> spreadsheet regarding TFUEL supply, burn, inflation and so on. If you don't set the same time period you choose on step <b>2.2 </b>this sheet will not work properly.<br /><div style="bottom: 0px; left: 0px; position: relative;"></div><div style="bottom: 0px; left: 0px; position: relative;"></div><div style="bottom: 0px; left: 0px; position: relative;"></div><div style="bottom: 0px; left: 0px; position: relative;"></div><div style="bottom: 0px; left: 0px; position: relative;"><br /><br /><img border="0" data-original-height="216" data-original-width="758" height="91" src="https://1.bp.blogspot.com/-AYJpTnC8iO4/YR50bJ4SxnI/AAAAAAAAoY8/2AXLEdwB1yMcJesUdCpnt2REb7tDa0rNQCLcBGAsYHQ/s320/WAITING.png" width="320" /><br /></div>
<b><br /><u>3 - WAIT FOR DATA </u></b>
<br />
Your EEN Sheet is now configured. But you will see no data on the main spreadsheet yet. This is because the sheet needs at least 2 data points, or rows with values on the <b>LOG</b> spreadsheet for it to start building the line charts and display the values, balances and percentages.
<br /><br />I advise you, before you reach any conclusion regarding the effectiveness of this sheet, to let the sheet work for a few hours, or better 24 hours, so that the data presented on the main spreadsheet <b>EEN_SHEET</b> starts making sense.<br /></div>
<div style="bottom: 0px; left: 0px; position: relative;">&nbsp;</div><div style="bottom: 0px; left: 0px; position: relative;">&nbsp;</div><div style="bottom: 0px; left: 0px; position: relative;"><div class="separator" style="clear: both; text-align: left;"><img border="0" data-original-height="96" data-original-width="356" height="54" src="https://1.bp.blogspot.com/-OYpfzxaB9Uk/YR51c93HXxI/AAAAAAAAoZI/-icpkoq98gIKOE7waftlcXvdqsh68zOPwCLcBGAsYHQ/w200-h54/CHARTS_TIME.png" width="200" /><br /><br /></div><div class="separator" style="clear: both; text-align: left;"><img border="0" data-original-height="204" data-original-width="356" height="114" src="https://1.bp.blogspot.com/-x8WEIFpMTJs/YR51oFN2p9I/AAAAAAAAoZQ/wMWf4_mdcxgr9bXl8dBlDfRHXI5-lSy8ACLcBGAsYHQ/w200-h114/CHART.png" width="200" /></div><div style="font-family: Arial;"><b><br /><u>4 - CHARTS TIME PERIOD </u></b></div><div style="font-family: Arial;">After about 24h to 48h of data being recorded on the <b>LOG</b> spreadsheet, you will be able to start using this data validation menu on the Control 
Panel named <b>CHARTS</b>, not before. Basically it's used to zoom in and out of the line charts. In order for the other time periods to work: 1 week, 1 month etc. you will need to wait for 1 week and 1 month of data, or more, respectively.<br /><br />//////////////////////////////////////////////////////////////////////////////<br />

<br />
<u><b>CONCLUSION </b></u>
<br />
If you need any further help configuring your EEN Sheet, or help understanding what this sheet does and how it works, or if you have any criticism, or want to point out some error, or ideas for improvements etc, please reach out to me by email: <span class="clipboard cursor mb-0" data-clipboard-text="untrammelled_merida@slmail.me" data-intro="This is your first &lt;em&gt;alias&lt;/em&gt;. &lt;br&gt;&lt;br&gt;
          Emails sent to an alias are &lt;em&gt;forwarded&lt;/em&gt; to your &lt;em&gt;real&lt;/em&gt; email address. &lt;br&gt;&lt;br&gt;" data-original-title="Click to copy" data-step="2" data-toggle="tooltip" title=""><span class="font-weight-bold">untrammelled_merida[at]slmail.me</span></span>
<br /><br />
This sheet is my first coding project. At first I just wanted a basic sheet that I could use to track my TFUEL staking rewards. As I kept building it I got excited about what I could do using simple cell formulas and then went a bit deeper into Google Apps Script and consequently Javascript. As the sheet was approaching its conclusion I realized the THETA community could also make use of this tool so I decided to share it for free. It ain't much, but it's honest work!&nbsp;<br /><br /><u><b>PLEASE SUPPORT ME</b></u><br />
If you find this EEN sheet to be useful to you, please consider making a TFUEL donation. Receiving your support would help me to get the motivation and time necessary to continue learning how to code, to improve this sheet, and eventually coming up with other tools for the THETA Community in the future like for example a Guardian Node Sheet.<br /><br />
My THETA / TFUEL Wallet address is the following:
<br />
<b>0xa953867aA815B9B09cFe0349c9FA8aea0F738220</b><br /></div>
</div>

  `;
  ui.showModalDialog(HtmlService.createHtmlOutput(html), 'PLEASE READ CAREFULLY!');
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// CHECK IF SHEET IS CONFIGURED
// by Verminous
// Will check if main wallet address Cell on "EENSHEET!S1" is empty. If so run `configDialogue()`

function myFirstTime() {
  let checkFirstTime = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EEN_SHEET").getRange("S1");
  let checkFirstTimeTrigger = checkFirstTime.getValue();
  console.log(checkFirstTimeTrigger);
  if (checkFirstTimeTrigger === "" || checkFirstTimeTrigger === " " || checkFirstTimeTrigger === null) {
      configDialogue();
  }
}

 

