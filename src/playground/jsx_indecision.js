// JSX - JavaScript XML
const object={
    title:"Indecision App ",
    subtitile:"This is where we write",
    options:[]
}
const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value
    if(option)
    {
        object.options.push(option)
        e.target.elements.option.value='';
    }
    renderTemplate();
}

const onremoveAll=()=>{
    object.options=[]
    renderTemplate();
}

const onMakeDecision=()=>{
    alert(object.options.length)

}
const appRoot = document.getElementById('app')

const renderTemplate=()=>{
    const template =(
    <div>
        <h1>{object.title}</h1>
        {object.subtitile && <p>{object.subtitile}</p>}
        {object.options.length ? "Here are your Options" : "No Options" }
        <br/>
        <button disabled={object.options.length==0} onClick={onMakeDecision}>What Should I Do ?</button><br/>
        <button onClick={onremoveAll}>Remove Data</button><br/>
        <ol>
            {
                object.options.map((val)=>{
                    return <li key={val}>{val}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name='option'/>
            <button>Add Button</button>
        </form>
    </div>
)
    ReactDOM.render(template, appRoot)
}

renderTemplate();