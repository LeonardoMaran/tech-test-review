const ElementMock = require('./ElementMock')

class DocumentMock {
  getElementById(){
    return new ElementMock
  }

}

module.exports = DocumentMock;
