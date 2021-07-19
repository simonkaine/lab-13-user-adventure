## Making a plan
* Create data.js page with each quest 
* Create index HTML page with basic wireframe structure
* Create Heading message
* Create Form and insert the following hard coded components..
1. User name input with label and input 
1. pick a character to play with using fieldset, labels, radio buttons and inputs.

## On Submit build out the home page JavaScript and create user object
* Grab Dom element id of form submit
* Create event listener for the form submit and prevent default
* Using new class FormData I will save my form data to a variable by passing in the form id variable
* Console log to see if form data is being aknowledged
* Build makeUser function based on key values I know I need or have to export.
- This makeUser style function will grab/get values from form data and we'll be able to set the state to keep track of the game progression from here.
* create a new user object from the formData by using the makeUser function and passing in the form submit data.
- Import makeUser function from make-user.js file
* console log to make sure the for submit data has been updated with new user object state
* Write that user object to localstorage using the saveUser function imported from getNset.js file
* redirect user to Map html browser

## Loop through quest data to render href links for all quests available
* In HTML:
1. H1 with map message
1. Create script file linking to map.js
1. Link styles
1. Create Div to hold JS rendered quest output when looping
* console log quests 

