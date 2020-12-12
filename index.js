function submitData(name, email){
    let configObj = {
        method: "POST", 
        headers: {
            "content-type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify({name, email})
    }

return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        console.log("ssssss", response.status)
        return response.json();
    })
    .then(function(object){

        document.body.innerHTML = object["id"]
        console.log(object);
    })
    .catch(function(error){
        document.body.innerHTML = error.message 

    })
}

// When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong. Append this message to the DOM when catch() is called.

// Challenge
// It's time to practice writing your own POST request using fetch(). In index.js, write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.

// The first two tests mirror the behavior of the JSON server. As you write your solution, keep the server running to test your code. Open index.html in a browser to gain access to your submitData function in console.

// Note: The tests in this lab need access to the fetch() request inside submitData. In order to give them access, write you solution so that submitData returns the fetch(). This will not change the behavior of your fetch().

// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.
// Test 2 - Handle the Response
// On a successful POST request, expect the server to respond with a [Response][response] object. Just like we saw earlier in the dog example, the body property of this response will contain the data from the POST request along with a newly assigned id.

// Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property. Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.

// Using index.html and the JSON server, if your code is successful, calling submitData in the console should cause an id number to appear on the page.

// Test 3 - Handle Errors
// For this final test, after the two then() calls on your fetch() request, add a catch().

// When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong. Append this message to the DOM when catch() is called.

// Test 4 - Return the Fetch Chain
// An amazing feature of fetch() is that if you return it, other functions can tack-on their own then() and catch() calls. While we won't explore this amazing idea in this lesson, let's learn good habits and be sure to return the fetch() chain from our submitData function.