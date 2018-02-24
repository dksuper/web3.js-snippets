const Controller = require('../../lib/controller');
const templateFacade = require('./facade');

class TemplateController extends Controller {}

module.exports = new TemplateController(templateFacade);
