
var longestPalindrome = function(s) {
  function isPalindrome (string) {
    for(let n = 0; n < Math.ceil(string.length/2); n++){
      if(string[n] !== string[string.length-n-1] || string.length ===1){
        return false;
      }
    }
    return true;
  };

  let current = s;

  for(let n = 0; n < s.length; n++){
    let i = n;
    while(i > 0){
      if(isPalindrome(current)){
        return current
      }else{
        current = current.substring(i, current.length);
        i--;
      }
    }
  }
}
console.log(longestPalindrome('babad'));