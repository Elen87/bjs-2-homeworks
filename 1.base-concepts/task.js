"use strict";
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
      return [];
      }

      if (discriminant === 0) {
        return [-b / (2 * a)];
        }  

  const root1 = (-b + Math.sqrt(discriminant)) / ( 2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / ( 2 * a);
  return [root1, root2];
}

solveEquation(a, b, c);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let coeff = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (coeff + (coeff / (((1 + coeff) ** countMonths) - 1)));
  let total = monthPayment * countMonths;
  let roundedTotal =  parseFloat(total.toFixed(2));

  return roundedTotal;
}

calculateTotalMortgage(percent, contribution, amount, countMonths);
