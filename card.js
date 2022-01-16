let  count = 0;

function cc(card) {
switch(card){
  case 2:
  count += 1;
  break;
   case 3:
  count += 1;
  break;
   case 4:
  count += 1;
  break;
   case 5:
  count += 1;
  break;
   case 6:
  count += 1;
  break;
    case 10:
    count -= 1;
  break;
    case 'J':
    count -= 1;
  break;
    case 'Q':
    count -= 1;
  break;
    case 'k':
    count -= 1;
  break;
    case 'A':
    count -= 1;
  break;
  // case 7:
  //   count;
  // break;
  // case 8:
  //   count;
  // break;
  // case 9:
  //   count;
  // break;
}
console.log(count,card);
let hO = "Hold";
let bI = "Bid";
if (count <= 0){
  console.log(count + hO);
  return;
}
if (count > 0) {
  console.log(count + bI);
  return;
}
}

cc(2); cc(3); cc(7); cc('K'); cc('A');