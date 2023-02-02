const wordInput = document.querySelector("#wordInput");
const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");

checkButton.addEventListener("click", function() {
  const word = wordInput.value;
  const isPalindrome = checkPalindrome(word);

  if (isPalindrome) {
    result.innerHTML = `"${word}" is a palindrome.`;
  } else {
    result.innerHTML = `"${word}" is not a palindrome.`;
  }
});

function checkPalindrome(word) {
  const reversedWord = word
    .split("")
    .reverse()
    .join("");

  return word === reversedWord;
}
