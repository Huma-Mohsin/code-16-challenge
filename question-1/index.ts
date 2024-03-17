//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
let lptp_obj={
    make:"LENOVO",
    model:"IdeaPad 3 ci5",
    year:"2022",
    describe :function(){//function including in an object,Objects can also contain functions (methods) that can perform actions using the object's properties. 
console.log(`This laptop is ${this.model} and it is made by ${this.make} in the year ${this.year}`);//THIs. introduces method definition within objects.

    }
};
lptp_obj.describe()
