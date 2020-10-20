const confront = (a, b, c) => {
  if( a > b ) {
    return a
  }
  if( b > c) {
    return b
  }
  if(a < c) {
    return c
  }
}