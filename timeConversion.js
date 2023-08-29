function timeConversion(s) {
  let tim = s.split(/(?=:)|(?=AM|PM)/);
  if(tim.indexOf("12") != -1 && tim.indexOf("AM") != -1){
      tim[0] = "00";
  }else if(tim.indexOf("12") == -1 && tim.indexOf("PM") != -1){
      tim[0] = (parseInt(tim[0])+12).toString();
  }
  
  return tim.slice(0,3).join("");;
}

console.log(timeConversion("12:43:45AM"));

function checkCashRegister(price, cash, cid) {
  var change = +(cash - price).toFixed(2);
  console.log(change);
  let obj = {
    status: "OPEN",
    change: [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
  };
  
  if(change*100 == cid.reduce((acc, el) => acc+(el[1]*100),0)){
    return Object.assign({}, {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});
  }
  
  while(change != 0){
  switch(true){

    case cid[8][1] > 0 && change >= 100:
      cid[8][1]-= 100;
      obj.change[8][1]+= 100;
      change-= 100;
      change= change.toFixed(2);
      break;
    case cid[7][1] > 0 && change >= 20:
      cid[7][1]-= 20;
      obj.change[7][1]+= 20;
      change-= 20;
      change= change.toFixed(2);
      break;
    case cid[6][1] > 0 && change >= 10:
      cid[6][1]-= 10;
      obj.change[6][1]+= 10;
      change-= 10;
      change= change.toFixed(2);
      break;
    case cid[5][1] > 0 && change >= 5:
      cid[5][1]-= 5;
      obj.change[5][1]+= 5;
      change-= 5;
      change= change.toFixed(2);
      break;
    case cid[4][1] > 0 && change >= 1:
      cid[4][1]-= 1;
      obj.change[4][1]+= 1;
      change-= 1;
      change= change.toFixed(2);
      break;
    case cid[3][1] > 0 && change >= 0.25:
      cid[3][1]-= 0.25;
      obj.change[3][1]+= 0.25;
      change-= 0.25;
      change= change.toFixed(2);
      break;
    case cid[2][1] > 0 && change >= 0.1:
      cid[2][1]-= 0.1;
      obj.change[2][1]+= 0.1;
      change-= 0.1;
      change= change.toFixed(2);
      break;
    case cid[1][1] > 0 && change >= 0.25:
      cid[1][1]-= 0.25;
      obj.change[1][1]+= 0.25;
      change-= 0.25;
      change= change.toFixed(2);
      break;
    case cid[0][1] > 0 && change >= 0.01:
      cid[0][1]-= 0.01;
      obj.change[0][1]+= 0.01;
      change-= 0.01;
      change= change.toFixed(2);
      break;
    default:
      return Object.assign({}, {status: "INSUFFICIENT_FUNDS", change: []});
      break;

  }
  }
  let arr = obj.change.filter(el => el[1] != 0).reverse();
  
  return {status: "OPEN", change: [...arr]};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
