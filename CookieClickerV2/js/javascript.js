(function() {
     let db, idb_request;
     let cookiesPerSecond = 0;
     let cookieClicked = 0, cookieGet = 1, cookieValue = 0;
     let cursorValue = 15, cursorLevel = 0, cursorProductionCPS = 0, cursorCPS = 0.01;
     let grandmaValue = 100, grandmaLevel = 0, grandmaProductionCPS = 0, grandmaCPS = 0.1;
     let farmValue = 1100, farmLevel = 0, farmProductionCPS = 0, farmCPS = 0.8;
     let bakeryValue = 12000, bakeryLevel = 0, bakeryProductionCPS = 0, bakeryCPS = 4.7;
     let mineValue = 130000, mineLevel =0, mineProductionCPS = 0, mineCPS = 26;
    
    
     idb_request = window.indexedDB.open("bazadanychCiastka", 1); // Opening indexedDB
     
     idb_request.addEventListener("error", function(event) {        // Message when error comes.
         console.log("error" + this.result.errorCode);
     });
     
     idb_request.addEventListener("upgradeneeded", function(event) {    // For first setup
         let storage = this.result.createObjectStore("data", {autoIncrement: true});
         storage.add({
             cookiesPerSecond: 0, // sum of all cookies per second
             cookieValue: 0, //sum of all cookies
             //cookie
             cookieClicked: 0,
             //cursor
            cursorValue: 15,
             cursorLevel: 0,
             cursorProductionCPS: 0,
             cursorCPS: 0.01,
            //grandma
             grandmaValue: 100,
             grandmaLevel: 0,
             grandmaProductionCPS: 0,
             grandmaCPS:  0.1,
             //farm
             farmValue: 1100,
             farmLevel: 0,
             farmProductionCPS: 0,
             farmCPS: 0.8,
             //bakery
             bakeryValue: 12000,
             bakeryLevel: 0,
             bakeryProductionCPS: 0,
             bakeryCPS: 4.7,
             //mine
             mineValue: 130000,
             mineLevel: 0,
             mineProductionCPS: 0,
             mineCPS: 4.8}, "save-data");
         console.log("New data base !");
     })
     
     idb_request.addEventListener("success", function(event) {      
         db = this.result;
         let storage = db.transaction("data", "readwrite").objectStore("data");
         storage.get("save-data").addEventListener("success", function(event) {
             cookieClicked = this.result.cookieClicked;
             cursorValue = this.result.cursorValue;
             cursorLevel = this.result.cursorLevel;
             cursorProductionCPS = this.result.cursorProductionCPS;
             grandmaValue = this.result.grandmaValue;
             grandmaLevel = this.result.grandmaLevel;
             grandmaProductionCPS = this.result.grandmaProductionCPS;
             farmValue = this.result.farmValue;
             farmLevel = this.result.farmLevel;
             farmProductionCPS = this.result.farmProductionCPS;
             bakeryValue = this.result.bakeryValue;
             bakeryLevel = this.result.bakeryLevel;
             bakeryProductionCPS = this.result.bakeryProductionCPS;
             mineValue = this.result.mineValue;
             mineLevel = this.result.mineLevel;
             mineProductionCPS = this.result.mineProductionCPS;
             cookiesPerSecond = this.result.cookiesPerSecond;
             cookieValue = this.result.cookieValue;
         storage.put(this.result, "save-data");
        });
         
         console.log("Successfully opened database!");
         
         setInterval(updateDisplay, 100);
         //display cookies and CPS
         function updateDisplay() {       
              
             if (cookieValue < 1000) {
                 document.getElementById('counter').textContent = Math.floor(cookieValue) + ' Cookies' ;
             }
             else {
                 document.getElementById('counter').textContent = (cookieValue.toLocaleString('en',{maximumFractionDigits:0})) + ' Cookies' ;
             };
             
             document.getElementById('cookiesPerSecond').textContent = ("per second " + (cookiesPerSecond*10).toLocaleString('en',{maximumFractionDigits:1}));
                              
         }
       });
    
//Loading page effect and centerSide images adding(saved) after refreshing page or loading page. display saved value.
    let overlay = document.getElementById("overlay");
    window.addEventListener('load', function(){
        overlay.style.display = 'spinner';
        setTimeout(function () {
        overlay.style.display = 'none';
                  
            document.getElementById('CursorValue').textContent = "Cursor: " + cursorValue.toLocaleString('en', {maximumFractionDigits:0});
             
             document.getElementById('GrandmaValue').textContent = "Grandma: " + grandmaValue.toLocaleString('en', {maximumFractionDigits:0});
             
             document.getElementById('FarmValue').textContent = "Farm: " + farmValue.toLocaleString('en', {maximumFractionDigits:0});
             
             document.getElementById('BakeryValue').textContent = "Bakery: " + bakeryValue.toLocaleString('en', {maximumFractionDigits:0});
             
             document.getElementById('MineValue').textContent = "Mine: " + mineValue.toLocaleString('en', {maximumFractionDigits:0});
             
             document.getElementById("cursorPopUP").textContent = "Owned: " + cursorLevel;
             
             document.getElementById("cursorPopUP2").textContent ="Total production per second: " + cursorProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
             
             document.getElementById("grandmaPopUP").textContent = "Owned: " + grandmaLevel;
             
             document.getElementById("grandmaPopUP2").textContent ="Total production per second: " + grandmaProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
             
             document.getElementById("farmPopUP").textContent = "Owned: " + farmLevel;
             
             document.getElementById("farmPopUP2").textContent ="Total production per second: " + farmProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
             
             document.getElementById("bakeryPopUP").textContent = "Owned: " + bakeryLevel;
             
             document.getElementById("bakeryPopUP2").textContent ="Total production per second: " + bakeryProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
             
             document.getElementById("minePopUP").textContent = "Owned: " + mineLevel;
             
             document.getElementById("minePopUP2").textContent ="Total production per second: " + mineProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
            
        for (let i = 1; i <= cursorLevel; i++) {
              let img = document.createElement("img");
              img.src = "img/cursor2.png";
              let imgMID = document.getElementById("cursorMid");
              imgMID.appendChild(img);
             };
        
         for (let i= 1; i <=  grandmaLevel; i++) {
              let img = document.createElement("img");
              img.src = "img/grandma2.png";
              let imgMID = document.getElementById("grandmaMid");
              imgMID.appendChild(img);
             };
        
        for (let i= 1; i <=  farmLevel; i++) {
              let img = document.createElement("img");
              img.src = "img/Farm.png";
              let imgMID = document.getElementById("farmMid");
              imgMID.appendChild(img);
             };
        
        for (let i= 1; i <=  bakeryLevel; i++) {
              let img = document.createElement("img");
              img.src = "img/bakery.png";
              let imgMID = document.getElementById("bakeryMid");
              imgMID.appendChild(img);
             };
        
        for (let i= 1; i <=  mineLevel; i++) {
              let img = document.createElement("img");
              img.src = "img/mine2.png";
              let imgMID = document.getElementById("mineMid");
              imgMID.appendChild(img);
             };}, 300);
                
        });
    
       
     // COOKIE
     let cookie = document.getElementById("cookie");        // Function for clicking on cookie.
     cookie.addEventListener("click", function (event) {
         cookieValue = cookieValue + cookieGet;         // increasing cookie amount when clicking.
         cookieClicked +=1;                     // how many clicks on cookie
         console.log(cookieValue);
         let storage = db.transaction("data", "readwrite").objectStore("data");
         storage.get("save-data").addEventListener("success", function(e) {
             this.result.cookieValue = cookieValue;
             this.result.cookieClicked = cookieClicked;
         storage.put(this.result, "save-data");     // saving to db
                                   })
     })
     
     // Coursor
      let cursor = document.getElementById("Cursor");
     cursor.addEventListener("click", function () {
         if (cookieValue >= cursorValue){
             cookieValue -= cursorValue;
             cursorLevel += 1;
             cursorValue *= 1.15;
             cursorValue = Math.floor(cursorValue);
             cursorProductionCPS += (cursorCPS*10);
             cookiesPerSecond += cursorCPS;
             document.getElementById('CursorValue').textContent = "Cursor: " + cursorValue.toLocaleString('en', {maximumFractionDigits:0});
             document.getElementById("cursorPopUP").textContent = "Owned: " + cursorLevel;
             document.getElementById("cursorPopUP2").textContent ="Total production per second: " + cursorProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
         if (cursorLevel <=50 ){                    //adding images to the mid section.
              let img = document.createElement("img");
              img.src = "img/cursor2.png";
              let imgMID = document.getElementById("cursorMid");
              imgMID.appendChild(img);
                 };
                        
            };           
         let storage = db.transaction("data", "readwrite").objectStore("data");
         storage.get("save-data").addEventListener("success", function(e) {
                 this.result.cursorValue = cursorValue;
                 this.result.cursorLevel = cursorLevel;
                 this.result.cursorProductionCPS = cursorProductionCPS;
                 this.result.cookieValue = cookieValue;
                 this.result.cookiesPerSecond = cookiesPerSecond;
                 
          storage.put(this.result, "save-data");
             })
       
               
       
     })
    
     // Grandma
     
     let grandma = document.getElementById("Grandma");
     grandma.addEventListener("click", function() {
            if (cookieValue >= grandmaValue) {
                cookieValue -= grandmaValue;
                grandmaLevel += 1;
                grandmaValue *= 1.15;
                grandmaValue = Math.floor(grandmaValue);
                grandmaProductionCPS += (grandmaCPS*10);
                cookiesPerSecond += grandmaCPS;
                document.getElementById('GrandmaValue').textContent = "Grandma: " + grandmaValue.toLocaleString('en', {maximumFractionDigits:0});
                document.getElementById("grandmaPopUP").textContent = "Owned: " + grandmaLevel;
                document.getElementById("grandmaPopUP2").textContent ="Total production per second: " + grandmaProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
            if (grandmaLevel <=50 ){
              let img = document.createElement("img");
              img.src = "img/grandma2.png";
              let imgMID = document.getElementById("grandmaMid");
              imgMID.appendChild(img);
                 };
            let storage = db.transaction("data", "readwrite").objectStore("data");
            storage.get("save-data").addEventListener("success", function (e) {
                this.result.grandmaLevel = grandmaLevel;
                this.result.grandmaValue = grandmaValue;
                this.result.grandmaProductionCPS = grandmaProductionCPS;
                this.result.cookieValue = cookieValue;
                this.result.cookiesPerSecond = cookiesPerSecond;
            storage.put(this.result, "save-data");
            })
     }
                              })
    
     //Farm
     
     let farm = document.getElementById("Farm");
     farm.addEventListener("click", function () {
         if (cookieValue >= farmValue) {
             cookieValue -= farmValue;
             farmLevel += 1;
             farmValue *= 1.14;
             farmValue = Math.floor(farmValue);
             farmProductionCPS += (farmCPS*10);
             cookiesPerSecond += farmCPS;
             document.getElementById('FarmValue').textContent = "Farm: " + farmValue.toLocaleString('en', {maximumFractionDigits:0});
             document.getElementById("farmPopUP").textContent = "Owned: " + farmLevel;
             document.getElementById("farmPopUP2").textContent ="Total production per second: " + farmProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
             if (farmLevel <=50 ){
              let img = document.createElement("img");
              img.src = "img/farm.png";
              let imgMID = document.getElementById("farmMid");
              imgMID.appendChild(img);
                 };
         let storage = db.transaction("data", "readwrite").objectStore("data");
         storage.get("save-data").addEventListener("success", function(e) {
             this.result.farmLevel = farmLevel;
             this.result.farmValue = farmValue;
             this.result.farmProductionCPS = farmProductionCPS;
             this.result.cookieValue = cookieValue;
             this.result.cookiesPerSecond = cookiesPerSecond;
        storage.put(this.result, "save-data");
         })
             
         }
     })
     
     //Bakery
   
     let bake = document.getElementById("Bakery");
     bake.addEventListener("click", function() {
         if(cookieValue >= bakeryValue) {
             cookieValue -= bakeryValue;
             bakeryLevel += 1;
             bakeryValue *= 1.15;
             farmValue = Math.floor(farmValue);
             bakeryProductionCPS += (bakeryCPS*10);
             cookiesPerSecond += bakeryCPS;
             document.getElementById('BakeryValue').textContent = "Bakery: " + bakeryValue.toLocaleString('en', {maximumFractionDigits:0});
             document.getElementById("bakeryPopUP").textContent = "Owned: " + bakeryLevel;
             document.getElementById("bakeryPopUP2").textContent ="Total production per second: " + bakeryProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
        if (farmLevel <=50 ){
              let img = document.createElement("img");
              img.src = "img/bakery.png";
              let imgMID = document.getElementById("bakeryMid");
              imgMID.appendChild(img);
                 };
        let storage = db.transaction("data", "readwrite").objectStore("data");
        storage.get("save-data").addEventListener("success", function(e) {
            this.result.bakeryLevel = bakeryLevel;
            this.result.bakeryValue = bakeryValue;
            this.result.bakeryProductionCPS = bakeryProductionCPS;
            this.result.cookieValue = cookieValue;
            this.result.cookiesPerSecond = cookiesPerSecond;
        storage.put(this.result, "save-data");
        })
             
         }
     })
     
     //mine
    
     let mine = document.getElementById("Mine");
     mine.addEventListener("click", function () {
         if (cookieValue >= mineValue){
             cookieValue -= mineValue;
             mineLevel += 1;
             mineValue *= 1.15;
             mineValue = Math.floor(mineValue);
             mineProductionCPS += (mineCPS*10);
             cookiesPerSecond += mineCPS;
             document.getElementById('MineValue').textContent = "Mine: " + mineValue.toLocaleString('en', {maximumFractionDigits:0});
             document.getElementById("minePopUP").textContent = "Owned: " + mineLevel;
             document.getElementById("minePopUP2").textContent ="Total production per second: " + mineProductionCPS.toLocaleString('en', {maximumFractionDigits:1});
         if (farmLevel <=50 ){
              let img = document.createElement("img");
              img.src = "img/mine2.png";
              let imgMID = document.getElementById("mineMid");
              imgMID.appendChild(img);
                 };
         let storage = db.transaction("data", "readwrite").objectStore("data");
         storage.get("save-data").addEventListener("success", function(e) {
             this.result.mineLevel = mineLevel;
             this.result.mineValue = mineValue;
             this.result.mineProductionCPS = mineProductionCPS;
             this.result.cookieValue = cookieValue;
             this.result.cookiesPerSecond = cookiesPerSecond;
         storage.put(this.result, "save-data");
         })
            
         }
     })
    //To give us true value of cookieValue and save it.
        function valueCounter() {
         let storage = db.transaction("data", "readwrite").objectStore("data");
            storage.get("save-data").addEventListener("success", function(e) {
                cookieValue += cookiesPerSecond;
                this.result.cookieValue = cookieValue;
                storage.put(this.result, "save-data");
            })
        }
    setInterval(valueCounter, 100);
    

    
                   
     })();
