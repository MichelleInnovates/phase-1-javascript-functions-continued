// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let activity = 'bathe my dog';
console.log(saturdayFun(myActivity)); 

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

let myActivity = 'work from home';
console.log(mondayWork(myActivity));


function wrapAdjective(highlight = '*') {
  return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
  }
}




