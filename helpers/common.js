var _ = require('lodash');

module.exports = function (paper) {
    
    paper.handlebars.registerHelper('partial', function (name, options) {
        paper.handlebars.registerPartial(name, options.fn);
    });

    paper.handlebars.registerHelper('json', function (data) {
        return JSON.stringify(data);
    });

    paper.handlebars.registerHelper('toLowerCase', function(string) {
      return string.toLowerCase();
    });

    paper.handlebars.registerHelper('pluck', function(collection, path) {
        return _.pluck(collection, path);
    });


    paper.handlebars.registerHelper('pick', function(object, predicate) {
        return _.pick.apply(null, arguments);
    });
};
