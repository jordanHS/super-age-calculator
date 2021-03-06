 import $ from 'jquery'
import SuperAgeCalculator from './super-age-calculator.js'

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let d1 = parseInt($("#birthDate").val());
    let m1 = parseInt($("#birthMonth").val());
    let y1 = parseInt($("#birthYear").val());
    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();


    let calculator = new SuperAgeCalculator(d1, m1, y1, currentDay, currentMonth, currentYear);

    let currentYearDays = calculator.currentYearDays(currentDay, currentMonth);
    let adjustedBirthYearDays = calculator.adjustedBirthYearDays(d1,m1);
    let yCounter = calculator.yCounter(y1, currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = calculator.expectancyYears(yCounter);

    let mercury = calculator.mercury(d1, m1, yCounter, expectancyYears);
    let venus = calculator.venus(d1, m1, yCounter, expectancyYears);
    let earth = calculator.earth(d1, m1, yCounter, expectancyYears);
    let mars = calculator.mars(d1, m1, yCounter, expectancyYears);
    let jupiter = calculator.jupiter(d1, m1, yCounter, expectancyYears);

    $("#mercury").text(mercury);
    $("#venus").text(venus);
    $("#earth").text(earth);
    $("#mars").text(mars);
    $("#jupiter").text(jupiter);
  });
});
