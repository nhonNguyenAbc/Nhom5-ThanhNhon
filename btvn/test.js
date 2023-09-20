const a = prompt("Nhập hệ số a: ");
const b = prompt("Nhập hệ số b: ");
const c = prompt("Nhập hệ số c: ");

if (a == 0) {
  const x = -c / b;
  console.log("Nghiệm: x = ", x);
  exit();
}

denta = b * b - 4 * a * c;
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
