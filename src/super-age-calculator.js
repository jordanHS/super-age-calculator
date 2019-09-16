export default class SuperAgeCalculator {
  constructor (d1, m1, y1, currentDay, currentMonth, currentYear) {
    this.d1 = d1;
    this.m1 = m1;
    this.y1 = y1;
    this.currentDay = currentDay;
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
  }

  adjustedBirthYearDays(d1, m1) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0;
    for (let i = (m1 - 1); i < month.length; i++) {
      days += month[i];
    }
    return days - d1;
  }

  currentYearDays(currentDay, currentMonth) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;
    for (let i = 0; i < currentMonth; i++) {
      days += month[i];
    }
    return days + currentDay;
  }

   yCounter(y1, currentYear, currentYearDays, adjustedBirthYearDays) {
    let adjustedBirthYear = y1 + 1;
    let ageYears = currentYear - adjustedBirthYear;
    let addDays = currentYearDays + adjustedBirthYearDays;
    let partialYear = addDays / 365;
    return ageYears + partialYear;
  }

  expectancyYears(yCounter) {
    const l1 = 80;
    if (l1 > yCounter) {
      return l1 - yCounter;
    }
    else {
      return yCounter - l1;
    }
  }

 mercury(d1, m1, yCounter, expectancyYears) {
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
      return "Date not real";
  }
  else if (80 > yCounter) {
    return `You are ${(yCounter / 0.24).toFixed(2)} years old and have ${(expectancyYears / 0.24).toFixed(2)} years left to live on Mercury.`;
    }
    else {
      return `You are ${(yCounter / 0.24).toFixed(2)} years old and have lived ${(expectancyYears / 0.24).toFixed(2)} years past your expectancy age on Mercury.`;
    }
  }

venus(d1, m1, yCounter, expectancyYears) {
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
      return "Date not real";
    }
  else if (80 > yCounter) {
    return `You are ${(yCounter / 0.62).toFixed(2)} years old and have ${(expectancyYears / 0.62).toFixed(2)} years left to live on Venus.`;
    }
    else {
      return `You are ${(yCounter / 0.62).toFixed(2)} years old and have lived ${(expectancyYears / 0.62).toFixed(2)} years past your expectancy age on Venus.`;
      }
    }

  earth(d1, m1, yCounter, expectancyYears) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
    }
    else if (80 > yCounter) {
      return `You are ${(yCounter / 1).toFixed(2)} years old and have ${(expectancyYears / 1).toFixed(2)} years left to live on Earth.`;
      }
      else {
        return `You are ${(yCounter / 1).toFixed(2)} years old and have lived ${(expectancyYears / 1).toFixed(2)} years past your expectancy age on Earth.`;
      }
    }

    mars(d1, m1, yCounter, expectancyYears) {
      const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
          return "Date not real";
      }
      else if (80 > yCounter) {
        return `You are ${(yCounter / 1.88).toFixed(2)} years old and have ${(expectancyYears / 1.88).toFixed(2)} years left to live on Mars.`;
        }
        else {
          return `You are ${(yCounter / 1.88).toFixed(2)} years old and have lived ${(expectancyYears / 1.88).toFixed(2)} years past your expectancy age on Mars.`;
      }
    }

      jupiter(d1, m1, yCounter, expectancyYears) {
        const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
            return "Date not real";
        }
        else if (80 > yCounter) {
          return `You are ${(yCounter / 11.86).toFixed(2)} years old and have ${(expectancyYears / 11.86).toFixed(2)} years left to live on Jupiter.`;
          }
          else {
            return `You are ${(yCounter / 11.86).toFixed(2)} years old and have lived ${(expectancyYears / 11.86).toFixed(2)} years past your expectancy age on Jupiter.`;
      }
   }
}
