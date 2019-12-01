// APPETIZER SECTION IN TOTAL
// Start - Customize APPETIZER HEADER
  function customizeAppetizerHeader (elementID, staticDisplay, username){
    console.log("Inside App Header");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerHeader/"; // LINE TO EDIT FOR IDS
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeAppetizerHeader/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerHeader"); // LINE TO EDIT FOR IDS
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
  // End - Customize APPETIZER HEADER
  // Start - Customize APPETIZER ONE NAME
  function customizeAppetizerOneName (elementID, staticDisplay, username){
    console.log("Inside App One Name");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerOneName/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerOneName");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER ONE NAME
  // Start - Customize APPETIZER ONE DESCRIPTION
  function customizeAppetizerOneDescription (elementID, staticDisplay, username){
    console.log("Inside App One Descr");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerOneDescription/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerOneDescription");
      i.setAttribute('placeholder', staticDisplay);
      // i.setAttribute('size',"50");
      i.setAttribute('rows',"10");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER ONE DESCRIPTION
  // Start - Customize APPETIZER ONE PRICE
  function customizeAppetizerOnePrice (elementID, staticDisplay, username){
    console.log("Inside App One Price");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerOnePrice/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerOnePrice");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER ONE PRICE

  // Start - Customize APPETIZER TWO NAME
  function customizeAppetizerTwoName (elementID, staticDisplay, username){
    console.log("Inside App Two Name");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerTwoName/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerTwoName");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
// End - Customize APPETEIZER TWO NAME
// Start - Customize APPETIZER TWO DESCRIPTION 
function customizeAppetizerTwoDescription (elementID, staticDisplay, username){
    console.log("Inside App Two Descr");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerTwoDescription/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerTwoDescription");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER TWO DESCRIPTION
  // Start - Customize APPETEIZER TWO PRICE 
  function customizeAppetizerTwoPrice (elementID, staticDisplay, username){
    console.log("Inside App Two Price");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerTwoPrice/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerTwoPrice");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
// End - Customize APPETEIZER TWO PRICE 

// Start - Customize APPETIZER THREE NAME
function customizeAppetizerThreeName (elementID, staticDisplay, username){
    console.log("Inside App Three Name");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerThreeName/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerThreeName");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER THREE NAME
  // Start - Customize APPETIZER THREE DESCRIPTION
  function customizeAppetizerThreeDescription (elementID, staticDisplay, username){
    console.log("Inside App Three Descr");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerThreeDescription/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerThreeDescription");
      i.setAttribute('placeholder', staticDisplay);
      // i.setAttribute('size',"50");
      i.setAttribute('rows',"10");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER THREE DESCRIPTION
  // Start - Customize APPETIZER THREE PRICE
  function customizeAppetizerThreePrice (elementID, staticDisplay, username){
    console.log("Inside App Three Price");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerThreePrice/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerThreePrice");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER THREE PRICE

  // Start - Customize APPETIZER FOUR NAME
function customizeAppetizerFourName (elementID, staticDisplay, username){
    console.log("Inside App Four Name");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerFourName/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerFourName");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER FOUR NAME
  // Start - Customize APPETIZER FOUR DESCRIPTION
  function customizeAppetizerFourDescription (elementID, staticDisplay, username){
    console.log("Inside App Four Descr");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerFourDescription/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerFourDescription");
      i.setAttribute('placeholder', staticDisplay);
      // i.setAttribute('size',"50");
      i.setAttribute('rows',"10");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER FOUR DESCRIPTION
  // Start - Customize APPETIZER FOUR PRICE
  function customizeAppetizerFourPrice (elementID, staticDisplay, username){
    console.log("Inside App Four Price");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeAppetizerFourPrice/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"userAppetizerFourPrice");
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); 
      i.setAttribute("style", "background-color: black;");
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
  // End - Customize APPETIZER FOUR PRICE

// NEED TO ADD SOUPS, SALADS, MAINS, DESSERTS

  // End - Customize RESTAURANT ABOUT TEXT
  // Steps to add new forms, store and retrieve them:
  // 1. Update model
  // 2. Update seed
  // 3. Make change to JS
  // 4. Make changes to the route and database post/patch
  // 5. 
  // 9. Run seed

  
