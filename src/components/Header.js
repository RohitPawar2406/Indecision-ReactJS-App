import React from 'react';


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
    <div className='header'>
    <div className='container'>
      <h1 className='header__title'>{props.title}</h1>
      {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
    </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

export default Header