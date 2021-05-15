const username='Mike is Passed as a variable which we can change easily'
const user_object={
    Name:"Gaurav",
    Age:'14',
    location:"Pune"
}
function checklocation(location)
{
    if(location){
        return location
    }
}
function newlocation(location) {
    if(location)
    {
        return <p>New Location: {location}</p>
    }
}
const temp2=(
    //Static and Dynamic variable passing. Also we can pass a JSON Body also.
    <div>
        <h1>Rohit</h1> 
        <h1>{username}</h1>
        <h2>Name: {user_object.Name}</h2>
        <h2>Age: {user_object.Age}</h2>
        {<h1>Location: {checklocation(user_object.location)}</h1>}
        {newlocation(user_object.location)}
        {user_object.location && <p>{user_object.location}</p>}
    </div>
    //Conditional Expressions in JSX
    
)
const app_Root2=document.getElementById('app2')
ReactDOM.render(temp2,app_Root2)