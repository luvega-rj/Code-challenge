let basicSalary = parseInt(prompt("Enter Basic Salary: "));
let benefits = parseInt(prompt("Enter Benefits: "));

// Calculate gross salary
let grossSalary = basicSalary + benefits;

// Get tax rate from KRA website
let taxRate = 0;
if(grossSalary < 12298){
  taxRate = 0;
} else if(grossSalary >= 12298 && grossSalary < 23885){
  taxRate = 10/100;
} else if(grossSalary >= 23885 && grossSalary < 35472){
  taxRate = 15/100;
} else if(grossSalary >= 35472 && grossSalary < 47059){
  taxRate = 20/100;
} else if(grossSalary >= 47059 && grossSalary < 58646){
  taxRate = 25/100;
} else{
  taxRate = 30/100;
}

// Calculate payee (tax)
let payee = grossSalary * taxRate;

// Get NHIF and NSSF rates from website
let nhifRate = 0;
let nssfRate = 0;
if(grossSalary <= 5999){
  nhifRate = 150;
  nssfRate = 0.06;
} else if(grossSalary >= 6000 && grossSalary <= 7999){
  nhifRate = 300;
  nssfRate = 0.06;
} else if(grossSalary >= 8000 && grossSalary <= 11999){
  nhifRate = 400;
  nssfRate = 0.06;
} else if(grossSalary >= 12000 && grossSalary <= 14999){
  nhifRate = 500;
  nssfRate = 0.06;
} else if(grossSalary >= 15000 && grossSalary <= 19999){
  nhifRate = 600;
  nssfRate = 0.06;
} else if(grossSalary >= 20000 && grossSalary <= 24999){
  nhifRate = 750;
  nssfRate = 0.06;
} else if(grossSalary >= 25000 && grossSalary <= 29999){
  nhifRate = 850;
  nssfRate = 0.06;
} else if(grossSalary >= 30000 && grossSalary <= 34999){
  nhifRate = 900;
  nssfRate = 0.06;
} else if(grossSalary >= 35000 && grossSalary <= 39999){
  nhifRate = 950;
  nssfRate = 0.06;
} else if(grossSalary >= 40000 && grossSalary <= 44999){
  nhifRate = 1000;
  nssfRate = 0.06;
} else if(grossSalary >= 45000 && grossSalary <= 49999){
  nhifRate = 1100;
  nssfRate = 0.06;
} else if(grossSalary >= 50000 && grossSalary <= 59999){
  nhifRate = 1200;
  nssfRate = 0.06;
} else if(grossSalary >= 60000 && grossSalary <= 69999){
  nhifRate = 1300;
  nssfRate = 0.06;
} else if(grossSalary >= 70000 && grossSalary <= 79999){
  nhifRate = 1400;
  nssfRate = 0.06;
} else if(grossSalary >= 80000 && grossSalary <= 89999){
  nhifRate = 1500;
  nssfRate = 0.06;
} else if(grossSalary >= 90000 && grossSalary <= 99999){
  nhifRate = 1600;
  nssfRate = 0.06;
} else{
  nhifRate = 1700;
  nssfRate = 0.06;
}

// Calculate NHIF and NSSF deductions
let nhifDeduction = nhifRate;
let nssfDeduction = grossSalary * nssfRate;

// Calculate net salary
let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

// Output results
console.log("Gross Salary: KES " + grossSalary);
console.log("Payee (Tax): KES " + payee);
console.log("NHIF Deduction: KES " + nhifDeduction);
console.log("NSSF Deduction: KES " + nssfDeduction);
console.log("Net Salary: KES " + netSalary);