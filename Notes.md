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

> main Element: The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. A document mustn't have more than one <main> element that doesn't have the hidden attribute specified.


Before rendering JSX, React transforms JSX into JavaScript using a process called compilation. Here's what happens step by step:
* JSX is not valid JavaScript, so React uses a compiler (like Babel) to convert JSX into standard JavaScript.
* JSX gets converted into React.createElement() calls, which create React elements (virtual DOM nodes).
* React constructs a virtual DOM tree based on these elements.
* React reconciles the virtual DOM with the actual DOM by updating only the changed parts efficiently.
Example Transformation:
JSX Code:
```
const element = <h1>Hello, World!</h1>;
```

Transformed Code (without jsx)
```
const element = React.createElement('h1', null, 'Hello, World!');
```
This means JSX is just syntactic sugar for React.createElement(), which returns an object representation of the element.


# Custom Components
```
// from
root.render(
    <main>
        <img src="react-logo.png" width="40px" alt="React logo" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)

// to

function TComp() {
    return (
        <main>
            <img src="react-logo.png" width="40px" alt="React logo" />
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
root.render(<TComp />)
```

## Imp
```
function TComp() {
    return <main>
        <h1>hellow</h1>
        </main>
}

// is as good as
function TComp() {
    return ( // notice this "(" and thus the closing brace, if the opening tag is specified in the next line)
        <main>
            <h1>
                hello
            </h1>
        </main>
    )
}
```
Also it is important for functions related to custom components, have their name begin with a capital letter.