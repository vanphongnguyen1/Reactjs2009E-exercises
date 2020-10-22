const commissionAmount = price => {
  // price doanh thu bán sản phẩm
  if(price <= 100000000) {
    const commissionAmount = price * 5 / 100
        // commissionAmount là mức hoa hồng được hưởng
    return `Hoa hồng được hưởng ${commissionAmount}`
  } else if(price <= 300000000) {
    const commissionAmount = price * 10 / 100
    return `Hoa hồng được hưởng ${commissionAmount}`
  } else if(price > 300000000) {
    const commissionAmount = price * 20 / 100
    return `Hoa hồng được hưởng ${commissionAmount}`
  }
}