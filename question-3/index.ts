
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.

//solution.
//consider a price of two laptop set in an array.

let Price_of_HP_VICTUS_15_FB1013dx:number[]=[184999,188000,183000,190000]//we assume the price of this laptop at different places or shops.
let Price_of_HP_EliteBook_820_G3:number[]=[50000,52000,48000,49500]

let Price_of_Lenovo_ip3_i5_10th_gen:number[]=[109000,110000,115000,108500]//do one more array for extra undersanding

//combining two or more arrays by using spread operators

let combinedArray=[...Price_of_HP_VICTUS_15_FB1013dx,...Price_of_HP_EliteBook_820_G3,...Price_of_Lenovo_ip3_i5_10th_gen]
//Combined result without sort.
console.log("Array's Combined Without Sort:-",combinedArray);

//sorting an array in acending order as:

combinedArray.sort((a,b)=>a-b)//ascending sorting
//log the sorted result as required in a question.
console.log("\n");

console.log("Array's Combined After Sort:-",combinedArray);
