  // Start - This block of code retreives the most recent updates to their site.
  var username = "user001";  // TBD: This should read from the login information
  var editMode;
    
  var customRestaurantInfo = []; // Has to be an array
  getCustomRestaurantData(username);
  function getCustomRestaurantData(username) {
    $.get("/customrestaurantdata/" + username, function(data) {
      if(data.length > 0){ // If there is data for that user
        customRestaurantInfo = data;
        console.log(data);
        
        console.log("inside get");
        // Set all the fields one by one.
        document.getElementById("userRestaurantName1").innerHTML = customRestaurantInfo[0].userRestaurantName;
        document.getElementById("userRestaurantName2").innerHTML = customRestaurantInfo[0].userRestaurantName;
        document.getElementById("userRestaurantName3").innerHTML = customRestaurantInfo[0].userRestaurantName;
        document.getElementById("userRestaurantName4").innerHTML = customRestaurantInfo[0].userRestaurantName;
        
        document.getElementById("userTagline1").innerHTML = customRestaurantInfo[0].userRestaurantTagline;
        // console.log(customRestaurantInfo[0].restauranttagline);
        document.getElementById("userTagline2").innerHTML = customRestaurantInfo[0].userRestaurantTagline;
        document.getElementById("userTagline3").innerHTML = customRestaurantInfo[0].userRestaurantTagline;
        
        document.getElementById("userAboutText1").innerHTML = customRestaurantInfo[0].userRestaurantAbouttext;
        document.getElementById("userAboutText2").innerHTML = customRestaurantInfo[0].userRestaurantAbouttext;
        document.getElementById("userAboutText3").innerHTML = customRestaurantInfo[0].userRestaurantAbouttext;
        
        document.getElementById("userAppetizerHeader").innerHTML = customRestaurantInfo[0].userAppetizerHeader;
        console.log(customRestaurantInfo[0].userAppetizerHeader);

        console.log("just before page status");
        console.log(pageStatus[1]);
        if (pageStatus[1] === "editmode"){
         console.log("edit more from local storage");
         editMode = true;
         customizationCalls(editMode);
        }
        
      }else{
        console.log("before seed call");
        $.post("/seedinsert",() => {
          console.log("seed insert done");
        })
    }
  });
}
  // End - This block of code retreives the most recent updates to their site.
    
  
  //  var editMode;
  //  console.log("just before page status");
  //  console.log(pageStatus[1]);
  //  if (pageStatus[1] === "editmode"){
  //   console.log("edit more from local storage");
  //   editMode = true;
  //   customizationCalls(editMode);
  //  }

   // Start of Edit Function
   function editFunction(id){
     editMode = true;
     pageStatus[1] = "editmode"
     localStorage.setItem("pstatus", JSON.stringify(pageStatus));
     customizationCalls(editMode);
   }
   // End of Edit Function 

   // Start of Submit Function
   function submitFunction(id){
    editMode = false;
    pageStatus[1] = "noneditmode"
    localStorage.setItem("pstatus", JSON.stringify(pageStatus));
  }
  // End of Submit Function 

  // Start - Make the customization calls if the edit mode is on
  function customizationCalls(editMode){
    console.log(editMode);
    if (editMode){
      console.log("Entered Edit Mode");
      // Get ready to set up the listener for possible editing and make the call. This has to be done for each element.
      var elementID = "userRestaurantName1";
      var staticDisplay = customRestaurantInfo[0].restaurantname; // Should always be one restaurant now. Hence the 0 for the index.
      customizeName (elementID, staticDisplay, username); // Make the call
      var elementID = "userRestaurantName2";
      var staticDisplay = customRestaurantInfo[0].restaurantname; // Should always be one restaurant now. Hence the 0 for the index.
      customizeName (elementID, staticDisplay, username); // Make the call
      var elementID = "userRestaurantName3";
      var staticDisplay = customRestaurantInfo[0].restaurantname; // Should always be one restaurant now. Hence the 0 for the index.
      customizeName (elementID, staticDisplay, username); // Make the call
      var elementID = "userRestaurantName4";
      var staticDisplay = customRestaurantInfo[0].restaurantname; // Should always be one restaurant now. Hence the 0 for the index.
      customizeName (elementID, staticDisplay, username); // Make the call
      var elementID = "userTagline1";
      var staticDisplay = customRestaurantInfo[0].restauranttagline; // Should always be one restaurant now. Hence the 0 for the index.
      customizeTagLine (elementID, staticDisplay, username); // Make the call
      var elementID = "userTagline2";
      var staticDisplay = customRestaurantInfo[0].restauranttagline; // Should always be one restaurant now. Hence the 0 for the index.
      customizeTagLine (elementID, staticDisplay, username); // Make the call
      var elementID = "userTagline3";
      var staticDisplay = customRestaurantInfo[0].restauranttagline; // Should always be one restaurant now. Hence the 0 for the index.
      customizeTagLine (elementID, staticDisplay, username); // Make the call
      var elementID = "userAboutText1";
      var staticDisplay = customRestaurantInfo[0].restaurantabouttext; // Should always be one restaurant now. Hence the 0 for the index.
      customizeRestaurantAboutText(elementID, staticDisplay, username); // Make the call
      var elementID = "userAboutText2";
      var staticDisplay = customRestaurantInfo[0].restaurantabouttext; // Should always be one restaurant now. Hence the 0 for the index.
      customizeRestaurantAboutText(elementID, staticDisplay, username); // Make the call
      var elementID = "userAboutText3";
      var staticDisplay = customRestaurantInfo[0].restaurantabouttext; // Should always be one restaurant now. Hence the 0 for the index.
      customizeRestaurantAboutText(elementID, staticDisplay, username); // Make the call

      var elementID = "userAppetizerHeader";
      var staticDisplay = customRestaurantInfo[0].userAppetizerHeader; // Should always be one restaurant now. Hence the 0 for the index.
      customizeAppetizerHeader(elementID, staticDisplay, username); // Make the call
    }
  }
  // End - Make the customization calls if the edit mode is on

  // Start - Customize RESTAURANT NAME
  function customizeName (elementID, staticDisplay, username){
    console.log("Inside Name");
    
    // Add the event listener for that element
    document.getElementById(elementID).addEventListener("click",dynamicform);
    function dynamicform(){ // The function code block
      document.getElementById(elementID).removeEventListener("click",dynamicform);
      var routename = "/customizeRestaurantName/";
      var f = document.createElement("form");
      f.setAttribute('method',"post");
      // f.setAttribute('action',"/customizeRestaurant/" + username); // Pass the user name for the call
      f.setAttribute('action', routename + username); // Pass the user name for the call
      var i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"restaurantname");
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
