//STEP 1
// function daysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }
// function GFG_Fun() {
//     let date = new Date();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     console.log("Number of days in " + month
//         + "th month of the year " + year
//         + " is " + daysInMonth(month, year));
// }
// GFG_Fun()

//STEP 2
// var month_name = function(dt){
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[dt.getMonth()];
//     };
//     console.log("Month name is: ",month_name(new Date("05/20/2024")));

//STEP 3
// var date = new Date();
// var dayOfWeek = date.getDay();
// if ((dayOfWeek === 6) || (dayOfWeek  === 0)){
//     console.log("its a weekend");
// }else {
//     console.log("its not a weekend");
// }

//STEP 4
// let d = new Date();
// d.setDate(d.getDate() - 1);
// console.log("Yesterday's day was - ",d.toDateString());

//STEP 5
// let d = new Date();
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let i = d.getDay();
// console.log(daysOfWeek[i].charAt(0));

