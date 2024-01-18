class Person {
    distance = 0;
    moveTo(distance) {
        this.distance = distance
    }

    shout(message) {
        console.log(message)
    }

    messagesHeard(){
        return ["free bagels at Adam's"]

    }
}

module.exports = Person;