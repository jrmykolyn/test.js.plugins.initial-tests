class Stdout {
  write(...args) {
    console.log('__ INSIDE `Stdout#write()`');
    console.log('__', ...args);
  }
}

module.exports = Stdout;
