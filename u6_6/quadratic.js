let elA = document.getElementById("a");
let elB = document.getElementById("b");
let elC = document.getElementById("c");
let elSol1 = document.getElementById("sol1");
let elSol2 = document.getElementById("sol2");
let elCalcQuadratic = document.getElementById("calc-quadratic");

elCalcQuadratic.onclick = function() {
    let a = elA.value;
    let b = elB.value;
    let c = elC.value;

    let disc = b**2 - 4*a*c; // discriminant

    // quadratic formula: x = (-b ± √(b² - 4ac))/2a

    if (disc < 0) { // imaginary solutions
        let realPart = -b/(2*a).toFixed(3);
        let imPart = (Math.sqrt(-disc)/(2*a)).toFixed(3);
        let sol1 = realPart + " + " + imPart + "i";
        let sol2 = realPart + " - " + imPart + "i";
        elSol1.value = sol1;
        elSol2.value = sol2;
    } else { // real solutions
        let sol1 = ((-b + Math.sqrt(disc))/(2*a)).toFixed(3);
        let sol2 = ((-b - Math.sqrt(disc))/(2*a)).toFixed(3);
        elSol1.value = sol1;
        elSol2.value = sol2;
    }
}
