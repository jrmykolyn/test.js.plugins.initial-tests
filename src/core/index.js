class Core {
  constructor(opts = {}) {
    const { plugins = [] } = opts;

    this.plugins = plugins.map((plugin) => {
      if (typeof plugin === 'function') {
        return new plugin(this, opts);
      } else if (typeof plugin === 'object') {
        const { plugin: fn, opts: pluginOpts } = plugin;
        return new fn(this, pluginOpts);
      } else {
        throw new Error('Plugin must be one of: function; object.');
      }
    });
  }

  getPluginsByMethod(method) {
    return this.plugins.filter((plugin) => typeof plugin[method] === 'function');
  }

  cache(...args) {
    const method = 'cache';
    this.getPluginsByMethod(method)
      .forEach((plugin) => plugin[method](...args));
  }

  fetch(...args) {
    const method = 'fetch';
    this.getPluginsByMethod(method)
      .forEach((plugin) => plugin[method](...args));
  }

  write(...args) {
    const method = 'write';
    this.getPluginsByMethod(method)
      .forEach((plugin) => plugin[method](...args));
  }
}

module.exports = Core;
