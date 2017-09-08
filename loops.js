function forLoop(arr){
  for (var i = 0; i < 25; i++){
    if (i === 1) arr = [...arr, `I am 1 strange loop.`];
    else arr = [...arr, `I am ${i+1} strange loops.`];
}
