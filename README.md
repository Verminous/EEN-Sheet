# EEN-Sheet
Tracking EEN TFUEL Staking rewards and EN Computing / Edge earnings
 Welcome to EEN Sheet beta !

In order for this tool to work properly you will need to do some configuration first.
But before we go any further, please be mindful of the following terms to which I will assume you agree with if you continue with the configuration process.

//////////////////////////////////////////////////////////////////////////////

1 - DISCLAIMER:
The information provided on this Sheet does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of this Sheet's content as such. I do not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.

2 - SECURITY:
2.1 - Regarding the security of your funds: I assume you are already familiar with how Blockchain works, what Mnemonic Phrase, Private Keys and Keystore files are. If you are not STOP now, close this window and delete this Sheet from your Google Drive ASAP! And come back, if you so wish, once you have a good solid understanding of what Blockchain is and how it works.

2.2 - If you are still here I will assume that you are knowledgeable of what is the Blockchain and how it works. Please be aware that nowhere on this Sheet or on the code embedded in it do I ask for your Wallet Mnemonic Phrase, Private Keys or Keystore files. This sheet it 100% using  the public information available on the THETA blockchain. For this I use Theta's Explorer API available here, and Thetascan.io API available here. In order to import this information through these APIs into this sheet I use: ImportJSON.gs available here and IMPORTJSONAPI.gs available here.

2.3 - Other scripts are also used, some written by me, others taken from help groups like Reddit's /r/sheets sub, and stackoverflow.com. These scripts are used for the refresh and record functions onto the LOG spreadsheet; some timmer tricks to help with minimizing the risk of reaching the Google's limit of JSON calls; there's a script for this welcome and configuration dialogue; for a HELP dialogue; for the ON / OFF Switch; and automatic group formation on the LOG spreadsheet. Non of this scripts ask for your personal information or any other information such as Mnemonic Phrase, Private Keys or Keystore files.
It just needs your public main Wallet address, public EEN Wallet address, an email address, and access to your Google Account.
I would advise you to revise the code yourself which is available through the Script editor:
TOOLS -> SCRIPT EDITOR.



 
 
 





2.4 - Never ever disclose and / or share your private information such as your real ID, and / or your information which gives access to your Crypto funds such as your Wallet Mnemonic Phrase, Private Keys or Keystore files to anyone. I would advise you to use a Hardware wallet such as those supported by the THETA Wallet: Ledger and Trezor.

2.5 - PLEASE DON'T insert your Wallet Mnemonic Phrase, Private Keys or Keystore files anywhere on this Sheet, that includes the cells on the sheet and the code available in the Script editor. This sheet like I already explained does not need that information. If you do so you will risk loosing your funds.

2.6 - I will NOT assume responsibility for any loss of funds caused by your misuse of the EEN Sheet and / or it's code embedded on the cells and on the Script editor. Please don't change any of the code in this Sheet's cells and / or on the Script editor. If you do so, you will be doing it at your own risk. The only changes / modifications necessary will be explained on the configuration steps below.

3 - CONCLUSION:
By continuing with the configuration process you agree to these terms I've explained above and you assume responsibility for your online and offline behavior while using the EEN Sheet.
If you don't agree please STOP now, close this window and delete this Sheet from your Google Drive ASAP! Again I will not assume any responsibility for any lost funds. Thank you!

//////////////////////////////////////////////////////////////////////////////

CONFIGURATION:
Now with that out of the way, if you are still here, I assume you are ready to continue with the configuration process. Don't worry it's very simple! Below you will find all the steps necessary in order to get this sheet working. At the end of each step you can close this dialogue box by pressing the OK button which you can find at the end of each step, and come back afterwards for the next steps by pressing the CONFIGURATION button which you can find on the Control Panel.









1. AUTHORIZATION:
First thing you need to do is authorise the EEN Sheet beta Google App Scripts this sheet uses, to access your Google Account. This is because this sheet uses some functions like for example sending email alerts, which will only work if you give the sheet permission to access your account. In order to do this simply press the REFRESH button at the top of the sheet. A pop up window will appear. Follow the steps for the autorization to complete. If you are unsure about the safety of this step, please revise the code first by going to Google Sheets menu and choosing:
TOOLS -> SCRIPT EDITOR.



 
 
 
 
 
 
 

If you are still unsure about the safety of this proceedure, please contact me and I will try to respond to any queries you might have. You can find my email address at the bottom of this dialogue box. Again another boring warning: If you are still reluctant then I would advise you to STOP, close the window and delete the EEN Sheet from your Google Drive ASAP! If you do proceed with the authorization please be aware you are doing so at your own risk and I will not take any responsibility for any lost funds and / or private information caused by using this Sheet. 













