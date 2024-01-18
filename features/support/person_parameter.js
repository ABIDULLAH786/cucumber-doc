const { defineParameterType } = require("@cucumber/cucumber");
const Person = require("../../src/shouty");

defineParameterType ({
    name:'person',
    regex:"/Abid|Adam/",
    transformer: name => new Person(name)
})