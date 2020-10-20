const hoaHongs = (price) => {
  // price doanh thu bán sản phẩm
  if( price <= 100000000 ) {
    const hoaHong = price * 5 / 100
        // hoaHong là mức hoa hồng được hưởng
    return `Hoa hồng được hưởng ${hoaHong}`
  }
  if( price <= 300000000 ) {
    const hoaHong = price * 10 / 100
    return `Hoa hồng được hưởng ${hoaHong}`
  }
  if( price > 300000000 ) {
    const hoaHong = price * 20/ 100
    return `Hoa hồng được hưởng ${hoaHong}`
  }
}