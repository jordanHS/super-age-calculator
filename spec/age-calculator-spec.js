import SuperAgeCalculator from "../src/super-age-calculator.js";

describe('SuperAgeCalculator', function() {

  it('should test for the inputted value of d1', function() {
    let calculator = new SuperAgeCalculator (1, 11, 1995, 1, 9, 2019)
    expect(calculator.d1).toEqual(1);
  });

  it('should test for the inputted value of m1', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019)
    expect(calculator.m1).toEqual(11);
  });

  it('should test for the inputted value of y1', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019)
    expect(calculator.y1).toEqual(1995);
  });

  it('should test for the inputted value of currentDay', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019)
    expect(calculator.currentDay).toEqual(15);
  });

  it('should test for inputted value of currentMonth', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019)
    expect(calculator.currentMonth).toEqual(9);
  });

  it('should test for inputted value of currentYear', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019)
    expect(calculator.currentYear).toEqual(2019)
  });

  it('should test for the inputted value of adjustedBirthYearDays', function() {
    let calculator = new SuperAgeCalculator (31, 10, 1995, 15, 9, 2019)
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    expect(adjustedBirthYearDays).toEqual(61);
  });


  it('should test for inputted value of currentYearDays', function() {
   let calculator = new SuperAgeCalculator(31, 10, 1995, 15, 9, 2019)
   let currentYearDays = calculator.adjustedBirthYearDays(calculator.currentDay, calculator.currentMonth);
   expect(currentYearDays).toEqual(107);
 });

   it('should test for the inputted value of yCounter', function() {
   let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019)
   let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
   let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
   let yCounter = calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays);
   expect(yCounter).toEqual(23.953424657534246);
 });

  it('should test if expectancyYears returns correctly', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
    let yCounter = calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = calculator.expectancyYears(yCounter).toFixed(2);
    expect(parseFloat(expectancyYears)).toEqual(56.05)
  });

  it('should test for age on Mercury and years left to live on Mercury', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 15, 9, 2019);
    let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    let yCounter = parseFloat(calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = calculator.expectancyYears(yCounter);
    let mercury = calculator.mercury(calculator.d1, calculator.m1, yCounter, expectancyYears);
    expect(mercury).toEqual(`You are 99.81 years old and have 233.53 years left to live on Mercury.`);
  });

  it('should test for age on Venus and years left to live on Venus', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 10, 9, 2019);
    let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    let yCounter = parseFloat(calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = calculator.expectancyYears(yCounter);
    let venus = calculator.venus(calculator.d1, calculator.m1, yCounter, expectancyYears);
    expect(venus).toEqual('You are 38.61 years old and have 90.42 years left to live on Venus.');
  });

   it('should test for age on Earth and years left to live on Earth', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 10, 9, 2019);
    let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    let yCounter = parseFloat(calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = calculator.expectancyYears(yCounter);
    let earth = calculator.earth(calculator.d1, calculator.m1, yCounter, expectancyYears);
    expect(earth).toEqual('You are 23.94 years old and have 56.06 years left to live on Earth.');
  });

  it('should test for age on Mars and years left to live on Mars', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 10, 9, 2019);
    let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    let yCounter = parseFloat(calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = calculator.expectancyYears(yCounter);
    let mars = calculator.mars(calculator.d1, calculator.m1, yCounter, expectancyYears);
    expect(mars).toEqual('You are 12.73 years old and have 29.82 years left to live on Mars.');
  });

  it('should test for age on Jupiter and years left to live on Jupiter', function() {
    let calculator = new SuperAgeCalculator(1, 11, 1995, 10, 9, 2019);
    let currentYearDays = calculator.currentYearDays(calculator.currentDay, calculator.currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(calculator.d1, calculator.m1);
    let yCounter = parseFloat(calculator.yCounter(calculator.y1, calculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = calculator.expectancyYears(yCounter);
    let jupiter = calculator.jupiter(calculator.d1, calculator.m1, yCounter, expectancyYears);
    expect(jupiter).toEqual('You are 2.02 years old and have 4.73 years left to live on Jupiter.');
  });
});
