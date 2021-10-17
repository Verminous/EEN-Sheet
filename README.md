Welcome to EEN Sheet beta! 

In order for this tool to work properly you will need to do some configuration first. 
But before we go any further, please be mindful of the following terms to which I will assume you agree with if you start using this sheet. 

//////////////////////////////////////////////////////////////////////////////

INVESTMENT DISCLAIMER: 

The information provided on this sheet does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of this sheet's content as such. I do not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.

SECURITY DISCLAIMER: 

Please be aware that nowhere on this sheet do I ask for your Wallet Mnemonic Phrase, Private Keys or Keystore files. This sheet uses the information available on the THETA Public Blockchain. For this it makes use of Theta's Explorer API, documentation available here, and Thetascan.io API, documentation available here. In order to import information from these APIs into this sheet, the following Open Source GAS scripts are used: ImportJSON.gs, script available here, and IMPORTJSONAPI.gs, script available here.

In order for you to use this sheet properly you will need to provide this sheet access to your Google Account, input your Theta's main Wallet public address, EEN Wallet public address and an email address for the alerts. No other information is required from you.

PLEASE DON'T insert your Wallet Mnemonic Phrase, Private Keys or Keystore files anywhere on this Sheet, that includes the cells on the sheet and the code available on the Script editor. This sheet does not need that information. If you do so you will risk loosing your funds. I will NOT assume responsibility for any loss of funds caused by your misuse of the EEN Sheet beta and it's code embedded on the cells and on the script editor. Please don't change any of the formulas in this sheet's cells as well as the code on the script editor. If you do so, you will be doing it at your own risk. The only modifications necessary are explained on the configuration steps below. I advise you to have a look at the code before using this sheet. Code is available at Github here. Or you can access the code through the Script editor:

TOOLS -> SCRIPT EDITOR

By continuing with the configuration process explained below you agree to these terms I've explained above and you assume responsibility for your online and offline behavior while using this sheet.
If you don't agree please close this window now, and delete the EEN Sheet beta from your Google Drive. Thank you!

//////////////////////////////////////////////////////////////////////////////

CONFIGURATION: 

Below you will find all the steps necessary in order to get this sheet working. At the end of each step you can close this dialogue box if you are reading this from within the sheet, and come back afterwards for the next steps by pressing the SETUP button which you can find on the Control Panel at the right. If you are reading the Github “README.md” file, you can continue reading this text by pressing the same SETUP button as explained just above.

1 - COPY THE GOOGLE SHEETS FILE: 

First thing we need to do is to copy the Google Sheets File into your Google Drive / Google Docs. For this press the link below which will give you access to the EEN Sheet beta available from my Google Drive:

https://docs.google.com/spreadsheets/d/1yU9qNmp7ITmpy3gNo6k-xOD1UFv5xZDmZChtx0HoBmI/edit?usp=sharing

Now go to:

FILE -> MAKE A COPY

You can name the file however you like.
You will now be able to access the file from both Google Docs and Google Drive.

2 - AUTHORIZATION: 

If you are reading this either you are reading the "README.md" file from this project's Github page, or you already gave this sheet permission to access your Google Account after you pressed the screen art/image on the first time you opened the file. Either way I need to explain how to proceed and the reason for this authorization: 

First thing you need to do is authorize the EEN Sheet beta to access your Google Account. This is because this sheet uses some functions like for example sending email alerts, update wallet balances using APIs, prices etc. This functions will only work if you give the sheet permission to access your Google account. In order to do this simply press the screen art/image shown when you open the file for the first time. A browser pop up window will appear. Follow the steps for the authorization to complete. If you are unsure about the safety of this step please revise the code first by going to this project's Github page available here. Or you can access the code available through the Script editor:

TOOLS -> SCRIPT EDITOR

After EEN Sheet beta receives authorization to access your Google account you may delete the screen vector art/image, and then press the ON/OFF switch at the top of the sheet.

3 - SPREADSHEET SETTINGS

3.1 - LOCALE AND TIMEZONE: 

In Google Sheets go to:

FILE -> SPREADSHEET SETTINGS

A windows will popup where you can configure your Locale and Timezone. 
Locale refers to where you are located or where are you from. Actually you don't really need to insert your real location or nationality. It's more about which type of formatting for dates, formula syntax etc. you feel more comfortable with. I'm not from the UK nor am I living there but I use that Locale because it uses a type of formatting which I am familiar with, so that's the one I use. Regarding the Timezone this one is important to set up properly otherwise it might affect the dates being recorded on the LOG spreadsheet as well as the automatic grouping function for rows on that same spreadsheet which will cause this sheet not to work properly. So be sure to insert your real timezone or one you know for sure is compatible with yours. 

3.2 - PROJECT SETTINGS - TIMEZONE:

This step is equally important. Please go to:

TOOLS -> SCRIPT EDITOR

On the Script editor tab go to:

FILE -> PROJECT PROPERTIES

A new window will popup. On the bottom of this window please insert the same timezone you chose on step 3.1. If you can't find this option it's probably because you are using the new Script editor. ATM we still can use the Legacy editor where this option is available. To access the Legacy editor, on the new Script editor top right click on "Use legacy editor". Now you'll find the option "Project properties" available.  

4 - CONTROL PANEL: 

On the top right you will find the Control Panel. Here you will be able to enter your main wallet address, your EEN wallet address, as well as your email address. This way you will be able to keep track of your TFUEL staking rewards as well as your EEN computing earnings and also receive email alerts when those rewards and earnings are received. Copy paste your main wallet public address from where your TFUEL is being staked into the U3 cell group. Then copy paste your EEN wallet public address where your computing earnings (F@H, video encoding etc) are sent to, into the U5 cell group. Finally, type your email address, where, if you so wish, you'll receive an email notification whenever rewards and earnings are received, into the U6 cell group.

