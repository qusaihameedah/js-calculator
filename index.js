var Op;
var Eq = 0, New = 0, Old = 0, Number = 0, Count = 0, CountDiv = 1, FirstNum = 0, Dot = false, Coop = 1;
var In = "";
function AC() {
  Eq = 0, New = 0, Old = 0, Number = 0, Count = 0, CountDiv = 1, FirstNum = 0, Dot = false, Coop = 1;
    document.getElementById('input').innerHTML = In;
    document.getElementById('output').innerHTML = "0";
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
    Coop = Coop + 1 ;
    Dot = false;
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
    Coop = Coop + 1 ;
    Dot = false;
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
    console.log (New);
    document.getElementById('output').innerHTML = Old;
    console.log (Old);
    In+=Number ;

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
    In+=Number ;

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
    In+=Number ;

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
    Coop = Coop + 1 ;
    Dot = false;
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
    In+=Number ;

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
    In+=Number ;

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
    In+=Number ;

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
    Coop = Coop + 1 ;
    Dot = false;
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
    document.getElementById('output').innerHTML = Old;
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
    In+=Number ;
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
    In+=Number ;
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
    In+=Number ;
}
function dot() {
    document.getElementById('output').innerHTML = Old + ".";
    Dot = true ;
}
document.getElementById('AC').addEventListener("click",AC);
document.getElementById('btn-multiply').addEventListener("click",multipply);
document.getElementById('btn-div').addEventListener("click",div);
document.getElementById('btn-num1').addEventListener("click",num1);
document.getElementById('btn-num2').addEventListener("click",num2);
document.getElementById('btn-num3').addEventListener("click",num3);
document.getElementById('btn-add').addEventListener("click",add);
document.getElementById('btn-num4').addEventListener("click",num4);
document.getElementById('btn-num5').addEventListener("click",num5);
document.getElementById('btn-num6').addEventListener("click",num6);
document.getElementById('btn-min').addEventListener("click",min);
document.getElementById('btn-num7').addEventListener("click",num7);
document.getElementById('btn-num8').addEventListener("click",num8);
document.getElementById('btn-num9').addEventListener("click",num9);
document.getElementById('btn-equ').addEventListener("click",equal);
document.getElementById('btn-num0').addEventListener("click",num0);
document.getElementById('btn-dot').addEventListener("click",dot);






