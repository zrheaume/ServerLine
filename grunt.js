const DIR = __dirname;
const main = require(`${DIR}/main.js`);
var schema = require(`${DIR}/schema.js`);


// The grunt object is the steward of ServerLine input.
// The grunt's main task is to receive input, read it, 
// and execute that input's corresponding task.
var grunt = {
    inbox: [],
    receive: function (val, key) {
        // console.log("Grunt summoned");
        var item = {};
        if (val || key) {
            if (val && (!key)) {
                item["value"] = val;
                this.inbox.push(item);
            } else if (val && key) {
                item[key] = val;
                this.inbox.push(item);
            } else if (key && !val) {
                item[key] = null;
                this.inbox.push(item);
            }
        } else {
        }
        this.readInbox();
    },
    readInbox: function(){
        for (var i in this.inbox){
            schema.read(this.inbox[i], "grunt", function(ticket){
                //TODO: handle ticket
                console.log(ticket);
            });
        }
    },
    
}

module.exports = {
    give: function (val, key) {
        grunt.receive(val, key);
    }
}