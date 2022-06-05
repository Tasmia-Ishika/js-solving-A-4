//-------- Problem 1: anaToVori---->

function anaToVori(ana) {
    // error handling
    if (ana <= 0) {
        return 'Please enter valid Ana.'
    }

    // calculation
    let vori = ana / 16;
    return vori;
}
var ana = 96;
var vori = anaToVori(ana);
console.log(vori);

//------- Problem 2: pandaCost --->

function pandaCost() {
    // error handling
    // if (typeof shingaraNumber != 'number' && typeof somuchaNumber != 'number' && typeof jilapiNumber != 'number') {
    //     return 'Please Enter items in your cart.';
    // }

    // calculation
    var shingara = 7;
    var somucha = 10;
    var jilapi = 15;
    let totalShingara = shingara * shingaraQuantity;
    let totalSomucha = somucha * somuchaQuantity;
    let totalJilapi = jilapi * jilapiQuantity;
    totalCost = totalShingara + totalSomucha + totalJilapi;
    return totalCost;
}
let shingaraQuantity = 15;
let somuchaQuantity = 10;
let jilapiQuantity = 5;
console.log(pandaCost(shingaraQuantity, somuchaQuantity, jilapiQuantity));

//----- Problem 3: picnicBudget--->

function picnicBudget(perHead) {
    // error handling
    if (typeof perHead != 'number') {
        return 'Please give valid number of people.';
    }

    // calculation
    const perHeadFirstSlot = 5000;
    const perHeadSecondSlot = 4000;
    const perHeadLastSlot = 3000;

    if (perHead <= 100) {
        const count = perHead * perHeadFirstSlot;
        return count;
    }
    else if (perHead <= 200) {
        const firstSlot = 100 * perHeadFirstSlot;
        const remaining = perHead - 100;
        const secondSlot = remaining * perHeadSecondSlot;
        const totalBudget = firstSlot + secondSlot;
        return totalBudget;
    }
    else {
        const firstSlot = 100 * perHeadFirstSlot;
        const secondSlot = 100 * perHeadSecondSlot;
        const remaining = perHead - 200;
        const lastSlot = remaining * perHeadLastSlot;
        const totalBudget = firstSlot + secondSlot + lastSlot;
        return totalBudget;
    }
}
const budget = picnicBudget(310);
console.log(budget);

//----- Problem 4: oddFriend ---->

function oddFriend(friends) {
    for (i = 0; i <= friends.length; i++) {
        // error handling
        if (typeof friends[i] != 'string') {
            return "Please enter valid name.";
        }
        if (friends[i].length % 2 == 1) {
            return friends[i];
        }
    }
}
const friends = ['Rinita', 'Ishikaa', 'Yoo-Na-bi', 'Maliha', 'Juri'];
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);