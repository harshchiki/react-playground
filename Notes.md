```
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root
    
*/

================================================================

// USING JS
import React from "react";
import { createRoot } from "react-dom/client";

// Select the root div
const rootElement = document.getElementById("root");

// Create a React root
const root = createRoot(rootElement);

// Create a React element
const elem = React.createElement("h1", { className: "header" }, "React is really fun!");

// Render the element inside the root
root.render(elem);


================================================================

// USING JSX
import React from "react";
import { createRoot } from "react-dom/client";

// Select the root div
const rootElement = document.getElementById("root");

// Create a React root
const root = createRoot(rootElement);

// Create a React element using JSX
const elem = <h1 className="header">React is really fun!</h1>;

// Render the element inside the root
root.render(elem);
```

> In React, you cannot use root.appendChild(elem) because root is an instance of ReactDOM.createRoot(), not a DOM node. React does not use direct DOM manipulation like appendChild; instead, it updates the virtual DOM and renders components declaratively.

```
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/
// IMPERATIVE
// Select the root div
const root = document.getElementById("root");

// Create a new h1 element
const header = document.createElement("h1");

// Set its text content
header.textContent = "Hello, World!";

// Add a class name
header.className = "header";

// Append the h1 element to the root div
root.appendChild(header);


/*
This is IMPERATIVE style of coding, not DECLARATIVE

To illustrate that imperative style of coding is also allowed in the React Code.

Declarative is telling what to and Imperative is telling how to do it
*/

// DECLARATIVE
createRoot(document.getElementById("root))
    .render(<h1 className="header">Hello, World!</h1>)
    
// (Note the class is specified as 'className' if writing in Declarative style)
```


```
/*
Below code won't run.

JSX expects single element at root level. It basically translates to createElement (of react) for each at the root level
and thus a createElement()createElement() is syntax error.
*/
import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    <img src="/src/assets/react-logo.png" />
    <h1>This is another element</h1>
)
```