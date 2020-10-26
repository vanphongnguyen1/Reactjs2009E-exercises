// middleExamScore, lastExamScore lần lượt là điểm thi giữa kỳ, điểm thi cuối kỳ
const getRank = (middleExamScore, lastExamScore) => {
  const average = (middleExamScore + lastExamScore) / 2
  if (average >= 9) return 'Hạng A'
  if ( 7 <= average && average < 9) {
    return 'Hạng B'
  } else if ( 5 <= average && average < 7) {
    return 'Hạng C'
  } else return 'Hạng F'
}
