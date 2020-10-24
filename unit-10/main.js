// bài 1: In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả.
const calcMultipliers = num => {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i)
  }
}

/* bài 2: Hàm nhận tham số là n (số nguyên dương),
  1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6 */
const getEvenNumber = num => {
  if (1 > num || num > 30) return ;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0)
    console.log(i)
  }
}

/* bài 3: Hàm nhận tham số là n (số nguyên dương),
  1 <= n <= 30 Tính tổng từ 1 đến n
  vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21  */
const calcSum = num => {
  if (1 > num || num > 30)  return ;

  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return console.log(total)
}

/* bài 4: Hàm nhận tham số là n (số nguyên dương),
  1 <= n <= 30 In ra n! (giai thừa của n)  */
const calcFactorial = num => {
  if (1 <= num && num <= 30) return ;
  let productMultiplier = 1
  for (let i = 1; i <= num; i++) {
   productMultiplier *= i
  }
  return console.log(productMultiplier)
}

/* bài 5: Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
  Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn  */
const getEven = arr => {
  let count = 0
  arr.forEach(num => {
    if (num % 2 === 0) {
      count++
    }
  })
  return console.log(count)
}

/* bài 6: Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên
  Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp  */
const getUniqArr = arr => {
  const uniqArr = []
  for(let i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i])
    }
  }
  return console.log(uniqArr)
}

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
const listStudents = (studentNames, studentScores) => {
  const student = []
  studentNames.forEach(studentName => {
    studentScores.forEach(studentScore => {
      if (studentName.id === studentScore.id) {
        studentName.score = studentScore.score
        student.push(studentName)
      }
    })
  })
  return console.log(student)
}

/* bài 8: Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất */
const arrStudents = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 10 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 2.3 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 10 }
]
const listStudents = arrStudents => {
  const scoreMaxMin = {}
  let max = 0
  let min = 10
  arrStudents.forEach(student => {
    if (student.score >= max) {
      max = student.score
    } else if (student.score <= min) {
      min = student.score
    }
  })
  arrStudents.forEach(student => {
    if (student.score >= max) {
      max = student
    } else if (student.score <= min) {
      min = student
    }
  })
  if (arrStudents.length === 1) {
    max = arrStudents[0]
    min = max
  } else if (arrStudents < 1) {
    const title = 'Vui lòng nhập thêm dữ liệu'
    max = title
    min = max
  }
  scoreMaxMin.best = max
  scoreMaxMin.bad = min
  return console.log(scoreMaxMin)
}
listStudents(arrStudents)