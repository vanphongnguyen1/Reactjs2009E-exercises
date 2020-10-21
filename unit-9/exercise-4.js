const compareNumber = (a, b, c) => {
  if (a > b && a > c) {
    return a
  } else if (b > c && b > a) {
    return b
  } else return c
}
console.log(compareNumber(0,1,3))