

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

//For incrementing the count
increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

//For decrementing the count
decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

//Reset the count as "0"
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}
