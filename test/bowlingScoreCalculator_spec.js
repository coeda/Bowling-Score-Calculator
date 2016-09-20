const Chai = require('chai');
const Expect = Chai.expect;
const bowlingScoreCalculator = require('../bowlingScoreCalculator.js');
const bowlingScoreModule = bowlingScoreCalculatorModule();

describe('bowlingScoreCalculator', () => {
  it('should exist', () => {
    Expect(bowlingScoreModule).to.not.be.undefined;
    Expect(bowlingScoreModule)
  })
})