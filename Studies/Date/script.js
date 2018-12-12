//  Return the day name based on the date passed to the function
function getDayName(dateString){
  let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = dayNames[new Date(dateString).getUTCDay()];
  return dayName;
}

//  Defining some ramdom dates
let dates = ['10/11/2009', '11/10/2010'];

//  Prints all date day names
for(date in dates){
  console.log(getDayName(dates[date]))
}
