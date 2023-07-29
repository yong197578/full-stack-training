function isLeapYear(year){
    if(year %4 === 0){
        if(year % 100 ===0 ){
            if(year %400 === 0){
                return "leap year"
            }
            return "not leap year"
        }
        return "leap year"
    }else {
        return "not leap year"
    }

}
let leapYear = isLeapYear(2000);
let leapYear2 = isLeapYear(1998);
console.log(leapYear)
console.log(leapYear2)