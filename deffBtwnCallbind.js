personOne = {
    name : 'Tamim sarkar',
    salary : 40000,
    charges : function(amount ,tax = 0){                // tax default value 0
        this.salary = this.salary - amount - tax;
        return this.salary;
    }
}

console.log(personOne.charges(1200));

//another object

personTwo = {
    name : 'Zahirul Islam',
    salary : 20000
}

// Calling
const calling = personOne.charges.call(personTwo,3000,33);
console.log(calling);

//Apply

const apply = personOne.charges.apply(personTwo,[3000,300,300]);
console.log(apply);