// var s = 'javascriptloops';
//
// function vowelsAndConsonants(s) {
//     var vowels = 'aeiou';
//     var c = '';
//     for (var i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             console.log(s[i]);
//         } else {
//           c += s[i] + '\n';
//         }
//     }
//
//     console.log(c.trim());
// }
//
// vowelsAndConsonants(s);


function factorial(n){
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(4));
