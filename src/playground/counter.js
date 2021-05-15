class Counter extends React.Component{
    constructor(props)
    {
        super(props)    // This is wriiten as this doesnot work if not written.
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:0
        }
    }
    handleAddOne()
    {
        this.setState((preState)=>{
            return {
                count:preState.count+1
            };
        })
    }
    handleMinusOne()
    {
        this.setState((preState)=>{
            return {
                count:preState.count-1 // Also Same as count:this.state.count-1 i.e. (this.state.count==preState.count)
            };
        })
    }
    handleReset()
    {
        this.setState(()=>{
            return {
                count:0
            }
        })
    }
    render()
    {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button><br/>
                <button onClick={this.handleMinusOne}>-1</button><br/>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.getElementById('app'))


//==============NOTE => BELOW AND ABOVE CODE HAS SAME OUTPUT THE DIFFERENCE IS ABOVE CODE HAS USED REACT STATE COMPONENTS AND BELOW HAS USED JUST A SIMPLE CONST jsx AND JUST RENDER IT====================================//


/*let count=0
const addOne=()=>{
    count++;
    renderCounterApp(); // This is called as for every function call this count changes value and it is reflected in frontend. therefore it is called after every count++ 
}
const subOne=()=>{
    count--;
    renderCounterApp();5
}
const reset=()=>{
    count=0;
    renderCounterApp();
}
const numbers=[30,40,50,60]
//class is replaced by className in JSX
// If the function is in written in JSX form in onClick in button then after {function_name} () these brackets are not needed.
// <select> Example for Dynamic Dropdown.
const appRoot = document.getElementById('app')

const renderCounterApp = ()=>{
    const template2=(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subOne}>-1</button>
        <button onClick={reset}>Reset</button>
                {
            numbers.map((num)=>{
                return <p key={num}>Number: {num}</p>
            })
        }
        <select>
            {
                object.options.map((val)=>{
                    return <option>{val}</option>
                })
            }
        </select>
    </div>
    )
    ReactDOM.render(template2, appRoot)
}
renderCounterApp();*/