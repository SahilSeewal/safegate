# Safegate
![safegate-gif](https://i.imgur.com/lxdN9YG.gif)

A Node.js application using Passport.js to handle multiple local user authentication strategies

## Prerequisites
1. Node.js
2. MongoDB

## Usage:
1. Install `mongo` and `mongod` CLI tools: https://www.mongodb.com/
2. Clone this repo and then `cd` into the project folder 
3. Run the Mongo daemon: `mongod` in a seperate terminal window
4. While in the working directory of this application, run `nodemon server.js`

## The Goal: 
When the application is complete, the user will be able to:
1. Log into the application as either a resident or a guest
2. Residents can add guests to their guest access list
3. Guests can access communities if they are on the guest access list of a resident
4. Admin super users will be able to set limits on number of guests and amount of time a guest is allowed in the gated community

## To Do:
* Add functionality to allow residents to 'add' guests to communities
* Add Admin 'super user' 

#### Issues/Security Concerns:
N/A
