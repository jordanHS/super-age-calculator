import SuperAgeCalculator from "../src/super-age-calculator.js";

describe('SuperAgeCalculator', function() {

  it('should test for the inputted value of d1' function() {
    let SuperAgeCalculator = new SuperAgeCalculator (1, 11, 1995, 8, 9, 2019)
    expect(SuperAgeCalculator.d1).toEqual(1);
  });

  it('should test for the inputted value of m1', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019)
    expect(SuperAgeCalculator.m1).toEqual(11);
  });

  it('should test for the inputted value of y1', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019)
    expect(SuperAgeCalculator.y1).toEqual(1995);
  });

  it('should test for the inputted value of currentDay', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019)
    expect(SuperAgeCalculator.currentDay).toEqual(8);
  });

  it('should test for inputted value of currentMonth', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019)
    expect(SuperAgeCalculator.currentMonth).toEqual(9);
  });

  it('should test for inputted value of currentYear', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019)
    expect(SuperAgeCalculator.currentYear).toEqual(2019)
  });

  it('should test for inputted value of currentYearDays', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11. 1995, 8, 9, 2019)
    let currentYearDays =  SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.currentDay SuperAgeCalculator.currentMonth);
    expect(SuperAgeCalculator.currentYearDays).toEqual(251)
  });

  it('should test for the inputted value of adjustedBirthYearDays', function() {
    let SuperAgeCalculator = new SuperAgeCalculator (1, 11, 1995, 8, 9, 2019)
    let adjustedBirthYearDays =  SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    expect(adjustedBirthYearDays).toEqual(1);
  });

  it('should test for the inputted value of yCounter', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(8, 9, 2019, 8, 10, 2020)
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    let currentYearDays = SuperAgeCalculator,currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let yCounter = SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays);
    expect(yCounter).toEqual(1);
  });

  it('should test if expectancy years returns correctly', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(8, 9, 2019, 1, 11, 1995);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator. SuperAgeCalculator.m1);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let yCounter = SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = SuperAgeCalculator.expectancyYears(yCounter).toFixed(2);
    expect(parseFloat(expectancyYears)).toEqual(55.25)
  });

  
