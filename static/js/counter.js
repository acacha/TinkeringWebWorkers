var i = 0;

function timedCount() {
  i = i + 1;
  console.log('Counting: ' + i)
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();
