const ageclass = (age) => {
	if( age < 16 ) {
    return 'Bạn đã quá tuổi để vào lớp 10'
	}
	if( age === 16 ) {
    return 'Bạn đủ tuổi vào lớp 10'
	}
	if( age > 16 ) {
    return 'Bạn chưa đủ tuổi để vào lớp 10'
	}
}