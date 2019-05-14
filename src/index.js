const Core = require('./core');
const plugins = require('./plugins');

const core = new Core({ plugins: Object.keys(plugins).map((k) => plugins[k]) });

core.write('Hello, world!');