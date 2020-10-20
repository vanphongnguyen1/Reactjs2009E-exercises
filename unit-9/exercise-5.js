// a, b lần lượt là điểm thi giữa kỳ, điểm thi cuối kỳ
const ranks = (a, b, c) => {
  const medium = (a + b )/2
  if (medium >= 9.0) {
    return 'Hạng A'
  }
  if ( 7.0 <= medium && medium < 9.0) {
    return 'Hạng B'
  }
  if ( 5.0 <= medium && medium < 7.0) {
    return 'Hạng C'
  }
  if ( 5.0 > medium) {
    return 'Hạng F'
  }
}