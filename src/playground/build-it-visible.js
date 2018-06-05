console.log('app.js is running!');
    
const app = {
    title: 'Visibility Toggle',
    button: 'Show details',
    subtitle: ''
 };

const appRoot = document.getElementById('app');

const hideText = () => {
    if(app.subtitle.length>0){
        app.subtitle = '';
        app.button = 'Show details'
        render();
    } else {
        app.subtitle = 'Hey. These are some details you can now see!';
        app.button = 'Hide details'
        render();
    }
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={hideText}>{app.button}</button>
            {app.subtitle && <p>{app.subtitle}</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();