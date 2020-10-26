const equation = (numHidden1, numHidden2, numHidden3) => {
  const detal = numHidden2 * numHidden2 - (4 * numHidden1 * numHidden3)
  console.log(detal)
  if (numHidden1 === 0 && numHidden2 === 0) {
    return 'Phương trình vô nghiệm'
  }
  if (numHidden1 === 0) {
    return `Phương trình có 1 nghiệm ${-numHidden3 / b}`
  }
  if (detal < 0) {
    return 'Phương trình vô nghiệm'
  }
  if (detal === 0) {
    const kp = -numHidden2 / (2 * numHidden1)
    return `Phương trình có nghiệm kép x1 = x2 = ${kp}`
  }
  if (detal > 0) {
    const x1 = (-numHidden2 - Math.sqrt(detal)) / ( 2 * numHidden1)
    const x2 = (-numHidden2 + Math.sqrt(detal)) / ( 2 * numHidden1)
    return `
        Phương trình có 2 nghiệm:
        x1 = ${x1}
        x2 = ${x2}  `
  }
}
