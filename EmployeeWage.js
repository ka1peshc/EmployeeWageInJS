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

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while( totalHrs <= MAX_WORKING_HR && totalWorkingdays < NO_OF_WORKING_DAYS){
    totalWorkingdays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalHrs += getWorkingHour(empCheck);
    empHrs = getWorkingHour(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalHrs);
console.log(" Total days "+totalWorkingdays+" Hours worked "+totalHrs+" Emp wage: "+empWage);
