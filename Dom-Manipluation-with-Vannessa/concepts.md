## DOM Manipulation

#### Create an element
```js
document.createElement('p')
```

#### Delete an element
```js
element.remove()
```

#### Update and element
```js
// <p id="para1">Hello World</p> - the element we wan to select;
 
document.querySelector('#para1').innerText = "WhatsApp World"; // the code to select the element on line above

querySelector() // chooses and element by id or classname selector or even the tagname of f the element you are querying
```

#### Add element to the DOM
```js
parentElement.appendChild()
```

------------------------------

## Handling Events
This is when you use javaScript to do something when an event is triggered

> So JS will listen to event and do something

Here are of common browser events;
- click event
- key press event
- mouse over event
- scroll event

example;
```js
p.addEventListener(event, callbackfunction)
```


## Work with data structures (Arrays and Objects)

```js
const evens = [2, 4, 6]

const van = {
    age: 30, 
    color: "red", 
    name: "Vannesa", 
    greet: function(){console.log('hell0!!')}
}

van.age
van.color

```

## Using Local storage
- Browser (Google Chrome) is where we can access local storage
- Name the data you want to store
- Persisting data

## Using JSON
> JavaScript Object Notation: is a (data format)

**JSON is an open standard** file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a common data format with diverse uses in electronic data interchange, including that of web applications with servers

Changing the Format of data with JSON
- JSON.stringify() - converts data to JSON
- JSON.parse() - converts data from JSON to to it's original format




