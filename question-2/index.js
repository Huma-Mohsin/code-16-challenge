// //Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties mlaptop1 will be assigned the third laptop object (index 2 in the array), and laptop3 will be assigned the fourth laptake, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
//solution
//An array named laptops containing objects, each representing a different laptop. Each object has properties make, model, and year.
var laptops_info = [
    //creating an object to keep properties of make,model,and  year
    { make: "Apple", model: "Mac Book Air 15", year: 2023 }, //each object has different laptop properties.
    { make: "Lenovo", model: "Ideapad", year: 2022 },
    { make: "Acer", model: "Nitro V15", year: 2019 },
];
//what is destructuring?
//Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
//doing destructuring as:-
var laptop1 = laptops_info[1], laptop3 = laptops_info[2]; //In the code here const [, laptop1, laptop3] = laptops_info;, the syntax [, laptop1, laptop3] is used for array destructuring. This syntax is utilized when we want to ignore certain elements of the array during destructuring.
//*[, laptop1, laptop3]: This part of the destructuring assignment specifies that we want to ignore the first element of the laptops_info array (represented by the comma ,) and assign the second element to the variable laptop1 and the third element to the variable laptop3.//
//log an information
console.log(laptop1);
console.log(laptop3);
//lets check for furthur destructuring work:-
console.log("\n");
var laptop2 = laptops_info[1];
console.log(laptop2);
