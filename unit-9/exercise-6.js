// pt: ax2 + bx + c = 0
// thì đặt biến là a, b, c dễ hiểu hơn chứ a
const equation = (a, b, c) => {
  const detal = b * b - (4 * a * c)
  console.log(detal)
  if (a === 0 && b === 0) {
    return 'Phương trình vô nghiệm'
  }
  if (a === 0) {
    return `Phương trình có 1 nghiệm ${-c / b}`
  }
  if (detal < 0) {
    return 'Phương trình vô nghiệm'
  }
  if (detal === 0) {
    const kp = -b / (2 * a)
    return `Phương trình có nghiệm kép x1 = x2 = ${kp}`
  }
  if (detal > 0) {
    const x1 = (-b - Math.sqrt(detal)) / ( 2 * a)
    const x2 = (-b + Math.sqrt(detal)) / ( 2 * a)
    return `
        Phương trình có 2 nghiệm:
        x1 = ${x1}
        x2 = ${x2}  `
  }
}