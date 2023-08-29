function add(a, b){
    let first = a.length > b.length || a.length == b.length ? a.split("") : b.split("");
    let second = a.length > b.length || a.length == b.length ? b.split("") : a.split("");
    let result = new Array(first.length);
    result.fill(0);
    let sec_last = second.length-1;
  
    for(let i=first.length-1; i >= 0 ; i--){
      if(second[sec_last]){
        result[i]+= +first[i] + (+second[sec_last]);
        if(result[i] >= 10 && i != 0){
            result[i] = result[i]%10;
            result[i-1]+= 1;
          }
        }else{
          result[i] += +first[i];
          }
          sec_last--;
        }
    
    return result.join("");
  }
  
//   add("3456765454543", "4356543757567536354");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter first value: ", input1 => {
    readline.question("Enter second value: ", input2 => {
        console.log("Result: ", add(input1, input2));
    readline.close();
    });
});