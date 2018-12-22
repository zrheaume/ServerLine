// const inquirer = require('inquirer');
const readline = require("readline");

const io_opt = {
    input: process.stdin,
    output: process.stdout,
    prompt: "~{ "
};

const io = readline.createInterface(io_opt);

function strIn(callback){
    io.question(io_opt.prompt, function(ioIn){
        var event = {};
        event.strIn = ioIn;
        callback(event.strIn);
        strIn(callback);
    });
};

// function strIn(callback) {
//     inquirer.prompt(
//         {
//             type: "input",
//             message: "~{",
//             name: "strIn"
//         }
//     )
//         .then(function (event) {
//             callback(event.strIn);
//             strIn(callback);
//         });
// };

module.exports = {
    init: function (callback) {
        strIn(callback);
    }
}
