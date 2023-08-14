// // Class component
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // methods syntax
//   changeAge(age) {
//     this.age = age;
//   }
// }

// // Class component using "extends"
// class Student extends Person {
//   constructor(name, age, subject) {
//     super(name, age);
//     this.subject = subject;
//   }

//   changeSubject(subject) {
//     this.subject = subject;
//   }
// }

// const mary = new Student('Mary', 15, 'Algebra');
// mary.changeAge(17);
// mary.changeSubject('Physics');
// console.log(mary);


// Component Life Cycle
// // Clock component
// const DateDisplay = (props) => {
//   return <h2>The time is now {props.date.toLocaleTimeString()}.</h2>
// }

// DateDisplay.defaultProps = {
//   date: new Date()
// }

// // Custom class component
// class Clock extends React.Component {
//   static defaultProps = {
//     secondsShift: 0
//   }

//   constructor(props) {
//     super(props);
//     const date = new Date();
//     date.setSeconds(date.getSeconds() + props.secondsShift);

//     this.state = { date };
//   }

//   componentDidMount() {
//     // run code when component is first rendered into the DOM
//     this.timer = setInterval(
//       () => this.updateTime(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     // run code just before component is removed from the DOM
//     clearInterval(this.timer);
//   }

//   updateTime() {
//     const date = new Date();
//     date.setSeconds(date.getSeconds() + this.props.secondsShift);

//     this.setState({ date });
//   }

//   render() {

//     return (
//       <div>
//         <DateDisplay date={this.state.date} />
//       </div>
//     )
//   }
// }

// const App = () => {
//   return (
//     <React.Fragment>
//       <Clock />
//       <Clock secondsShift={10} />
//       <Clock secondsShift={20} />
//     </React.Fragment>
//   )
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);


// Event Handling
class Counter extends React.Component {
  constructor(props) {
    super(props);

    // count value starts at 0
    this.state = { count: 0 };
  }

  addCount(amount) {
    console.log(this);
    this.setState({
      count: this.state.count + amount
    });
  }

  render() {
    return (
      <div>
        <h2>Count {this.state.count}</h2>
        <button onClick={() => this.addCount(1)}>
          +1
        </button>
        <button onClick={() => this.addCount(2)}>
          +2
        </button>
        <button onClick={() => this.addCount(3)}>
          +3
        </button>
      </div>
    );
  }
}

// prevent event defaults
const Link = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('link clicked');
  }

  return (
    <a href="altcademy.com" onClick={handleClick}>
      Click me
    </a>
  )
}

// Adding global event handlers
class ScrollLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };

    // bind to the class object so updateScrollY can access this.setState
    this.updateScrollY = this.updateScrollY.bind(this);
  };

  updateScrollY(e) {
    this.setState({ scrollY: Math.round(window.scrollY) });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollY);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollY);
  }

  render() {
    return (
      <div className="scrollbar">
        Scrolled: {this.state.scrollY}px
      </div>
    )
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Counter />
      <Link />
      <ScrollLogger />
    </React.Fragment>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);