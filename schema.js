
var schema = {
    read : function(item, from, callback){
        if (from === "grunt"){
            schema.grunt.parse(item, callback);
        }
    },
    grunt : {
        knows : {
            commands : ["add","del","show","help"],
            status : {
                unknown: "0!",
                known: "10",
                success: "11"
            },
            GruntLine : function(item){
                if(item.ioEvent){this.strIn = item.ioEvent}
                if(item.pointer){ this.pointer = item.pointer};
                if(item.line){ this.line = item.line};
                if(item.command){ this.command = item.command};
                this.logAll = function(){
                    console.log("New gruntline!");
                    for(var p in this){
                        console.log(this[p]);
                    }
                };
                this.logAll();
            }
        },
        parse : function (item, callback){
            if(item.ioEvent){
                if (item.ioEvent[0]===">"){
                    console.log("> {?grunt command}");
                    item.pointer = item.ioEvent[0];
                    item.line = [];
                    item.line.push(item.ioEvent.slice(1));
                    var gruntLine = new this.knows.GruntLine(item);
                    this.parse(gruntLine, callback);
                } else {
                    callback([this.knows.status.unknown, "Unkown to grunt", item]);
                }
            } else if(item.pointer){
                if (item.pointer === ">"){
                    if (item.line){
                        if(item.line.length === 1){
                            splitLine = item.line[0].split(" ");
                            item.line = [];
                            if (splitLine.length > 1){
                                for (var i in splitLine){
                                    item.line.push(splitLine[i]);
                                }
                            }
                            gruntLine = new this.knows.GruntLine(item);
                            this.parse(gruntLine, callback);
                        } else if (item.line.length > 1){
                            if (item.command){
                                console.log(item.command);
                            } else if(this.knows.commands.indexOf(item.line[0])!=-1){ 
                                
                            }
                        }
                    }
                }
            } else {
                callback([, "Unkown to grunt", item]);
            }
        }
    }
};

module.exports = {
    read : schema.read
};