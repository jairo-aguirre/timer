// process.stdout.write('\x07');

const input = process.argv;

if (input.length > 2) {
  input.forEach((element, index) => {
    if ((index > 1) && (Number(element) !== NaN) && (Number(element) > 0)) {
      setTimeout(() => {
        process.stdout.write('beep!\n');
      }, element + '000');
    }
  })
}