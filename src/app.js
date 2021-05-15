import React from 'react';
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/*============================PASSING CHILDREN TO A COMPONENT=======================================
const Layout=(props)=>{
    return(
        <div>
            <h1>Header</h1>
            {props.children}
            <h3>Footer</h3>
        </div>
    )
}

ReactDOM.render((
<Layout>
    <div>
        <p>Title Page</p>
        <p>This is Concept where we pass Children to Component!!!</p>
    </div>
</Layout>)
, document.getElementById('app'));*/


/*======================================TRANSFORM-CLASS-PROPERTIES==================================================
    class oldSyntax{
    constructor()
    {
        this.name='Mike'
        this.greet=this.greet.bind(this);
    }
    greet()
    {
        return `Hi I am is ${this.name}.`
    }
}
const newInst=new oldSyntax();
console.log(newInst.greet())

class newInst2{
    name1='John';
    greet()
    {
        return `Hi in new Syntax ${this.name1}.`
    }
}
const newInst1=new newInst2();
console.log(newInst1.greet())*/

/*2. Installing Babel=> npm install -g babel-cli
3. =>yarn init
4. =>yarn add babel-preset-react babel-preset-env@1.5.2
5.To Run babel=>babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
 */



/*import './utils'
import {isAdult,canDrink} from './person'
console.log("Rohit!!!!")

console.log(isAdult(11))
console.log(canDrink(22))*/