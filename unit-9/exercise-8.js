const getphoneCost = minutes => {
  // minutes số phút gọi
  const mandatoryFee = 25000000
  if( minutes <= 50) {
    return minutes * 600 + mandatoryFee
  }
  if( minutes > 50 && minutes <= 200) {
    return (minutes - 50) * 400 + mandatoryFee + 50*600
  }
  if( minutes > 200) {
    return minutes * 200 + mandatoryFee
  }
}