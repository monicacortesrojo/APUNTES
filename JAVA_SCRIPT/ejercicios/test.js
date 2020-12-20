function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    if (val < 5) {
        return "Smaller than 5";
    }

    return "Between 5 and 10";
}

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    }

    return "Between 5 and 10";
}

console.assert(testElseIf(9) === "Greater than 10");
console.assert(testElseIf(9) === "Greater than 10");

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.assert(orderMyLogic(3) === "Less than 5");
console.assert(orderMyLogic(7) === "Less than 10");
console.assert(orderMyLogic(11) === "Greater than or equal to 10");

function caseInSwitch(val) {
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
    }
}

console.assert(caseInSwitch(1) === "alpha");
console.assert(caseInSwitch(2) === "beta");

function sequentialSizes(val) {
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
}

console.assert(sequentialSizes(3) === "Low");