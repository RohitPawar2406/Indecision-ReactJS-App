class VisibilityToggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.toggleVisibility=this.toggleVisibility.bind(this);
        this.state={
            visibility:false
        }
    }
    toggleVisibility()
    {
        this.setState((prevState)=>{
            prevState.visibility=!prevState.visibility
        })
    }
    render()
    {
        return(
                <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.toggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

//==============NOTE => BELOW AND ABOVE CODE HAS SAME OUTPUT THE DIFFERENCE IS ABOVE CODE HAS USED REACT STATE COMPONENTS AND BELOW HAS USED JUST A SIMPLE CONST jsx AND JUST RENDER IT====================================//

/*let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();*/