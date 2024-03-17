// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
//solution.
//consider a price of two laptop set in an array.
var Price_of_HP_VICTUS_15_FB1013dx = [184999, 188000, 183000, 190000]; //we assume the price of this laptop at different places or shops.
var Price_of_HP_EliteBook_820_G3 = [50000, 52000, 48000, 49500];
var Price_of_Lenovo_ip3_i5_10th_gen = [109000, 110000, 115000, 108500]; //do one more array for extra undersanding
//combining two or more arrays by using spread operators
var combinedArray = __spreadArray(__spreadArray(__spreadArray([], Price_of_HP_VICTUS_15_FB1013dx, true), Price_of_HP_EliteBook_820_G3, true), Price_of_Lenovo_ip3_i5_10th_gen, true);
//Combined result without sort.
console.log("Array's Combined Without Sort:-", combinedArray);
//sorting an array in acending order as:
combinedArray.sort(function (a, b) { return a - b; });
//log the sorted result as required in a question.
console.log("\n");
console.log("Array's Combined After Sort:-", combinedArray);
