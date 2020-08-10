// personInfo = {
//     firstname : 'Tamim',
//     lastName :'sarkar',
//     salary : 20000,
//     skill : 'programming',
    
//   getFullName : function(){
//       console.log(this.firstname,this.lastName)
//   },
//   chargeBill : function(amount){
     
//       this.salary = this.salary - amount;
//       return this.salary;
//   }

// }

// const heroPerson = {
//     firstName : 'Hanif',
//     lastName : 'Sanket',
//     salary : 20000,
//     skill : 'Desinging'
// }
// const heroChargeBill = personInfo.chargeBill.bind(heroPerson);
// console.log(heroChargeBill(2000));

// console.log(personInfo.salary)

// Another Practice

personOne = {
    name : 'Tamim sarkar',
    skill : 'programming',
    salary :20000,
    

    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

PersonTwo = {
    name : 'ziaur rahman',
    skill : 'Money londering',
    salary : 30000
}

const binding = personOne.chargeBill.bind(PersonTwo);

console.log(binding(2000));
console.log(personOne.salary)

//Again practice

bioOFhanif = {
    name : 'Hanif Sanket',
    salary : 40000,
    billOfHanif : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
    
}
bioOFhanif.billOfHanif(1000)
console.log(bioOFhanif.salary)

// Bind object to another object

 bioOFmizan = {
    name : 'Mizan Uddin',
    salary : 30000
}

const bills = bioOFhanif.billOfHanif.bind(bioOFmizan);
console.log(bills(200))