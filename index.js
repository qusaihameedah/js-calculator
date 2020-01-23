var Op;
var Eq = 0, New = 0, Old = 0, Number = 0, Count = 0, CountDiv = 1, FirstNum = 0, Dot = false, Coop = 1;
var In = "";
var EqPrint = false;
function AC() {
    Eq = 0, New = 0, Old = 0, Number = 0, Count = 0, CountDiv = 1, FirstNum = 0, Dot = false, Coop = 1;
    document.getElementById('input').innerHTML = "0"; ى
    document.getElementById('output').innerHTML = "0";
    In = "";
    EqPrint = false;
}
function multipply() {
    if (Coop == 1) {
        FirstNum = Old;
    }
    else {
        equal();
        FirstNum = Eq;
    }
    Old = 0;
    New = 0;
    Count = 0;
    CountDiv = 0;
    Op = '*';
    Coop = Coop + 1;
    Dot = false;
    In += "*";
    document.getElementById('input').innerHTML = In;

}
function div() {
    if (Coop == 1) {
        FirstNum = Old;
    }
    else {
        equal();
        FirstNum = Eq;
    }
    Old = 0;
    New = 0;
    Count = 0;
    CountDiv = 0;
    Op = '/';
    Coop = Coop + 1;
    Dot = false;
    In += "/";
    document.getElementById('input').innerHTML = In;
}
function num1() {
    Number = 1;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    console.log(New);
    document.getElementById('output').innerHTML = Old;
    console.log(Old);
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function num2() {
    Number = 2;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function num3() {
    Number = 3;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function add() {
    if (Coop == 1) {
        FirstNum = Old;
    }
    else {
        equal();
        FirstNum = Eq;
    } Old = 0;
    New = 0;
    Count = 0;
    CountDiv = 0;
    Op = '+';
    Coop = Coop + 1;
    Dot = false;
    In += "+";
    document.getElementById('input').innerHTML = In;
}
function num4() {
    Number = 4;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function num5() {
    Number = 5;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function num6() {
    Number = 6;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function min() {
    if (Coop == 1) {
        FirstNum = Old;
    }
    else {
        equal();
        FirstNum = Eq;
    } Old = 0;
    New = 0;
    Count = 0;
    CountDiv = 0;
    Op = '-';
    Coop = Coop + 1;
    Dot = false;
    In += "-";
    document.getElementById('input').innerHTML = In;

}
function num7() {
    Number = 7;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    In += Number;
    document.getElementById('output').innerHTML = Old;
    document.getElementById('input').innerHTML = In;

}
function num8() {
    Number = 8;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function num9() {
    Number = 9;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;

}
function equal() {
    if (Op == '+') {
        Eq = FirstNum + Old;
    }
    else if (Op == '-') {
        Eq = FirstNum - Old;
    }
    else if (Op == '*') {
        Eq = FirstNum * Old;
    }
    else if (Op == '/') {
        Eq = FirstNum / Old;
    }
    document.getElementById('output').innerHTML = Eq;
    Dot = false;
    if (EqPrint == true) {
        In += "=";
        document.getElementById('input').innerHTML = In;
    }

}
function num0() {
    Number = 0;
    if (Dot == false) {
        New = (Old * 10) + Number;
        Count = Count + 1;
    }
    else {
        New = (Number / 10) + Old;
        CountDiv = CountDiv + 1;
    }
    Old = New;
    document.getElementById('output').innerHTML = Old;
    In += Number;
    document.getElementById('input').innerHTML = In;
}
function dot() {
    document.getElementById('output').innerHTML = Old + ".";
    Dot = true;
    In += ".";
    document.getElementById('input').innerHTML = In;

}
function Prtint() {
    EqPrint = true

}
document.getElementById('AC').addEventListener("click", AC);
document.getElementById('btn-multiply').addEventListener("click", multipply);
document.getElementById('btn-div').addEventListener("click", div);
document.getElementById('btn-num1').addEventListener("click", num1);
document.getElementById('btn-num2').addEventListener("click", num2);
document.getElementById('btn-num3').addEventListener("click", num3);
document.getElementById('btn-add').addEventListener("click", add);
document.getElementById('btn-num4').addEventListener("click", num4);
document.getElementById('btn-num5').addEventListener("click", num5);
document.getElementById('btn-num6').addEventListener("click", num6);
document.getElementById('btn-min').addEventListener("click", min);
document.getElementById('btn-num7').addEventListener("click", num7);
document.getElementById('btn-num8').addEventListener("click", num8);
document.getElementById('btn-num9').addEventListener("click", num9);
document.getElementById('btn-equ').addEventListener("click", Prtint);
document.getElementById('btn-equ').addEventListener("click", equal);
document.getElementById('btn-num0').addEventListener("click", num0);
document.getElementById('btn-dot').addEventListener("click", dot);

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        setTimeout(function () {
            e.target.blur();
        }, 100);
    });
}