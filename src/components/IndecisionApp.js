import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'
class IndecisionApp extends React.Component {
  /*constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }*/

  // Above constructor is commented as we will write an easily way of syntax this is known as babel-tranfromer-class-properties.Here we remove constr then write only state without this.state , then all functions are converted to es6 functions.
    state = {
      options: [],
      selectedOption:undefined
    };
      // Life Cycles
    /*
    Lifecycle of Components
    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

    The three phases are: Mounting, Updating, and Unmounting.
    */
  componentDidMount=()=> {
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

  componentDidUpdate=(prevProps, prevState)=> {
    //The componentDidUpdate method is called after the component is updated in the DOM.
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount=()=> {
       //The componentWillUnmount method is called when the component is about to be removed from the DOM. 
    console.log('componentWillUnmount');
  }
  handleDeleteSelectedOptions=()=>{
        this.setState((prevState) => ({
      selectedOption:undefined
    }));
  }
  handleDeleteOptions=()=> {
    // Invokes when remove all button is Clicked and options array is make NULL , This is completely done by setState()
            /*this.setState(()=>{
            return {
                options:[]
            }
        })*/
        // NEW SYNTAX FOR ABOVE FOR 4 LINES....
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption=(optionToRemove)=> {
    // Here filter optionToRemove which came from Option is checked whelter same as previosu state options array.
    //Filter options return elements which return true and false statement is discarded.
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick=()=> {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  }
  handleAddOption=(option)=> {
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
        <div className='container'>
        <Action
          hasOptions={this.state.options.length > 0}    
          handlePick={this.handlePick}                 
        />
        <div className="widget">
          <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOptions={this.handleDeleteSelectedOptions}
        />
        </div>               
      </div>
    );
    /*
    1. In Header props is been passed which is catched in Header Compn(Component).  Props are also how you pass data from one component to another, as parameters. Props data is just passed and cannot make changes in that.
    2. state is something which is owned by that component. Here options is owned by IndecisionApp class where we passed that to another components. by using setState we can make changes in state parameters in same React Component who owned it.....
    3. this.handlePick,this.handleDeleteOptions,this.handleDeleteOption,this.handleAddOption is passing instance to other react Component which is basicaaly function in IndecisionApp class.
    */
  }
}

/*IndecisionApp.defaultProps = {  // using this we can make Props default value.
  options: []
};*/

export default IndecisionApp