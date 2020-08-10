const object={
    firstName : 'Tamim',
    lastName : 'Sarkar',
    getFullName : function(){
        console.log(this.firstName, this.lastName)
        
    }
}
object.getFullName();

const object2 = {
    Name : 'Shorif Uddin',
    salary : 23000,
    takeAmount : function(amount){
        this.salary =this.salary-amount;
        return this.salary;
    }
    
}
object2.takeAmount(10);

console.log(object2.salary)

//again

const object3 = {
    name : 'Tamim sarkar',
    salaary : 10000,
    openion : 'good',
    hobby : 'singing',
    takeCharges : function(amount){
        this.salaary = this.salaary - amount;
        return this.salaary;
    }
}
object3.takeCharges(100);
console.log(object3.salaary)