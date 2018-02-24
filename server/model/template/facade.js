const Facade = require('../../lib/facade');
const templateSchema = require('./schema');

class TemplateFacade extends Facade {}

module.exports = new TemplateFacade('Template', templateSchema);
