const expect = require("chai").expect;
const request = require("request");

describe("Sum Calculator API", function () {
  const baseUrl = "http://localhost:3000";

  it("returns status 200 to check if api works", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct sum for valid numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15");
      done();
    });
  });

  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error for non-numeric input", function (done) {
    request.get(
      `${baseUrl}/add?a=hello&b=world`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        done();
      }
    );
  });
});
    
// Subtract tests
describe("Subtract Calculator API", function () {
  const baseUrl = "http://localhost:3000";

  // Test valid numbers
  it("should return correct difference for valid numbers", function (done) {
    request.get(
      `${baseUrl}/subtract?a=10&b=5`,
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("5");
        done();
      }
    );
  });

  // Test negative numbers
  it("should return correct difference for negative numbers", function (done) {
    request.get(
      `${baseUrl}/subtract?a=-7&b=-3`,
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("-4");
        done();
      }
    );
  });

  // Test decimal numbers
  it("should return correct difference for decimal numbers", function (done) {
    request.get(
      `${baseUrl}/subtract?a=5.5&b=2.2`,
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.include("3.3");
        done();
      }
    );
  });

  // Test missing parameters
  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/subtract?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  // Test non-numeric input
  it("should return error for non-numeric input", function (done) {
    request.get(
      `${baseUrl}/subtract?a=hello&b=world`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        done();
      }
    );
  });
});
