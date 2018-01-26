console.log('Shit is running!');

const appRoot = document.getElementById('app');
let visibility = false;

const app = {
    title: 'Visibility toggle'
};

const toggleVisibility = () => {
    visibility = !visibility;
    render()
};

const render = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <button onClick={toggleVisibility}>{visibility ? 'Hide things' : 'Show sheep'}</button>
        {visibility && (
            <p>
                Details
            </p>
        )}
        
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  };
  
  render();