4.1 - EMAIL ALERTS: 

As explained just above you will be able to receive, if you so wish, alerts whenever you receive a staking TFUEL reward, or EEN TFUEL computing earnings. If you don't want to receive any email alerts please don't enter your email address and leave both check boxes unchecked. If you do want to receive one of the alerts, or both, be sure to enter your email address into the U6 cell group, and leave both check boxes, or just one of them, checked. If you are a TFUEL whale I advise you to opt out of the staking rewards ALERTS function as you would receive too many emails. 

4.2 - TIME TRIGGER: 

This sheet will need to import data from the THETA Blockchain at a regular time period in order for it to build the line charts and display the balances, rewards and percentages. In order for this to happen you will need to configure a time trigger which executes a function, built into this sheets code, every time the time trigger executes. This function will refresh and record certain THETA blockchain information on the LOG spreadsheet, such as your Wallet balance, rewards received, TFUEL supply, total TFUEL staked, prices and so on. 

In order to activate the time trigger please go to the Script editor:

- On the Legacy code editor you can go to: Edit -> Current project's triggers
- If you are using the new version of the code editor, on the left press Triggers.

Alternatively you can go to: 

https://script.google.com/home 

Then you will be able to see this sheet's project name: EEN_sheet_beta. 
To the right press the 3 dots and choose TRIGGERS. 

Now on the bottom right, press ADD TRIGGER. You will be presented with a dialogue box where you can configure your Trigger:

	1.	First you will need to choose the function EEN_Sheet_Trigger. 
	2.	Leave HEAD untouched. 
	3.	Source should be TIME-DRIVEN. 
	4.	Type of time based trigger should be MINUTES TIMER. In case you want the 1 hour time period please choose HOUR TIMER.
	5.	Choose between 1, 5 and 10 minutes period. I advise you to choose 10 minutes. But 1 or 5 work too. With the 1 and 5 minutes periods you will run the risk of reaching the daily limit of JSON calls Google allows. Also Google Sheets only allows 5 million cells in 1 project. By using the 1 minute period you might reach this limit probably after 6 months or so. If that happens this sheet will not be able to add new rows on the LOG spreadsheet and you will not be able to keep track of your staking rewards. By using 10 minutes period this cell limit will only be reached after 9 years or so. 
	6.	Regarding time periods above 10 minutes: 15, 30 minutes and 1 hour. The advantage is that the sheet will handle less cells when doing the calculations for the charts etc. and therefore will become more responsive. And the limit of cells will never become a problem. The only downside for using this larger time periods is that the calculations for TFUEL supply change, TFUEL burned, new TFUEL etc might at some point not work properly as the amount of TFUEL being burned increases over time because of increased network usage. This is because as of now the THETA Explorer API and Thetascan.io API do not provide a way to retrieve the amount of TFUEL being burned, neither the amount of new TFUEL being created, from the Theta Blockchain. I hope this changes in the future. As a workaround I wrote some formulas of the LOG spreadsheet which do a good job at the moment in calculating the amount of TFUEL being created and burned. If someone as a better idea on how to do this in a way that will never be affected by increased TFUEL burning please let me know. My email address is given below.
	7.	Press SAVE.

4.2.1 - TRIGGER TIME PERIOD: 

Next step will be to go back to the Control Panel. Once there, where it reads TRIGGER, please indicate which time period you chose on step 4.2: the 1 minute, 5 minutes, 10 minutes, 15 minutes, 30 minutes or the 1 hour time period.
This is important as it will affect the calculations executed on the LOG spreadsheet regarding TFUEL supply, burn, inflation and so on. If you don't set the same time period you choose on step 4.2 this sheet will not work properly.

5 - WAIT FOR DATA: 

Your EEN Sheet beta is now configured. But you will see no data on the main spreadsheet yet. This is because the sheet needs at least 2 data points, or rows with values on the LOG spreadsheet for it to start building the line charts and display the values, balances and percentages. 

I advise you, before you reach any conclusion regarding the effectiveness of this sheet, to let the sheet work for a few hours, or better 24 hours, so that the data presented on the main spreadsheet EEN_SHEET starts making sense.

6 - CHARTS TIME PERIOD: 

After about 24h to 48h of data being recorded on the LOG spreadsheet, you will be able to start using this data validation menu on the Control Panel named CHARTS, not before. Basically it's used to zoom in and out of the line charts. In order for the other time periods to work: 1 week, 1 month etc. you will need to wait for 1 week and 1 month of data, or more, respectively.

//////////////////////////////////////////////////////////////////////////////

CONCLUSION: 

If you need any further help configuring your EEN Sheet beta, or help understanding what this sheet does and how it works, or if you have any criticism, or want to point out some error, or ideas for improvements etc, please reach out to me by email: untrammelled_merida[at]slmail.me 

This sheet is my first coding project. At first I just wanted a basic sheet that I could use to track my TFUEL staking rewards. As I kept building it I got excited about what I could do using simple cell formulas and then went a bit deeper into Google Apps Script and consequently Javascript. As the sheet was approaching its conclusion I realized the THETA community could also make use of this tool so I decided to share it for free. It ain't much, but it's honest work! 

PLEASE SUPPORT ME: 

If you find the EEN sheet beta to be useful to you, please consider making a TFUEL donation. Receiving your support would help me to get the motivation and time necessary to continue learning how to code, to improve this sheet, and eventually coming up with other tools for the THETA Community in the future like for example a Guardian Node Sheet.

My TFUEL Wallet public address is the following:

0xa953867aA815B9B09cFe0349c9FA8aea0F738220

