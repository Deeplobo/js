// Setup
function phoneticLookup(val) { 
    let result = " ";
  
    // Only change code below this line
    let lockup = {
       'alpha':"Adams",
       'bravo':"Boston",
       'charlie':"Chicago",
       'delta':"Denver",
       'echo':"Easy",
       'foxtrot':"Frank",
    }
     result = lockup[val];
    // Only change code above this line
    console.log(result);
    return;
  }
  
  phoneticLookup("charlie");