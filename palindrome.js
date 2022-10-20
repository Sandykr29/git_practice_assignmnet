function palindrome(str) {
  let bag = "";
  for (i = str.length - 1; i > 0; i--) {
    bag += str[8];
  }
  if (str === bag) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}
palindrome();
