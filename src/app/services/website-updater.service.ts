import { Injectable } from '@angular/core';

@Injectable()
export class WebsiteUpdaterService {

  // public init() {
  //   //------------------------------------------------------------------------------
  //   //REQUIRED ELEMENTS
  //   //Remember installing the xmlhttprequest module: "npm install xmlhttprequest"
  //   let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  //   //Enables file manipulation - http://www.devdungeon.com/content/file-manipulation-nodejs
  //   let fs = require('fs');

  //   //Enables telegram-bot-api - https://www.npmjs.com/package/telegram-bot-api
  //   let telegram = require('telegram-bot-api');
  //   let util = require('util');
  //   let api = new telegram({token: <YOUR TELEGRAM TOKEN HERE>});

  //   //------------------------------------------------------------------------------
  //   let newSnapshot;
  //   let oldSnapshot;
  //   //Put in here the path to the file where you will record the snapshot of the page
  //   let filePath = <PATH GOES HERE>;
  //   let chatID = <GET THE CHAT ID AND PUT IN HERE>


  //   //------------------------------------------------------------------------------
  //   //INIT

  //   setInterval(() => {
  //     this.check("http://www.hbo.com/game-of-thrones/episodes/index.html", "Game Of Thrones");
  //   }, 3600*24*1000);
  // }


  // //------------------------------------------------------------------------------
  // //FUNCTIONS
  // public function check(websiteURL, show)
  // {
  //   navigateTo(websiteURL);
  //   cutString()
  //   readOldSnapshot(filePath);

  //   if(newSnapshot.length != oldSnapshot.length){
  //       console.log("Snapshots are different.")
  //         //Send Telegram Message
  //         api.sendMessage({
  //           chat_id: chatID,
  //           text: 'It seems that the page of ' + show + ' has been updated!'
  //         })
  //         .then(function(data)
  //         {
  //            console.log(util.inspect(data, false, null));
  //         })
  //         .catch(function(err)
  //         {
  //           console.log(err);
  //         });
  //       writeNewSnapshotToOldFile(filePath)
  //     } else {
  //       console.log("Snapshots are equal. Message not sent.")
  //     }
  // }


  // //----------------------------------
  // public function navigateTo(URL){
  //   let page = new XMLHttpRequest();
  //   page.open( "GET", URL, false );
  //   page.send();
  //   newSnapshot = String(page.responseText);
  // }

  // //----------------------------------
  // public function cutString(){
  //   let str = newSnapshot;

  //   //Here, I only check what's inside the content-primary div
  //   str = str.split("content-primary").pop();
  //   str = str.substring(0, str.indexOf("upcomingSchedule upcomingSchedule--secondary"));
  //   newSnapshot = str.trim()

  //   //Clean whitespaces
  //   newSnapshot = newSnapshot.replace(/ /g, "");
  //   newSnapshot = newSnapshot.replace(/  /g, "");
  // }

  // //----------------------------------
  // public function readOldSnapshot(filePath){
  //   oldSnapshot = fs.readFileSync(filePath,'utf8')
  // }

  // //----------------------------------
  // public function writeNewSnapshotToOldFile(filePath){
  //   fs.writeFile(filePath, newSnapshot, function(err) {
  //     if (err) throw err;
  //   })
  // }
}
