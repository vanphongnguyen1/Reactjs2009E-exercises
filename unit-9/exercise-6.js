const equation = (a, b, c) => {
  const dental = Math.pow(b,2) - (4 * a * c)
  console.log(dental)
  if( a === 0 && b === 0) {
    return 'Phương trình vô nghiệm'
  }
  if( a === 0) {
    return `Phương trình có 1 nghiệm ${-c/b}`
  }
  if( dental < 0 ) {
    return 'Phương trình vô nghiệm'
  }
  if( dental ===0 ) {
    const kp = -b / (2 * a)
    return `Phương trình có nghiệm kép x1 = x2 = ${kp}`
  }
  if ( dental > 0 ) {
    const x1 = (-b - Math.sqrt(dental)) / ( 2 * a)
    const x2 = (-b + Math.sqrt(dental)) / ( 2 * a)
    return `
        Phương trình có 2 nghiệp:
        x1 = ${x1}
        x2 = ${x2}
    `
  }
}