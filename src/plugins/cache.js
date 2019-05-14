class Cache {
  constructor() {
    this.__CACHE__ = {};
  }

  cache(key, value) {
    this.__CACHE__[key] = value;
    console.log('__ INSIDE `Cache#cache()`');
    console.log('__', this.__CACHE__);
  }
}

module.exports = Cache;
