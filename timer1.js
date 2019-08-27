const timeToBeep = process.argv.slice(2);

for (let i = 0; i < timeToBeep.length; i++) {
  if (timeToBeep[i] === NaN || timeToBeep[i] < 0) {
    i++;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeToBeep[i] * 1000);
  }

}
