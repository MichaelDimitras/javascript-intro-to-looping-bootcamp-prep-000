function forLoop(arr){
  for (var i = 0; i < 25; i++){
    // if (i === 1) arr = [...arr, `I am 1 strange loop.`];
    // else arr = [...arr, `I am ${i + 1} strange loops.`];
  }
  return;
}


function whileLoop(numTimes){
  while(numTimes > 0){
    console.log(numTimes);
    numTimes--;
  }
  return "done";
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr){
  do {
    arr.pop()
  } while ( arr.length > 0 && maybeTrue());
  return
}
