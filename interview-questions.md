# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: In a function the parameter is apart of it when declaring it. These are the first set parenthesis. The argument is what I would then use to pass into the function when calling upon it.

Researched answer:
The parameter is the variable defined by the method, in order for it receive a value we use an argument when invoking it.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() is a way of iterating over an Array and it has 3 parameters. These are .map(value, index, array) . You must pass atleast one parameter into and that is value. So you could not do .map(array) and would have to do .map(value,array) .

Researched answer:

The predefined parameters in .map() are value, index, and array. Value is the only required parameter. Index is used to use the location( zero index) of an element in array. Array will just hold the array we are using .map() on. 

3. What is the difference between map and filter?

Your answer: Both of these are used to iterate over an array and return a new array. They also share the same built in parameters (value , index, array). The order you input these arguments must be the same but you need to pass an argument for it to work. The difference would be the length of the new array and values in them. For .map() it returns a new array of the same length as the original. When using .filter() it has a built in conditional. So it will return an Array of values that were true to the condition.

Researched answer:
The purpose of both is to return a new Array. They iterate over an Array. .map() will create a new Array of the same length. This new Array will contain new elements than the original .filter() will return a new Array but with only certain elements from the original. The elements left are those that met the conditions. 


4. What is the DOM?

Your answer: DOM stands Document Object Model, I currently do not have the best understanding of it. But I know it is the visual aspect of coding. So far when I have worked with React, I know this would represent connecting my components and giving me a live visual of it.

Researched answer:
DOM stands Document Object Model. It is visual and interactions we are able to make with a webpage. In order for us to use HTML and JS we need the DOM. It is an API for HTML and XML. It is not a language but works together with different languages. When going to a website we are given the visual representation. This is usually the HTML or CSS. Now when we click on something and it redirects us, or gives us some sort of feedback. That is our interaction with it. And this is handled by the JS. The DOM combines these different languages and allows them to work together. When we make changes in our coding files, the DOM will also reflect that change. 

5. What is React? Why would you use it?

Your answer: React is a JS library that was created by Meta. This is what see as the user interface when looking at a webpage. We are able to make webpages, application using React. When using React we use components to build up our application. For example a header could be its own component. I know that when a change our components, this will be reflected in the visual aspect. When we create components we are then able to reuse them throughout other components also.

Researched answer: React is a UI library that was created by Meta. It currently one of the most popular libraries used in programming. React has components that are reusable throughout the rest of the React application. It uses a combination of JS and HTML, this is called JSX. It also uses a Virtual DOM also, so when make a change to these components it will only update the actual DOM by updating those components where needed. So if I were to make a change to my h1 component that would be the only thing updated on the DOM. But React is more about interactions, so a better example would be using social media. When you click the like button the only change that is reflected is maybe that button lights up. Or the likes are updated also. React allows for us to create efficient applications with reusable components. It cuts down on the amount of time we need to spend creating UI.


6. STRETCH: What is hoisting in JavaScript?

Your answer: I do not know what hoisting is in JS. I know when we hoist something it is usually lifting an object in some way. So I think this would mean attaching different code blocks to one another.

Researched answer:
So hoisting is JS means that our variables are declared at the top of the scope. This means that variable declarations are executed first before anything else. This means i can create a variable and assign a value BEFORE declaring it. Although this will return and defined when using var. If you try to use let,const it will still read it at the top of the scope but you will get an error. Because they must properly initialized before being called on.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:
It is like a description for creating a feature. This allows for a team of devs to breakdown their work into pieces. The stories that are made are based on what a user/customer wants. 
2. Spread operator:
With the spread operator we are able to add elements from array to a new, or pass an array as argument inside of a function. In order to use it we must use ...<varname> . Essentially I am able to insert, copy, and add arrays to each other or a function.
3. React props:
It is an argument that we pass into a React component. Its like argument inside of a function in JS. Props are used to initialize a component to. They cannot be changed within a component, it must be changed OUTSIDE. It is different from State where we can change it INSIDE of an component.

4. Conditional rendering:
It is used the same that we use conditionals in Javascript. It will create an element based on the conditions met.

5. DOM events:
This involves the user interaction with a website. An event is used with a function, so until the event happens that function will not execute. There many events but the most common we know are mouse, touch, keyboard, form, and window events. For example a mouse event could be me clicking on a button. 