"use strict";

function initialize(referee) {
    // add all assertions to referee
    require("./assertions/class-name")(referee);
    require("./assertions/tag-name")(referee);
}

module.exports = initialize;
