const beepKeys = ['b', 1, 2, 3, 4, 5, 6, 7, 8, 9];

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  const beepKey = beepKeys[key];
  if (beepKey > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, beepKeys[key] * 1000);
    console.log(`setting timer for ${beepKeys[key]} seconds`);
  }
});
