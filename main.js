//Variable declaration
const DIR = __dirname;
const io = require(`${DIR}/io.js`);
var grunt = require(`${DIR}/grunt.js`);

// io module provides a server input that can execute server admin commands 
// during the server runtime.
io.init(function(event){
    grunt.give(event, "ioEvent");
});

// grunt.give(">new datapoint customers", "strIn");
// grunt.give("Welcome gift");
// grunt.give("")
