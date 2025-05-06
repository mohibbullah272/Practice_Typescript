var target = 'type script was so fun';
console.log(target);
var roll = 20;
console.log(roll);
var friends = ['abul', 'kabul'];
var core = [1, 2];
var testTuple = [1, 'mar'];
var user = {
    company: 'ph',
    name: 'mohi',
    salary: 2000,
};
// function in ts 
function add(num1, num2) {
    return num1 * num2;
}
add(1, 2);
var addArrow = function (num1, num2) { return num1 + num2; };
var userInfo = {
    name: 'mezba',
    balance: 0,
    addBalance: function (balance) {
        return balance * balance; //this is called method
    }
};
var collection = [2, 4, 6];
var newCollection = collection.map(function (ele) { return ele * ele; });
//  speared operation
var bros1 = ['mohi', 'showrv', 'sakib'];
var bros2 = ['abbas', 'gabgas', 'sabgas'];
bros1.push.apply(bros1, bros2);
console.log(bros1);
