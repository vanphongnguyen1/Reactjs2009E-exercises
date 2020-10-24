// bài 1: In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả.
const tableOfMultipliers = num => {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i)
  }
}
tableOfMultipliers(10)

/* bài 2: Hàm nhận tham số là n (số nguyên dương),
  1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6 */
const getEven = num => {
  if (1 <= num && num <= 30) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) continue
      console.log(i)
    }
  }
}
getEven(30)

/* bài 3: Hàm nhận tham số là n (số nguyên dương),
  1 <= n <= 30 Tính tổng từ 1 đến n
  vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21  */
const sum = num => {
  if (1 <= num && num <= 30) {
    let sumIndex = 0
    for (let i = 1; i <= num; i++) {
      sumIndex += i
    }
    console.log(sumIndex)
  }
}
sum(10)

/* bài 4: Hàm nhận tham số là n (số nguyên dương),
  1 <= n <= 30 In ra n! (giai thừa của n)  */
const factorialCalculate = num => {
  if (1 <= num && num <= 30) {
    let productMultiplier = 1
    for (let i = 1; i <= num; i++) {
      productMultiplier *= i
    }
    console.log(productMultiplier)
  }
}
factorialCalculate(8)

/* bài 5: Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
  Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn  */
const getEven = arr => {
  let count = 0
  arr.forEach( num => {
    if (num % 2 === 0) {
      count++
    }
  })
  console.log(count)
}
getEven ([2, -2, 8, 6, 1, 0, 0])

/* bài 6: Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên
  Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp  */
const similarDelete = arr => {
  const arrLetter = arr.filter( (letter, index) => {
    return arr.indexOf(letter) === index
  })
  console.log(arrLetter)
}
similarDelete(['e', 't', 'f', 'e', 't'])
similarDelete(['A', 'C', 'A', 'A', 'B', 'D', 'B'])

/* bài 7: Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score */
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]
const students = []
studentNames.forEach( studentName => {
  studentScores.forEach ( studentScore => {
    if (studentName.id === studentScore.id) {
      students.push(
        Object.assign (studentName, studentScore)
      )
    }
  })
})
console.log(students)

/* bài 8: Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất */
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 10 }
]
const scoreMaxMin = {}
let max = 0
let min = 100
students.forEach( student => {
  if (student.score >= max) {
    max = student.score
  } else if (student.score <= min) {
    min = student.score
  }
})
for( let i = 0; i < students.length; i++) {
  if (students[i].score === max) {
    max = students[i]
  } else if (students[i].score === min) {
    min = students[i]
  }
}
scoreMaxMin.theBest = max
scoreMaxMin.theBad = min
console.log(scoreMaxMin)