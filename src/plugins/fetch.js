class Fetch {
  fetch(...args) {
    console.log('__ INSIDE `Fetch#fetch()`');
    console.log('__', ...args);
  }
}

module.exports = Fetch;
