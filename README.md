# FT

An application that allows a user to view the latest headlines and search for headlines they are interested in.

[Getting started](#getting-started)  | [My process](#my-process) | [Problems and solutions](#problems-and-solutions) | [What I would do next](#what-I-would-do-next)


## Getting started

* Fork this repo and clone to your local machine
* Navigate to the frontend directory ``` npm install ```, ```npm start```
* In a separate window navigate to the backend directory ``` npm install ``` ```npm start```

Open a browser and type ```localhost:3000```

#### Running tests:

* Navigate to the frontend directory ``` npm test ```
* Navigate to the backend directory ``` npm test ```

## Problems and solutions

This task was a fantastic learning experience. Below I will highlight the major stumbling blocks I came across and how I overcame them/swerved them.

#### Problem 1:
It is not obvious that it is possible to set up a developer account with the FT if you are also an FT subscriber

- After pursuing several other avenues I set up a separate email address and set up a separate account

#### Problem 2:
Making an API call from the browser results in a CORS error

- I learnt about Cross Origin Resource Sharing and why this meant I had to create a back end that was served separately from my front end in order to make a successful API call to the FT API.
- In doing this, I set up a full stack app that has an API call between the front end and the back end. I had to enable CORS for this API call to work.

#### Problem 3:
Setting up express

- I generally don't like to use ```generate```, especially for frameworks that I am not that familiar with as you end up with a lot of redundant code and it his hard to decipher what does what. I had used express before, but not that much.
- However, I found the express docs somewhat unintuitive so the set up process was very time consuming. I do feel I have a better understanding of the inner workings of express as a result.  

#### Problem 4:
Having separate files for Model, View and Controller.

It turns out that ```require``` cannot be run by a browser. This made my neatly encapsulated node modules a challenge to use. However, since I had TDD'd them using Jest, I needed the module.exports to run the tests.

I tried to use ```browserify``` but this threw errors for my application.js as it said thad document was undefined in my event listener:  ```document.addEventListener('DOMContentLoaded'```

I managed to get around module.exports through a nifty if function and added all of my docs as separate scripts to my index.html.

#### Problem 5:
Injection for testing

I struggled with the JEST mocking functionality. This lead me to build an entire suite of mocks in order to correctly stub behaviour. It also meant that I had to adjust my code design. I had to remove constructor functions and replace them with ```setState``` functions as jest would not let me pass in uninstantiated modules as arguments.

I was unable to decipher how to test the API calls and document events in Jest. Though if I had time I would add some feature testing software which would help with this.

## What I would do next
- Pagination: I would create a new object that could deal with 20 articles that would sit between ArticleList and Article classes
- Add feature tests
- Deploy on Heroku, this is something I have yet attempted
