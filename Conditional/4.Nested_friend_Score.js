let score = prompt("Enter your score");
let friendScore = prompt("Enter your friend Score: ");

if (score > 80) {
  if (friendScore > 80) {
    console.log("Lunch");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Message Unseen");
  } else {
    console.log("Block Him");
  }
} else {
  console.log("go to home and sleep and act sad");
}
