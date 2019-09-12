 import $ from 'jquery'
import SuperAgeCalculator from './super-age-calculator.js'

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let calculator= new SuperAgeCalculator();

    let d1 = parseInt($("#birthDate").val());
    let m1 = parseInt($("#birthMonth").val());
    let y1 = parseInt($("#birthYear").val());
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();


    SuperAgeCalculator = new SuperAgeCalculator(d1, m1, y1, currentDay, currentMonth, currentYear);

    let currentYearDays = calculator.currentYearDays(currentDay, currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(d1,m1);
    let yCounter = calculator.yCounter(y1, currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = calculator.expectancyYears(yCounter);

    let mercury = SuperAgeCalculator(d1, m1, yCounter, expectancyYears);
    let venus = SuperAgeCalculator(d1, m1, yCounter, expectancyYears);
    let earth = SuperAgeCalculator(d1, m1, yCounter, expectancyYears);
    let mars = SuperAgeCalculator(d1, m1, yCounter, expectancyYears);
    let jupiter = SuperAgeCalculator(d1, m1, yCounter, expectancyYears);

    $("#mercury").text(mercury);
    $("#venus").text(venus);
    $("#earth").text(earth);
    $("#mars").text(mars);
    $("#jupiter").text(jupiter);
  });
});
