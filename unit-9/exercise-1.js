const getSalary = salary => {
	if (salary > 15000000) {
    const incomeTax = salary * 30 / 100   // incomeTax là tiền thuế thu nhập
    const netSalary = salary - incomeTax  // netSalary là tiền lương ròng
    return netSalary
	} else if (7000000 <= salary && salary <= 15000000) {
    const incomeTax = salary * 20 / 100
    const netSalary = salary - incomeTax
    return netSalary
	} else {
    const incomeTax = salary * 10 / 100
    const netSalary = salary - incomeTax
    return netSalary
	}
}