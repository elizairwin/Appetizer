// HOURS SECTION IN TOTAL
// Start - Customize HOURS WEEKDAY 
function customizeHoursWeekday (elementID, staticDisplay, username){
    console.log("Inside Hours Weekday");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeHoursWeekday/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userHoursWeekday"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
  // End - Customize HOURS WEEKDAY 
  // Start - Customize HOURS WEEKEND 
  function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Hours Weekend");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeHoursWeekend/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userHoursWeekend"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
    // End - Customize HOURS WEEKEND

// CONTACT SECTION IN TOTAL
// Start - Customize RESTAURANT ADDRESS 
function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Restaurant Address");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantAddress/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userRestaurantAddress"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
// End - Customize RESTAURANT ADDRESS
// Start - Customize NUMBER 
function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Number");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeNumber/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userNumber"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
  // End - Customize NUMBER 
  // Start - Customize EMAIL
  function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Email");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeEmail/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userEmail"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
  // End - Customize EMAIL 

// SOCIALS SECTION IN TOTAL
 // Start - Customize RESTAURANT FACEBOOK
  function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Restaurant Facebook");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantFacebook/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userRestaurantFacebook"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
  // End - Customize RESTAURANT FACEBOOK
  // Start - Customize RESTAURANT INSTAGRAM
  function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Restaurant Instagram");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantInstagram/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userRestaurantInstagram"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
   // End - Customize RESTAURANT INSTAGRAM
   // Start - Customize RESTAURANT YELP
   function customizeHoursWeekend (elementID, staticDisplay, username){
    console.log("Inside Restaurant Yelp");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantYelp/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userRestaurantYelp"); // LINE TO EDIT FOR IDS
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); // LINE TO EDIT FOR IDS IF NEEDED
      i.setAttribute("style", "background-color: black;"); // LINE TO EDIT FOR IDS IF NEEDED
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save"); 
      s.setAttribute("style", "background-color: black;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }
  // End - Customize RESTAURANT YELP