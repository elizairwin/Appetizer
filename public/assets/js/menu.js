// Start - Customize RESTAURANT NAME
  function customizeName (elementID, staticDisplay, username){
    console.log("Inside Name");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantName/"; //ELIZA CHANGING
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"restaurantname"); //ELIZA CHANGING
      i.setAttribute('placeholder', staticDisplay);
      i.setAttribute('size',"50"); //ELIZA CHANGING IF NEEDED
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
  // End - Customize RESTAURANT NAME
  // Start - Customize RESTAURANT TAG LINE
  function customizeTagLine (elementID, staticDisplay, username){
    console.log("Inside Tag");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantTagline/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"restauranttagline");
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
  // End - Customize RESTAURANT TAG LINE
  // Start - Customize RESTAURANT ABOUT TEXT
  function customizeRestaurantAboutText(elementID, staticDisplay, username){
    console.log("Inside About");
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantAboutText/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      // var i = document.createElement("input"); //input element, text
      var i = document.createElement("textarea"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"restaurantabouttext");
      i.setAttribute('placeholder', staticDisplay);
      // i.setAttribute('size',"50");
      i.setAttribute('rows',"10");
      i.setAttribute('cols',"50");
      i.setAttribute("style", "background-color: black;");
      // i.setAttribute("style", "height:50px;");
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Save");
      s.setAttribute("style", "background-color: white;");
      f.appendChild(i);
      f.appendChild(s);
      document.getElementById(elementID).innerHTML = "";
      document.getElementById(elementID).appendChild(f);
    }
  }


  


  // End - Customize RESTAURANT ABOUT TEXT
  // Steps to add new forms, store and retrieve them:
  // 1. Update model
  // 2. Update seed
  // 3. Make change to JS
  // 4. Make changes to the route and database post/patch
  // 5. 
  // 9. Run seed
