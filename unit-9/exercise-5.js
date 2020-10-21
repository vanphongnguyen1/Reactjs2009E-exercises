// middleExamScore, lastExamScore lần lượt là điểm thi giữa kỳ, điểm thi cuối kỳ
const getRank = (middleExamScore, lastExamScore) => {
  const average = (middleExamScore + lastExamScore) / 2
  if (average >= 9) return 'Hạng A'
  if ( 7.0 <= average && average < 9.0) {
    return 'Hạng B'
  } else if ( 5.0 <= average && average < 7.0) {
    return 'Hạng C'
  } else return 'Hạng F'
}