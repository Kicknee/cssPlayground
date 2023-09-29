function rot13(str) {
  let newStr = [];
  let reg = /[a-z]/i;

  newStr = str.split("").map(el => {
    if(reg.test(el)){
      let temp = el.charCodeAt(0);
      if(temp >= 65 && temp <= 90 && temp+13 > 90){
        return String.fromCharCode(64+13-(90-temp));
      }else if(temp >= 97 && temp <= 122 && temp+13 > 122){
        return String.fromCharCode(96+13-(122-temp));
    }else{
      return String.fromCharCode(temp+13)
    }
    }else {
      return el;
    }
  });
  console.log(newStr);
}

rot13("SERR PBQR PNZC");