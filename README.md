# stateful component in vanilla JavaScript.

## To create a stateful component in vanilla JavaScript, you can use the following steps:

1. Create a constructor function for your component that will initialize its state. The state object should hold all the data that will change during the lifetime of the component.

```js
function MyComponent() {
  this.state = {
    count: 0,
  };
}
```

2. Define methods for your component that will update the state. These methods should be responsible for changing the state of the component.

```js
MyComponent.prototype.increment = function () {
  this.setState({
    count: this.state.count + 1,
  });
};

MyComponent.prototype.setState = function (newState) {
  Object.assign(this.state, newState);
};
```

3. Render your component to the DOM. You can define a render method that will create the HTML representation of your component and update it whenever the state changes.

```js
MyComponent.prototype.render = function () {
  var html = "<div>" + this.state.count + "</div>";
  document.getElementById("app").innerHTML = html;
};
```

4. Initialize an instance of your component and call its render method to render it to the DOM.

```js
var myComponent = new MyComponent();
myComponent.render();
```

5. Update the state of your component by calling its methods and re-render it to the DOM.

```js
myComponent.increment();
myComponent.render();
```

6. To make the re-rendering of the component to the DOM automatic every time the component is updated, you can use a technique called "reconciliation".
   Reconciliation is the process of comparing the previous state of the component with its new state, and figuring out what has changed. Once the changes have been identified, the component's HTML representation is updated in the DOM to reflect the new state.
   To implement reconciliation in vanilla JavaScript, you can modify the setState method to automatically trigger the render method whenever the state is updated:

```js
MyComponent.prototype.setState = function (newState) {
  Object.assign(this.state, newState);
  this.render();
};
```

## Using ES6 syntax:

```js
class MyComponent {
  constructor() {
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    const html = `<div>${this.state.count}</div>`;
    document.getElementById("app").innerHTML = html;
  }
}

const myComponent = new MyComponent();
myComponent.increment();
```
