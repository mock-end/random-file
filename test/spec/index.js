var expect = require('chai').expect;

describe('random-file: ', function () {

  var randomFile = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomFile()).to.be.match(/^[a-z]+\.[a-z0-9]+$/);

      expect(randomFile({ length: 10 })).to.be.match(/^[a-z]{10}\.[a-z0-9]+$/);

      expect(randomFile({
        length: 10,
        extension: '.txt'
      })).to.be.match(/^[a-z]{10}\.txt$/);

      expect(randomFile({
        extensions: ['txt', 'md']
      })).to.be.match(/^[a-z]+\.((txt)|(md))$/);

      expect(randomFile({
        extensions: {
          foo: ['txt', 'md'],
          bar: ['pdf', 'png']
        }
      })).to.be.match(/^[a-z]+\.((txt)|(md)|(pdf)|(png))$/);

      expect(randomFile.bind(null, { extensions: 1 })).to.be.throw(TypeError);

      expect(randomFile({
        fileType: 'raster'
      })).to.be.match(/^[a-z]+\.[a-z]+$/);


      expect(randomFile.bind(null, { fileType: 1 })).to.be.throw(TypeError);
    }
  });
});
