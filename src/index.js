const Core = require('./core');
const plugins = require('./plugins');

const core = new Core({ plugins: Object.keys(plugins).map((k) => plugins[k]) });

core.write('Hello, world!');
core.fetch('http://example.com/path/to/resource');
core.cache('key', 'value');
