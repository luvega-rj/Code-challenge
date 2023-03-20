# Code-challenge
# JavaScript Letter Grade Converter


## Description
This JavaScript code allows the user to input a student's mark between 0 and 100.The code returns the letter grade that corresponds to the mark.

## Usage
1. To use this code, simply copy and paste it into your text editor or code editor of choice.
2. Save the file with a .js file.
3. Run the file in your browser/code editor.
4. When prompted, enter the student's mark between 0 and 100.
5. The code will return the letter grade that corresponds to the mark.

Note: This code assumes that the standard grading scale is being used, where an A is 80 or higher, a B is between 60 and 79, a C is between 50 and 59, a D is between 40 and 49, and an E is below 40.

## Example
```
Enter the student's mark between 0 and 100: 91
The student's letter grade is A
 
### License

This program is licensed.



# Speed Detector

This function is a simple speed detector that takes in a `speed` parameter and compares it to a pre-defined `speedLimit` of 70 km/h. 
If the `speed` is within the limit, the function logs "Ok" to the console. If it exceeds the limit, it calculates the `demeritPoints` based on the difference between the `speed` and `speedLimit`, divided by a `pointsPerDemerit` constant of 5 km/h per demerit point.

The `demeritPoints` value is then logged to the console using a template literal, in the format "Points: x", where x is the calculated `demeritPoints`.

If the `demeritPoints` value is equal to or greater than 12, it logs "License suspended" to the console.

## Usage

To use this function, simply call the `speedDetector()` function and pass in a numeric `speed` parameter representing the driver's current speed. 

Example usage:

```javascript
speedDetector(80); // Output: Points: 2
```

In this example, the function is called with a `speed` argument of 80 km/h, which exceeds the `speedLimit` of 70 km/h by 10 km/h. Based on the `pointsPerDemerit` constant of 5 km/h per point, this results in a `demeritPoints` value of 2, which is then logged to the console.




## Salary Calculator

This is a JavaScript program that calculates an employee's gross salary, payee (tax), NHIF and NSSF deductions and net salary based on their basic salary and benefits.


### Usage

1. Enter the employee's basic salary and benefits when prompted by the program
2. The program will calculate the employee's gross salary, tax rate, payee (tax), NHIF and NSSF rates, and deductions
3. The program will output the results in the console, including the employee's gross salary, payee, NHIF deduction, NSSF deduction, and net salary.


### License

This program is licensed.