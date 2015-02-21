yamlValidate = require('../');
chai = require('chai');
chai.use(require("chai-as-promised"));
chai.should();

describe('validation', function() {
    it('validates a file', function() {
        return yamlValidate("test/fixtures/valid.yaml")
        .should.eventually.be.fulfilled;
    });

    it('catches an invalid yaml file', function() {
        return yamlValidate("test/fixtures/invalid.yaml")
        .should.eventually.be.rejected;
    });

    it('catches an invalid yaml file in a glob', function() {
        return yamlValidate("test/fixtures/*.yaml")
        .should.eventually.be.rejected;
    });
});
