//UC1- IF ELSE CONDITION 
{
    const IsABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IsABSENT){
        console.log("Employee is ABSENT. Exiting program");
        
    }else{
        console.log("PRESENT");
    }
}

//UC2 SWITCH STATEMENT
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_WORKING_HR = 160;
function getWorkingHour(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}


let totalHrs = 0;
let totalWorkingdays=0;
let empDailyWageArr = new Array();
let empDailyHrsMap =  new Map();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while( totalHrs <= MAX_WORKING_HR && totalWorkingdays < NO_OF_WORKING_DAYS){
    totalWorkingdays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalHrs += getWorkingHour(empCheck);
    empHrs = getWorkingHour(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingdays,empHrs);
}
let empWage = calcDailyWage(totalHrs);
console.log("UC6 - Total days "+totalWorkingdays+" Hours worked "+totalHrs+" Emp wage: "+empWage);

//Array helper function 
// UC7A CalcTotalWage using array forEach traversal or reduce method
let totalWage = 0;
function sum(dailyWage){
    totalWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total days "+totalWorkingdays+" Hours worked "+totalHrs+" Emp wage: "+totalWage);

function totalWages(totalWages,DailyWage){
    return totalWages + DailyWage;
}
console.log("UC7A - Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

//UC 7B show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDailyWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC7B Daily wage map");
console.log(mapDayWithWageArr);

//UC 7C Show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter when Fulltime wage earned");
console.log(fullDayWageArr);

//UC 7D fIND THE FIREST OCCURRENCE WHEN FULL TIME WAGE WAS EARNED USING FIND FUNCTION
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D first time fulltime wage was earned on day: "+mapDayWithWageArr.find(findFullTimeWage));

//UC 7E Check if Every Element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E check if all element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));

//UC 7F Check if there is any Part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F check if any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0 ) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G number of days emp worked "+empDailyWageArr.reduce(totalDaysWorked,0));

// //UC 9 Arrow function
// const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;

// let count = 0;
// let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
// let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0)
// console.log("UC 9A Employee wage with arrow: Total Hours: "+totalHrs+" Total Wages "+totalSalary);

// let nonWorkingDays = new Array();
// let partWorkingDays = new Array();
// let fullWorkingDays = new Array();

// empDailyHrsMap.forEach(  (value, key, map) => {
//     if ( value == 8 ) fullWorkingDays.push(key);
//     else if ( value == 4 ) partWorkingDays.push(key);
//     else nonWorkingDays.push(key);
// });

// console.log("Non Working Days "+nonWorkingDays);
// console.log("Part Working Days "+partWorkingDays);
// console.log("Full Working Days "+fullWorkingDays);


//UC 10 Object Creation
let totalEmpHrs = 0;
totalWorkingdays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_WORKING_HR && totalWorkingdays <= NO_OF_WORKING_DAYS){
    totalWorkingdays++;
    empCheck = Math.floor((Math.random()*10)%3);
    empHrs = getWorkingHour(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingdays,
        dailyHours:empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString(){
            return '\nDay '+this.dayNum+' => working Hours is '+this.dailyHours+' And Wage Earned = '+this.dailyWage
        }
    });
}
console.log("UC 10 Showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);

//UC 11 Object operation using Arrow function
let totalWagess = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let TotalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours>0)
                .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);
console.log("UC 11A Total hours "+TotalHours+" Total Wages : "+totalWagess);

console.log("UC 11B Loggin full working days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).
forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4).
forEach(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C part time working string "+partWorkingDayStrArr);

let nonworkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
.forEach(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11D No working days "+nonworkingDayStrArr);

//UC11 Employee payroll class
class EmployeePayrollData {
    //property
    id;
    salary;

    //constructor
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter
    get name() { return this._name;}
    set name(name) {this._name = name;}

    //method
    toString(){
        return "id ="+this.id+", name = "+this.name+", salary = "+this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Kalpesh",50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());