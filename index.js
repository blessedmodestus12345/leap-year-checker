let year = 2022;
function isLeapYear(year){
    if(year %4===0 && year %100 !== 0 || year %400 ===0){
        return year + " is a leap year."
    }else{
        return year + " is not a leap year."
    }
}
//let result = isLeapYear(year);
console.log(isLeapYear(2020))
console.log(isLeapYear(2021))
console.log(isLeapYear(2022))
console.log(isLeapYear(2023))
console.log(isLeapYear(2024))
console.log(isLeapYear(2025))

//calculate and list the number of leapyear that have passed within a particular year range
function countLeapYearRange(startYear, endYear){
    let leapYearCount = [];
    for(let year = startYear; year <= endYear; year++){
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            leapYearCount.push(year);
        }
    }
    return leapYearCount;
    
}
const totalLeap = countLeapYearRange(2000,2026)
console.log(totalLeap)