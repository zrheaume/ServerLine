const main = require(__dirname + "/main.js");
const DIR = main.DIR;
const io = require(DIR + "/io.js");

var hub = {
    clerk : {},
    warehouse: {
        dock : [],
        dataset = {},
        receive: function (val, key) {
            console.log("Loading dock opened");
            var item = {};
            if (val || key) {
                if (val && (!key)) {
                    item["value"] = val;
                    this.dock.push(item);
                } else if (val && key) {
                    item[key] = val;
                    this.dock.push(item);
                } else if (key && !val) {
                    item[key] = null;
                    this.dock.push(item);
                }
            } else {    
            }
        }
    }
}

module.exports = {
    dataset: function () {
        return hub.warehouse.dataset;
    },
    datapoint: function (ind) {
        return hub.warehouse.dataset[ind];
    },
    ship: function (val, key) {
        warehouse.receive(val, key);
    }
}