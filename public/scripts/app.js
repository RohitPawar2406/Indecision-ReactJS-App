'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }
  // Life Cycles
  /*
  Lifecycle of Components
  Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
   The three phases are: Mounting, Updating, and Unmounting.
  */


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //The componentDidMount() method is called after the component is rendered.
      //This is where you run statements that requires that the component is already placed in the DOM.
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        // Do nothing at all
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      //The componentDidUpdate method is called after the component is updated in the DOM.
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //The componentWillUnmount method is called when the component is about to be removed from the DOM. 
      console.log('componentWillUnmount');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      // Invokes when remove all button is Clicked and options array is make NULL , This is completely done by setState()
      /*this.setState(()=>{
      return {
          options:[]
      }
      })*/
      // NEW SYNTAX FOR ABOVE FOR 4 LINES....
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      // Here filter optionToRemove which came from Option is checked whelter same as previosu state options array.
      //Filter options return elements which return true and false statement is discarded.
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
      //setState is making changes in the options array.
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //instance of React Component class which is complusory to write...
      var subtitle = 'Put your life in the hands of a computer';
      //Indecision App rendering all other components.

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
      /*
      1. In Header props is been passed which is catched in Header Compn(Component).  Props are also how you pass data from one component to another, as parameters. Props data is just passed and cannot make changes in that.
      2. state is something which is owned by that component. Here options is owned by IndecisionApp class where we passed that to another components. by using setState we can make changes in state parameters in same React Component who owned it.....
      3. this.handlePick,this.handleDeleteOptions,this.handleDeleteOption,this.handleAddOption is passing instance to other react Component which is basicaaly function in IndecisionApp class.
      */
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = { // using this we can make Props default value.
  options: []
};

/*
class Header extends React.Component{               // This is class a react component which we can use repeatly 
    render()    //instance of React Component class which is complusory to write...
    {
        return <div>
            <h1>{this.props.title}</h1>
            {this.props.subtitle&& <h2>{this.props.subtitle}</h2>}
        </div>
    }
} 
*/
var Header = function Header(props) {
  // This is Stateless Function React Component. Its React Class is also written Above
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

/*

class Action extends React.Component{
    handlePick()
    {
        alert("HEllo!!")
    }
    render()
    {
        return <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I do?</button>
        </div>
    }
}
*/
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick // Above Indecision App handlePick is invoked as we pass it as prop parameter
        , disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

/*class Options extends React.Component{
    /*constructor (props)
    {
        super(props);
        this.removeAll=this.removeAll.bind(this) // reason for this line is written below.
    }
    removeAll()
    {
        console.log(this.props.options) // ERROR-Uncaught TypeError: Cannot read property 'props' of undefined , So we get rid of this error we use .bind() method in the constructor. As we can use in render function inside onClick={this.removeAll.bind(this)} but this may get expensive as everytime we call it. Therefore its better to call at intialsation of the class i.e. in the constructor. 
        alert("Remove All Elements!!!")
    }
    render()
    {
        return <div>
            <button onClick={this.props.handleDeleteOptions} >Remove All</button>
            {
                    this.props.options.map((op)=> <Option_child key={op} optionText={op} 
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
            <Option_child />
        </div>
    }
}*/
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started!'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
  /*
  1.// Above Indecision App handleDeleteOptions,handleDeleteOption is invoked as we pass it as prop parameter
  */
};

/*
class Option extends React.Component{
    render()
    {
        return(
            <div>
                {this.props.optionText}
                      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
            </div>
        )
    }
}
*/
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
/*
2. Installing Babel=> npm install -g babel-cli
3. =>yarn init
4. =>yarn add babel-preset-react babel-preset-env@1.5.2
5.To Run babel=>babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
 */
