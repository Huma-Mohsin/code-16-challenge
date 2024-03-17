//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
var lptp_obj = {
    make: "LENOVO",
    model: "IdeaPad 3 ci5",
    year: "2022",
    describe: function () {
        console.log("This laptop is ".concat(this.model, " and it is made by ").concat(this.make, " in the year ").concat(this.year));
    }
};
lptp_obj.describe();
