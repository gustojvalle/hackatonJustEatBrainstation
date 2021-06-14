# GWG Takeaway

## Description

GWG Takeaway or "Gesture of Good Will takeaway" is a social platform that allows you to donate food for someone who needs through one of the participating restaurants.

The idea is that you can pay for someones meal similar to when people pay the bill for a stranger in a restaurant. 

- It's a simple application with a front-end and a backend, in the front-end we have a login page a home page a donations page and an about page. Where you can navigate through and make donations. 

- The backend has two routes one to retrieve the restaurant list for each area (the list is retrieved from just eat API using the postcode of the area) the other route to deal with the donations, it receives the donation information and adds it to a pot where it will be used to pay for the meals. 

- Payment system was not implemented as the idea is to integrate with Just Eat payment system and also with the ordering system so the backend could search for open meals and cover the costs from the pot, it's all mock data at this point. 

- The login to be simplified is done through firebase, it is possible to log-in with a google account. But again the idea is to integrate with just-eat system so one can do it from their account without having to deal with payment information more than once. 

- The payment information is sent to the backend as there is no need to process information within the page itself

- There are 2 options of donations a gesture of good will that will allow you to pay the "bill" for a stranger and the donation pot where you can send money to cover the costs for meals to those in need in one of your local participant restaurants should you choose to.

### Frontend

- the front-end is written in `React.js` and state management is done through hooks. 

- Routing is done through `React-router-dom`

- The login is managed by google firebase

### Backend
- The backend runs on `Express.js`

- All the mock data is managed through json files

- fs is used to read and write files

- cors is used so the backend can be accessible by the frontend


## How to use

1. First clone the project to your chosen directory

2. Second step is to run the command `npm i` on both client and server folders 

3. run the command `npm start` on both client and server folders simultaneously

4. the page should open on the browser automatically.

5. On the browser developer options select mobile view as it is intended to be a mobile application.  

6. There is a `script.js` on the server folder that was written for the purpose of generating random orders
