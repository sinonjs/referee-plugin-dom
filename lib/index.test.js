"use strict";

var assert = require("assert");
var proxyquire = require("proxyquire").noCallThru();
var sinon = require("sinon");

var fakeClassName = sinon.fake();
var fakeReferee = {};
var fakeTagName = sinon.fake();

describe("module", function() {
    var plugin;

    beforeEach(function() {
        plugin = proxyquire("./index", {
            "./assertions/class-name": fakeClassName,
            "./assertions/tag-name": fakeTagName
        });

        plugin(fakeReferee);
    });

    afterEach(function() {
        sinon.resetHistory();
    });

    it("exports a unary Function named `initialize`", function() {
        assert.equal(typeof plugin, "function");
        assert.equal(plugin.name, "initialize");
        assert.equal(plugin.length, 1);
    });

    it("adds className", function() {
        assert.equal(fakeClassName.calledWith(fakeReferee), true);
    });

    it("adds tagName", function() {
        assert.equal(fakeClassName.calledWith(fakeReferee), true);
    });
});
