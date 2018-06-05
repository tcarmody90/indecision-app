console.log('app.js is running!');

    // if statements
    // ternary operators
    // logical and operator
    
    // only render subtitle,p tag if subtitle exists - logical and
    // render new p tag - if options.length > 0 "here are your options" or "no options"
    
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
 };
 
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? 'Here are your options' : "There are no options"}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const user = {
    firstName: 'Thomas',
    lastName: 'Carmody',
    age: 27,
    location: 'Houston'
};

function getLocation() {
    if(user.location) {
        return <p>Location: {user.location}</p>;
    } 
};

const templateTwo = (
    <div>
        <h1>{user.firstName ? user.firstName : 'Anonymous'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLocation()}
    </div>
    );

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);