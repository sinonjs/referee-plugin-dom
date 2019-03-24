"use strict";

require("jsdom-global")();

var referee = require("@sinonjs/referee");

// remove existing className, tagName from referee
delete referee.assert.className;
delete referee.refute.className;
delete referee.assert.tagName;
delete referee.refute.tagName;

// load and initialize plugin
require("../lib/index")(referee);

describe("tagName", function() {
    context("assert", function() {
        it("should pass when tag name is the same", function() {
            var element = document.createElement("div");

            referee.assert.tagName(element, "div");
        });

        it("should fail when tag name is different", function() {
            var element = document.createElement("div");

            try {
                referee.assert.tagName(element, "span");
                throw new Error("8976da8c-3a44-47d9-9fdc-eea6d8babfe0");
            } catch (error) {
                referee.assert.equals(
                    error.message,
                    "[assert.tagName] Expected tagName to be span but was DIV"
                );
            }
        });
    });

    context("refute", function() {
        it("should pass when tag name is different", function() {
            var element = document.createElement("div");

            referee.refute.tagName(element, "span");
        });

        it("should fail when tag name is the same", function() {
            var element = document.createElement("div");

            try {
                referee.refute.tagName(element, "div");
                throw new Error("ed07797c-ff60-4619-a837-00d9fa6bcc4b");
            } catch (error) {
                referee.assert.equals(
                    error.message,
                    "[refute.tagName] Expected tagName not to be DIV"
                );
            }
        });
    });
});
