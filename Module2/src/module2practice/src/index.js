{
    // task 1
    var firstProgram = 'I will complete the next level web  development course ';
    var basicAction = function (name, age, role) {
        return [name, age, role];
    };
    // Task 5: Function Type
    var reverseStr = function (str) {
        var spiltStr = str.split('').reverse().join('');
        return spiltStr;
    };
    // Task 6: Spread and Rest Operators, Destructuring
    var testRestOperation = function () {
        var number = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            number[_i] = arguments[_i];
        }
        var total = 0;
        for (var _a = 0, number_1 = number; _a < number_1.length; _a++) {
            var num = number_1[_a];
            total += num;
        }
        return total;
    };
    var AssertionAndNarrowing = function (param) {
        if (typeof param === 'string') {
            return param.length;
        }
        else if (typeof param === 'number') {
            return param * 2;
        }
        return 'invalid input';
    };
    var describeAdmin = function (user) {
        return [userAdmin_1];
    };
    var userAdmin_1 = {
        name: 'akkas',
        address: 'ctg',
        salary: 200,
        role: 'admin',
        bike: true,
        isRich: false,
    };
    var res = describeAdmin(userAdmin_1);
    // Task 10: Nullish Coalescing
    var getDisplayName = function (name) {
        var isAnonymous = name !== null && name !== void 0 ? name : 'Anonymous';
        if (!isAnonymous) {
            return "this is the name you provide ".concat(name);
        }
        else {
            return isAnonymous;
        }
    };
    console.log(getDisplayName(null));
}
