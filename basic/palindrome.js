function isPalindrome1(str) {
  // remove special characters and spaces
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // reverse the string
  let reversed = str.split("").reverse().join("");
  // compare the original string with the reversed string
  return str === reversed;
}

function isPalindrome2(str) {
  const formattedString = removeNonAlphanumeric(str.toLowerCase());
  const reversedString = reverseString(formattedString);

  return formattedString === reversedString;
}

function removeNonAlphanumeric(str) {
  let formattedString = "";
  for (const element of str) {
    const char = element;

    if (isAlphaNumeric(char)) {
      formattedString += char;
    }
  }

  return formattedString.toLowerCase();
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // numeric (0-9)
    (code >= 97 && code <= 122) // lowercase alphabets (a-z)
  );
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(isPalindrome1("madam")); // true
console.log(isPalindrome2("madam")); // true
