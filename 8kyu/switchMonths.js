// Task
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. 
// Different months have a different number of days as shown in the table below. Return the number of 
// days that are in month. There is no need for input validation: month will always be greater than 0 
// and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+


// to make this function we can see that we have three cases
// and we can start with the first easy case to quicly return the 
// number of days for the months and return 28 for February.
// then we can check for the months that have 30 
// days and finally we can return 31 for the remaining months.


function howManyDays(month){
    switch (month) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}

console.log("--- Testing howManyDays test ---");

months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (const month of months){
    const result = howManyDays(month);
    console.log(`test: ${month} -> Output: "${result}"`);
}


