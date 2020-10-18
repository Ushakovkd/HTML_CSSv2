# Task 2 - Add JavaScript

In this task using JS you need to add some simple interactivity to the landing page:
- Clicking on "Try It Free" and "Get Started For Free" buttons should smoothly scroll the page to sign up form
- Sign up form should have simple validation ("email" - HTML5 type email and required) ("password" = HTML5 type text and required) with warning messages
- If the validation is passed, clicking "Get Started" button should send a POST request to the server, and then print the response either to the console or alert()

*Demo is in the './design' folder*

## Folders and files

- *./design* Contains demo of completed task
- *./public* This is your working folder
  -  *images*
  -  *index.html* This is our landing page layout. **You can either use this provided layout or your layout from (Task 1)**
  -  *index.js* JavaScript entry point
  -  *landing.js* **Here you need to write js code**
  -  *style.css* **You can either use this provided style or your style from (Task 1)**
- *./server* Simple server with one API endpoint

## Server
In this task you need to send a request to the server when submitting the form. Here is API spec:
### Request:
- url: http://localhost:3000/login
- method: POST
- headers: 'Accept': 'application/json', 'Content-Type': 'application/json'
- body: {email: string, password: string}
### Response:
- {userId: string} *UserId is hash from email+password*

## Development
To run API and static server:
- you need nodeJS (https://nodejs.org/en/ LTS) installed on your machine
- in root folder run "**npm install**"
- in root folder run "**npm run start**"

This will run the servers. Your app will be accessible on **localhost:8080**

