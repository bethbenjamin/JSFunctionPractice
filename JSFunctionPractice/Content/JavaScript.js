﻿


function checkPalindrome() {
    var userResponse = prompt('Enter a word you think is a Palindrome')
    var var2 = userResponse.split('').reverse().join('');
    if (userResponse === var2) {
        alert('This is a palindrome');
    }
    else {
        alert('This is NOT a palindrome');
    }
}


function alphOrder() {
    var userResponse = prompt('Enter a word you would like to alphabetize')
    var var2 = userResponse.split('').sort().join('');
    alert(var2);
}


function tringle() {
    var sideA = parseInt(prompt("Enter side one of Tringle : "));
    var sideB = parseInt(prompt("Enter side two of Tringle : "));
    var sideC = parseInt(prompt("Enter side three of Tringle:"));
    var s = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    alert(area);


    document.write("<br>");
    document.write("<h3> Area of Tringle</h3>");
    document.write("<font face='arial' size='3'>");
    document.write(" The Area of Tringle is " + area + ".</font>");
}

function luckyNumber() {
    var r = Math.floor((Math.random() * 10) + 1);
    //alert(r);
    var userResponse = parseInt(prompt('Guess a number between 1 & 10!'));
    if (r === userResponse) {
        alert('Good work!');
    }
    else {
        alert('Not matched');
    }
}


function max() {
    var num1 = userNum1;
    var num2 = userNum2;
    var userNum1 = parseInt(prompt('Please enter a number:'));
    var userNum2 = parseInt(prompt('Please enter a second number:'));
    if (userNum1 > userNum2) {
        alert(+userNum1 + ' is greater');
    }
    else {
        alert(+ userNum2 + ' is greater');
    }

}


//working on next question - is not complete

//function firstOfArray() {
//    var array1=([7, 9, 0, -2]);
//    var array1=([[]]);
//    var array1=([[], 3]);
//    var array1=([7, 9, 0, -2], 3);
//    var array1=([7, 9, 0, -2], 6);
//    var array1=([7, 9, 0, -2], -3);

//    var first = array1.slice(1);
//    document.getElementById("firstOfArray").innerHTML = first;
//}


