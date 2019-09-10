import SuperAgeCalculator from "../src/super-age-calculator.js";

describe('SuperAgeCalculator', function() {

  it('should test for the inputted value of d1', function() {
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
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019)
    let currentYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
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
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let yCounter = SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays);
    expect(yCounter).toEqual(1);
  });

  it('should test if expectancy years returns correctly', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(8, 9, 2019, 1, 11, 1995);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator. SuperAgeCalculator.m1);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let yCounter = SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = SuperAgeCalculator.expectancyYears(yCounter).toFixed(2);
    expect(parseFloat(expectancyYears)).toEqual(56.25)
  });

  it('should test for age on Mercury and years left to live on Mercury', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    let yCounter = parseFloat(SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let mercury = SuperAgeCalculator.mercury(SuperAgeCalculator.d1, SuperAgeCalculator.m1, yCounter, expectancyYears);
    expect(mercury).toEqual('You are 97.08 years old and have and have 234.38 years left on Mercury');
  });

  it('should test for age on Venus and years left to live on Venus', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    let yCounter = parseFloat(SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let venus = SuperAgeCalculator.venus(SuperAgeCalculator.d1, SuperAgeCalculator.m1, yCounter, expectancyYears);
    expect(venus).toEqual('You are 38.4 years old and have and have 42.34 years left on Venus');
  });

  it('should test for age on Earth and years left to live on Earth', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    let yCounter = parseFloat(SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let earth = SuperAgeCalculator.earth(SuperAgeCalculator.d1, SuperAgeCalculator.m1, yCounter, expectancyYears);
    expect(earth).toEqual('You are 23.8 years old and have and have 56.25 years left on Earth');
  });

  it('should test for age on Mars and years left to live on Mars', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    let yCounter = parseFloat(SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let mercury = SuperAgeCalculator.mars(SuperAgeCalculator.d1, SuperAgeCalculator.m1, yCounter, expectancyYears);
    expect(mars).toEqual('You are 12.66 years old and have and have 29.92 years left on Mars');
  });

  it('should test for age on Jupiter and years left to live on Jupiter', function() {
    let SuperAgeCalculator = new SuperAgeCalculator(1, 11, 1995, 8, 9, 2019);
    let currentYearDays = SuperAgeCalculator.currentYearDays(SuperAgeCalculator.currentDay, SuperAgeCalculator.currentMonth);
    let adjustedBirthYearDays = SuperAgeCalculator.adjustedBirthYearDays(SuperAgeCalculator.d1, SuperAgeCalculator.m1);
    let yCounter = parseFloat(SuperAgeCalculator.yCounter(SuperAgeCalculator.y1, SuperAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let mars = SuperAgeCalculator.jupiter(SuperAgeCalculator.d1, SuperAgeCalculator.m1, yCounter, expectancyYears);
    expect(jupiter).toEqual('You are 2.01 years old and have and have 4.74 years left on Jupiter');
  });
});
