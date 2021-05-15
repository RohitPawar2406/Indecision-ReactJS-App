import React from 'react';
import Option from './Option'
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
    <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
    <button className="button button--link" onClick={props.handleDeleteOptions}
    >
    Remove All
    </button> 
    </div>                    
      {props.options.length === 0 && <p className="widget-header__ptag">Please add an option to get started!</p>}
      {
        props.options.map((option,index) => (
          <Option
            count={index+1}
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
export default Options