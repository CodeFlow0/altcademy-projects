var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    // count value starts at 0
    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = { count: 0 };
    return _this;
  }

  _createClass(Counter, [{
    key: 'addCount',
    value: function addCount(amount) {
      console.log(this);
      this.setState({
        count: this.state.count + amount
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Count ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.addCount(1);
            } },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.addCount(2);
            } },
          '+2'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.addCount(3);
            } },
          '+3'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

// prevent event defaults


var Link = function Link() {
  var handleClick = function handleClick(e) {
    e.preventDefault();
    console.log('link clicked');
  };

  return React.createElement(
    'a',
    { href: 'altcademy.com', onClick: handleClick },
    'Click me'
  );
};

// Adding global event handlers

var ScrollLogger = function (_React$Component2) {
  _inherits(ScrollLogger, _React$Component2);

  function ScrollLogger(props) {
    _classCallCheck(this, ScrollLogger);

    var _this3 = _possibleConstructorReturn(this, (ScrollLogger.__proto__ || Object.getPrototypeOf(ScrollLogger)).call(this, props));

    _this3.state = {
      scrollY: 0
    };

    // bind to the class object so updateScrollY can access this.setState
    _this3.updateScrollY = _this3.updateScrollY.bind(_this3);
    return _this3;
  }

  _createClass(ScrollLogger, [{
    key: 'updateScrollY',
    value: function updateScrollY(e) {
      this.setState({ scrollY: Math.round(window.scrollY) });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.updateScrollY);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScrollY);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'scrollbar' },
        'Scrolled: ',
        this.state.scrollY,
        'px'
      );
    }
  }]);

  return ScrollLogger;
}(React.Component);

var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Counter, null),
    React.createElement(Link, null),
    React.createElement(ScrollLogger, null)
  );
};

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));