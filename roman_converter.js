function convertToRoman(num) {
    if(num > 9999) return "Error, your input exceeds the allowed value!";
    let str_num = num.toString().split("");
    
    let rom_ver = [], size = str_num.length, cnt = 0, digit = null;
  
    while(size !=0){
    switch(str_num[cnt]){
      case "0":
        digit = parseInt(str_num[cnt], 10);
        size--;
        cnt++;
        break;
      case "1":
      case "2":
      case "3":
        digit = parseInt(str_num[cnt], 10);
        for(let i=0; i<digit; i++){
          rom_ver.push(size==4 ? "M" : size==3 ? "C" : size==2 ? "X" : size==1 ? "I" : null);
        }
        size--;
        cnt++;
        break;
      case "4":
         digit = parseInt(str_num[cnt], 10);
        rom_ver.push(size==4 ? "I̅V̅" : size==3 ? "CD" : size==2 ? "XL" : size==1 ? "IV" : null);
        
        size--;
        cnt++;
        break;
      case "5":
        digit = parseInt(str_num[cnt], 10);
        rom_ver.push(size==4 ? "V̅" : size==3 ? "D" : size==2 ? "L" : size==1 ? "V" : null);
        size--;
        cnt++;
        break;
        case "6":
        case "7":
        case "8":
          digit = parseInt(str_num[cnt], 10)%3+1;
          rom_ver.push(size==4 ? "V̅" : size==3 ? "D" : size==2 ? "L" : size==1 ? "V" : null);
          for(let i=0; i<digit; i++){
          rom_ver.push(size==4 ? "I̅" : size==3 ? "C" : size==2 ? "X" : size==1 ? "I" : null);
        }
        size--;
        cnt++;
        break;
        case "9":
          digit = parseInt(str_num[cnt], 10);
          rom_ver.push(size==4 ? "I̅X̅" : size==3 ? "CM" : size==2 ? "XC" : size==1 ? "IX" : null);
        size--;
        cnt++;
        break;
    }
    }
   return rom_ver.join("");
  }
  

  function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function romanize2(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter a number: ', input => {
      
    console.log(`Roman number: ${convertToRoman(input)}`);
    readline.close();
  });
