const getSalary = salary => {
  if (salary > 15000000) {
    const incomeTax = salary * 30 / 100   // incomeTax là tiền thuế thu nhập
    return salary - incomeTax
  } else if (7000000 <= salary && salary <= 15000000) {
      const incomeTax = salary * 20 / 100
      return salary - incomeTax
  } else {
      const incomeTax = salary * 10 / 100
      return salary - incomeTax
  }
}
