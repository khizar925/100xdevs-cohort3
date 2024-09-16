let counter = 0;

function incrementCounter() {
  console.log(counter);
  counter++;
  setTimeout(incrementCounter, 1000); // Call the function recursively every 1 second
}

incrementCounter();
