'use strict';
var isDone = false;
var decimal = 10;
var hex = 0xf00d;
var color = 'red';
var colorName = "\ncolor is " + color + "\nhex is " + hex + "\n";
var list = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3];
var list3 = ['hoge', 10];
console.log(typeof list3[0].substr(1));
// console.log(typeof list3[1].substr(1));
// enum Color {Red,Blue,Green}
// const c:Color = Color.Red
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var c = Color[3];
console.log(c);
var hoge = [];
var warnUser = function () {
    console.log('aaaaaaaaa');
};
var ud = undefined;
var nl = null;
var error = function (message) {
    throw new Error(message);
};
var obj = function (obj) {
    return obj;
};
obj({ props: 'name' });
var someValue = "this is a string";
var strLength = someValue.length;
//# sourceMappingURL=index.js.map