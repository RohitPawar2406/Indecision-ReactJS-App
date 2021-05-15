
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
      // Life Cycles
    /*
    Lifecycle of Components
    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

    The three phases are: Mounting, Updating, and Unmounting.
    */
  componentDidMount() {
        //The componentDidMount() method is called after the component is rendered.
    //This is where you run statements that requires that the component is already placed in the DOM.
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //The componentDidUpdate method is called after the component is updated in the DOM.
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
       //The componentWillUnmount method is called when the component is about to be removed from the DOM. 
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    // Invokes when remove all button is Clicked and options array is make NULL , This is completely done by setState()
            /*this.setState(()=>{
            return {
                options:[]
            }
        })*/
        // NEW SYNTAX FOR ABOVE FOR 4 LINES....
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    // Here filter optionToRemove which came from Option is checked whelter same as previosu state options array.
    //Filter options return elements which return true and false statement is discarded.
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    //setState is making changes in the options array.
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {  //instance of React Component class which is complusory to write...
    const subtitle = 'Put your life in the hands of a computer';
    //Indecision App rendering all other components.
    
    return (
      <div>
        <Header subtitle={subtitle} />                 
        <Action
          hasOptions={this.state.options.length > 0}    
          handlePick={this.handlePick}                 
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
    /*
    1. In Header props is been passed which is catched in Header Compn(Component).  Props are also how you pass data from one component to another, as parameters. Props data is just passed and cannot make changes in that.
    2. state is something which is owned by that component. Here options is owned by IndecisionApp class where we passed that to another components. by using setState we can make changes in state parameters in same React Component who owned it.....
    3. this.handlePick,this.handleDeleteOptions,this.handleDeleteOption,this.handleAddOption is passing instance to other react Component which is basicaaly function in IndecisionApp class.
    */
  }
}

IndecisionApp.defaultProps = {  // using this we can make Props default value.
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
const Header = (props) => {               // This is Stateless Function React Component. Its React Class is also written Above
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
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
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}      // Above Indecision App handlePick is invoked as we pass it as prop parameter
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
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
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>                     
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
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
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
/*
2. Installing Babel=> npm install -g babel-cli
3. =>yarn init
4. =>yarn add babel-preset-react babel-preset-env@1.5.2
5.To Run babel=>babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
 */