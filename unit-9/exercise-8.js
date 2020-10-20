const cuocDienThoai = (minute) => {
  // minute số phút gọi
  const phiBatBuoc = 25000000
  if( minute <= 50) {
    const phigoi = minute * 600  // phí gọi mỗi phút cho 50p đầu tiên
    return phigoi + phiBatBuoc
  }
  if( minute > 50 && minute <= 200) {
    const phigoi = minute * 400   // phí gọi mỗi phút cho 150p tiếp theo
    return phigoi + phiBatBuoc
  }
  if( minute > 200) {
    const phigoi = minute * 200   // phí gọi mỗi phút trên 200p
    return phigoi + phiBatBuoc
  }
}