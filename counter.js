//Using a constructor function
/* function Counter() {
    this.state = {
        count: 0
    };
};

Counter.prototype.increment = function () {
    this.setState({
        count: this.state.count + 1
    });
};

Counter.prototype.setState = function (newState) {
    Object.assign(this.state, newState);
    this.render();
};


Counter.prototype.render = function () {
    var displayCounter = '<div>' + this.state.count + '</div>';
    document.getElementById('display').innerHTML = displayCounter;
};

var counter = new Counter();
counter.increment();
document.querySelector(".btn").addEventListener("click", () => counter.increment()); */


//Using Class - ES6 syntax 
class Counter {
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
      const displayCounter = `<div>${this.state.count}</div>`;
      document.getElementById("display").innerHTML = displayCounter;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  document.querySelector(".btn").addEventListener("click", () => counter.increment());