## Getting started
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

## Load list of quests or tasks and display/ Loop through quest data to render href links for all quests available
* In HTML:
1. H1 with map message
1. Create script file linking to map.js
1. Link styles
1. Create Div to hold JS rendered quest output when looping

* console log quests 
* In JavaScript:
1. Grab Div Id
1. Loop through Quests data
1. Make a variable to hold Quest Href and assign it with template literal directing into quest folder with that specific quest ID.
1. Create Quest folder and add HTML page
1. Create anchor element variable and assign each with href source and title of each quest when looping
1. Append link(s) to page

## Quest or task page reads the query parameter and loads that item on the page, including text, images, and/or audio/video - plus creates question prompts and inputs in form
* Create HTML page that has the follwing hard coded elements with id's to hold passing data from data files
1. Div for quest title
1. img for quest image
1. p tag for the description
1. Create form to hold choices list
1. span tag to have choices options
1. Nested Label and radio input to generate specific choices

* Create a variable to find Id value using the new urlSearchParams class by passing in the search bar.
* console log test
* Grab all DOM elements
* Create findById function to get quest data specific to window
- console.log to make sure Id was read
* Loop thru choices 
* createElement label and radio input with name, type and value equal to the id
* createElement span tag set to description
* append span and radio options to label
* append options to label which creates all the labels required

## User information tracked and results displayed accordingly
* Grab the Form id and add event listener and prevent default
* Compile form data using new FormData - console log each option on submit to verify ID was read
* Get the chosen choice from the choices array inside data
1. Get the choice id value, now we have the ID
1. FindById passing in array of choices and choice id value from above

* Update the user information 
1. Use getUser function
1. Assign players hp and gold from quest and track to player hp and gold
1. Set mission result to completed
1. Save the results in local storage

* Update the UI/UX
1. Assign result outcome to the description tags text content
1. When Button is clicked disable form from view and remove hidden link back to map

## Change quests links into non-clickable text 
* Since we clicked the button and the quest is now true when we return to map the link should diasble yet read completed.

1. Create for loop cycling through Quests with conditional functions
1. One function, if true, will overwrite and set new span element to say quest completed.
1. The else condition is a function that's purpose is to create the quest link for us.

## Update user object/ Track user

* Update User object by hard coding HTML to hold user info
1. Create function to take current HP, GOLD and Name, update it and write to Quest and Map page
1. Redirect player to results page if dead or all quests completed
1. Show results

