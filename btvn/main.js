//Bài 1 Giải phương trình bậc 2
/**
 *  ax^2 + bx + c = 0
 *  denta = b^2 - 4ac
 *  denta < 0 phương trình vô nghiệm
 *  denta > 0 phương trình có hai nghệm x = (-b+-sqrt(denta)/2a)
 *  den ta = 0 phương trình có nghiệm kép x = -b/2a
 *
 */
//khai báo biến
function giaiPhuongTrinhBacHai() {
  const a = prompt("Nhập hệ số a: ");
  const b = prompt("Nhập hệ số b: ");
  const c = prompt("Nhập hệ số c: ");

  if (a == 0) {
    const x = -c / b;
    console.log("Nghiệm: x = ", x);
    return;
  }

  const denta = b * b - 4 * a * c;
  if (denta > 0) {
    const x1 = (-b + Math.sqrt(denta)) / (2 * a);
    const x2 = (-b - Math.sqrt(denta)) / (2 * a);
    console.log("Nghiệm 1: x1 = ", x1);
    console.log("Nghiệm 2: x2 = ", x2);
  } else if (denta === 0) {
    const x = -b / (2 * a);
    console.log("Nghiệm: x = ", x);
  } else {
    console.log("Phương trình vô nghiệm");
  }
}

//Bài 2 Tính chỉ số IBM
function chiSoIBM() {
  const weight = prompt("Nhập cân nặng: ");
  const height = prompt("Nhập chiều cao: ");
  const ibm = (weight / height) ^ 2;
  console.log("Chỉ số IBM của bạn là: ", ibm);
}

//Bài 3:
//_Kiểm tra số lẻ
function soLe() {
  const x = prompt("Nhập số cần kiểm tra: ");
  const n = Number(x);
  if (n % 2 != 0) {
    console.log(x, " là số lẻ");
  } else {
    console.log(x, " không phải số lẻ");
  }
}

//_Kiểm tra số chính phương
function soChinhPhuong() {
  const x = prompt("Nhập số cần kiểm tra: ");
  const n = Number(x);
  let i = 0;
  while (i * i <= n) {
    if (i * i == n) {
      console.log(x, " là số chính phương");
      return;
    }
    i++;
  }
  console.log(x, " không là số chính phương");
}

//_Kiểm tra số nguyên tố
function soNguyenTo() {
  const x = prompt("Nhập số cần kiểm tra: ");
  const n = Number(x);
  let flag = true;
  for (let i = 2; i < n / 2 + 1; i++) {
    if (n % i == 0) {
      flag = false;
      console.log(x, " không là số nguyên tố");
      return;
    }
  }
  if (flag == true && n !== 1) {
    console.log(x, " là số nguyên tố");
  } else {
    console.log(x, " không là số nguyên tố");
  }
}

//_Kiểm tra số hoàn hảo
function soHoanHao() {
  const x = prompt("Nhập số cần kiểm tra: ");
  const n = Number(x);
  let tong = 0;
  for (let i = 1; i < n / 2 + 1; i++) {
    if (n % i === 0) {
      tong += i;
    }
  }
  if (tong === n) {
    console.log(x, " là số hoàn hảo");
  } else {
    console.log(x, " không là số hoàn hảo");
  }
}
