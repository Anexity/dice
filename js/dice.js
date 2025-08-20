var cursel1 = 4; 
var cursel2 = 2;
var curselint = cursel1 - 2;

function select4() {
    cursel1 = 4;
    document.getElementById("d4").classList.add("active");
    document.getElementById("d6").classList.remove("active");
    document.getElementById("d8").classList.remove("active");
    document.getElementById("d10").classList.remove("active");
    document.getElementById("d12").classList.remove("active");
    document.getElementById("d20").classList.remove("active");
    console.log(cursel1)
};

function select6() {
    cursel1 = 6;
    document.getElementById("d4").classList.remove("active");
    document.getElementById("d6").classList.add("active");
    document.getElementById("d8").classList.remove("active");
    document.getElementById("d10").classList.remove("active");
    document.getElementById("d12").classList.remove("active");
    document.getElementById("d20").classList.remove("active");
    console.log(cursel1)
};

function select8() {
    cursel1 = 8;
    document.getElementById("d4").classList.remove("active");
    document.getElementById("d6").classList.remove("active");
    document.getElementById("d8").classList.add("active");
    document.getElementById("d10").classList.remove("active");
    document.getElementById("d12").classList.remove("active");
    document.getElementById("d20").classList.remove("active");
    console.log(cursel1)
};

function select10() {
    cursel1 = 10;
    document.getElementById("d4").classList.remove("active");
    document.getElementById("d6").classList.remove("active");
    document.getElementById("d8").classList.remove("active");
    document.getElementById("d10").classList.add("active");
    document.getElementById("d12").classList.remove("active");
    document.getElementById("d20").classList.remove("active");
    console.log(cursel1)
};

function select12() {
    cursel1 = 12;
    document.getElementById("d4").classList.remove("active");
    document.getElementById("d6").classList.remove("active");
    document.getElementById("d8").classList.remove("active");
    document.getElementById("d10").classList.remove("active");
    document.getElementById("d12").classList.add("active");
    document.getElementById("d20").classList.remove("active");
    console.log(cursel1)
};

function select20() {
    cursel1 = 20;
    document.getElementById("d4").classList.remove("active");
    document.getElementById("d6").classList.remove("active");
    document.getElementById("d8").classList.remove("active");
    document.getElementById("d10").classList.remove("active");
    document.getElementById("d12").classList.remove("active");
    document.getElementById("d20").classList.add("active");
    console.log(cursel1)
};



function calcnum() {
    var Int2 = 0;
    var cursel2 = document.getElementById("p2").value;
    curselint = cursel1 - 2;
    var Int = parseInt(cursel1);
    if (cursel2 = NaN) Int2 = parseInt(cursel2);
    var raw = Math.floor(Math.random() * (Int - 0 + 1));
    var calc = raw + Int2;
    if (calc < 1) calc = 1;
    if (calc > curselint) {document.getElementById("rolled").style.color = "#ff66ffcc"} else {document.getElementById("rolled").style.color = "#ffffff"};
    document.getElementById("rolled").innerHTML = calc;
    document.getElementById("raw").innerHTML = raw;
};
