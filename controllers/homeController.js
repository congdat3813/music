const homeModel = require("../models/homeModel");
console.log("aa");
exports.indexView =  async function(req, res) {
    let event = await homeModel.getAllEvent();
    console.log(event);
    res.render("index", {event: event});
};