2. CONTROL PANEL
Still here? Cool. On the top right you can expand a column group by pressing that little plus sign inside a small dark box. Now you can see an area to the right, which we'll call the Control Panel. You will now be able to enter your main wallet address, your EEN wallet address, as well as your email address. This way you will be able to keep track of your TFUEL staking rewards as well as your EEN computing earnings. Copy paste your main wallet address into the U3 cell group, your EEN wallet address into the U5 cell, and your email address into the U6 cell.

















3. EMAIL ALERTS
You will be able to receive, if you so wish, alerts whenever you receive a staking TFUEL reward, or EEN TFUEL computing earnings. If you don't want to receive any email alerts please don't enter your email address and leave both check boxes unchecked. If you do want to receive one of the alerts, or both, be sure to enter your email address into the U6 cell, and leave both check boxes, or just one of them, checked. If you are a TFUEL Whale I advise you to opt out of the staking rewards ALERT function as you would get too many email alerts.














4. TIME TRIGGER
This sheet will need data from the THETA Blockchain in order to build the graphs and display the values. In order for this to happen you will need to configure a time trigger which executes a function built into the sheet every time the time trigger executes. This function will refresh and record certain THETA blockchain information on the LOG spreadsheet, such as your Wallet balance, rewards received, TFUEL supply, prices and so on.

Please go to:
https://script.google.com/home

You will be able to see a new project called EEN_sheet_beta.
To the right of this project, press the 3 dots and choose TRIGGERS. Now on the bottom right press ADD TRIGGER. You will be presented with a dialogue box where you can configure your Trigger:

    First you will need to choose the function EEN_Sheet_Trigger.
    Leave HEAD untouched.
    Source should be TIME-DRIVEN.
    Type of time based trigger should be MINUTES TIMER.
    Choose between 1, 5 and 10 minutes period. I advise you to choose 10 minutes. But 1 or 5 is fine too. Problem is with the 1 and 5 minutes periods you will run the risk of reaching the limit of JSON calls Google allows. Also Google Sheets only allows 5 million cells in 1 project. By using the 1 minute period you will reach this limit probably after 6 or so months and this sheet will not be able to record any new data rows on the LOG spreadsheet. By using 10 minutes period this cell limit will only be reached after 2 or 3 years.
    Press SAVE. 







5. TRIGGER TIME PERIOD
Next step will be to go back to the Control Panel mentioned in step 2. Once there, where is says TRIGGER, please indicate which time period you chose on step 4:
The 1 minute, 5 minutes or 10 minutes time period.
This is important as it will affect the calculations executed on the LOG spreadsheet regarding TFUEL supply, burn, inflation and so on.



6. WAIT FOR DATA
Your EEN Sheet is now configured. But you will see no data on the main spreadsheet yet. This is because the sheet needs at least 2 data points / rows on the LOG spreadsheet in order for it to start to work properly and display some data. Also I would advise you, before reaching any conclusion regarding the effectiveness of this sheet, to let the sheet's trigger to work for a few hours so the data presented on the main spreadsheet EEN_SHEET starts making sense, after it averages out a couple of a dozen rows of data.




7. CHARTS TIME PERIOD
Regarding the CHARTS time periods on the Control Panel. After about 24h to 48h of data recording on the LOG spreadsheet, this Data Validation menu on the Control Panel named CHARTS will start to work, not before. Basically it's used to zoom in or out the graphs, like you do on Trading View or Binance etc. with the price charts. Of course in order for the other time periods to work: 1 week, 1 month etc you will need to wait for 1 week and 1 month of data respectively.

HELP
In order to get a more in depth explanation on how to use this EEN sheet and how it works, what the values mean and also how to properly read and use the Tables below, please press the HELP button on the Control Panel.

CONCLUSION
And that's it! If you need any further help configuring your EEN Sheet, or help understanding what this sheet does and how it works, or if you have any criticism, or want to point out some error, or ideas for improvements etc, please reach out to me by email: nonadjournment_carshop[at]slmail.me

This sheet is my first coding project. At first I just wanted a basic sheet that I could use to track my staking rewards. As I kept building it I got excited about what I could do using simple cell scripts and formulas and then went a bit deeper into Google App Scripts. As the sheet was approaching its conclusion I realized some of the boys and girls over at the THETA Reddit community, which I belong to, could also make use of this tool so I decided to share it with you free of charge. It ain't much, but it's honest work! 

PLEASE SUPPORT ME
If you find this EEN sheet to be useful to you, please consider making a TFUEL donation. Receiving your support would help me to get the motivation and time necessary to continue learning how to code, to improve this sheet, and eventually coming up with other tools for the THETA Community in the future. Like for example a Guardian Node Sheet!

My THETA / TFUEL Wallet address is the following:
0xa953867aA815B9B09cFe0349c9FA8aea0F738220.

