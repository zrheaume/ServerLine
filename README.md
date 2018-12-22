# ServerLine
## Node Server Runtime Command Interface
ServerLine(nodeSL) provides an active administrator command line within the javascript runtime environment,which may be used to monitor data objects, change server parameters, and execute 
functions through the process.stdin / process.stdout streams.

### io.js

io.init(callback);

On io.init(*), io.js creates an interface through which the user may interact directly with the server. By default, nodeSL uses node's readline library to create an interface using process.stdin and process.stdout. This causes compatibility issues with nodemon, however, and if you desire to use Serverline and run on nodemon, this can be achieved simply by locating ServerLine's io.js file and commenting out lines 4-19, while uncommenting lines 21-33. This replaces the native readline interface with an inquirer prompt, but does not affect functionality. (The only reason readline has been made the nodeSL default is for aesthetic purposes).

The interface is declared in io.js, but not created in the until io.init() is called in main.js, the handler. When a nodeSL command is entered, **io** allows 