# capitalizr

`capitalizr` is a simple JavaScript utility to capitalize the first letter of a string with options for different capitalization styles.

## Installation

To install `capitalizr`, use npm:

```bash
npm install capitalizr
```

## Usage

You can use `capitalizr` in both plain JavaScript and in React. Here are examples of each.

### Example in Plain JavaScript

You can use `require()` to import `capitalizr` in Node.js or JavaScript environments that support CommonJS.

```javascript
const capitalizr = require('capitalizr');

console.log(capitalizr("hello WORLD")); // Default: "Hello world"
console.log(capitalizr("heLLo from me", 1)); // Option 1: "Hello From Me"
console.log(capitalizr("hello from mE. i am a fish.", 2)); // Option 2: "Hello from me. I am a fish."
```

### Example in React

In a React project, you can use `capitalizr` with either `require()` or ES module `import` syntax.

#### Using `require()` in React

```jsx
const capitalizr = require('capitalizr');

function App() {
    const text = "react is cool. i love coding.";
    return (
        <div>
            <h1>{capitalizr(text, 2)}</h1>
        </div>
    );
}

export default App;
```

#### Using `import` in React

```jsx
import capitalizr from 'capitalizr';

function App() {
    const text = "hello world from react";
    return (
        <div>
            <h1>{capitalizr(text, 1)}</h1>
        </div>
    );
}

export default App;
```

## API

### `capitalizr(str, option = 0)`

**Parameters:**

- `str` (string): The input string to capitalize.
- `option` (number): The capitalization option (default is `0`).
  - **0**: Capitalizes only the first letter of the entire string.
  - **1**: Capitalizes the first letter of each word in the string.
  - **2**: Capitalizes the first letter of each sentence in the string, where sentences are separated by `. `

**Returns:**

- A new string with the specified capitalization applied.

## Examples

```javascript
// Default: Capitalizes only the first letter
capitalizr("hello world"); // "Hello world"

// Option 1: Capitalizes the first letter of each word
capitalizr("hello world from react", 1); // "Hello World From React"

// Option 2: Capitalizes the first letter of each sentence
capitalizr("hello world. i am a fish.", 2); // "Hello world. I am a fish."
```

## License

This project is licensed under the MIT License.