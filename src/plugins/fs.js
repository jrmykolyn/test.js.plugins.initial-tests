class Fs {
  write(...args) {
    console.log('__ INSIDE `Fs#write()`');
    console.log('__', ...args);
  }
}

module.exports = Fs;
