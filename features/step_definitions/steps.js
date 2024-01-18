const { Given, When, Then } = require("@cucumber/cucumber");
const Person = require("../../src/shouty");
const { assertThat, is } = require("hamjest");

Given('Abid is located {int} metres from Adam', function (distance) {
    this.abid = new Person
    this.adam = new Person
    this.abid.moveTo(distance)
});


When('Adam shouts {string}', function (message) {
    this.adam.shout(message)
    this.message = message
    console.log(this.message)
});


Then('Abid hears Adam\'s message', function () {
    assertThat(this.abid.messagesHeard(), is([this.message]))
});