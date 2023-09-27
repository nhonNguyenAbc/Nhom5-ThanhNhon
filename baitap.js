//! Bài 1
function nhapMangSanPham(productArray) {
  const soLuong = prompt("Nhập số lượng sản phẩm: ");

  // Nhập các sản phẩm từ bàn phím
  for (let i = 0; i < soLuong; i++) {
    const product = {
      id: prompt("Nhập id sản phẩm thứ " + (i + 1) + ": "),
      name: prompt("Nhập tên sản phẩm thứ " + (i + 1) + ": "),
      price: prompt("Nhập giá sản phẩm thứ " + (i + 1) + ": "),
    };

    // Kiểm tra xem giá sản phẩm có phải là số hay không
    if (isNaN(product.price)) {
      // Nếu không phải số, thì yêu cầu người dùng nhập lại
      console.log("Giá sản phẩm phải là số. Vui lòng nhập lại.");
      product.price = prompt("Nhập giá sản phẩm thứ " + (i + 1) + ": ");
    }

    // Thêm đối tượng Product vào mảng productArray
    productArray.push(product);
  }
}
function inRaSanPhamCoGiaTu200(productArray) {
  const priceProducts = productArray.filter((product) => product.price > 200);

  // In ra tên của các sản phẩm đó
  console.log("Những sản phẩm có giá hơn 200 là");
  priceProducts.forEach((product) => {
    console.log(product.name);
  });
}

// In ra các sản phẩm có tên Váy trong sản phẩm
function inRaCacSanPhamCoTenVay(productArray) {
  const nameProducts = productArray.filter((product) =>
    product.name.includes("Váy")
  );

  console.log("Những sản phẩm có chứa từ 'Váy' trong tên là");
  nameProducts.forEach((product) => {
    console.log(product.name, product.price);
  });
}

// In ra mảng product với giá tăng dần
function inRaMangSanPhamCoGiaTangDan(productArray) {
  productArray.sort((a, b) => a.price - b.price);

  // In ra danh sách các sản phẩm
  console.log("Danh sách giá tăng dần là");
  productArray.forEach((product) => {
    console.log(product.name);
  });
}

//!Bài 2 Giải phương trình bậc 2
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

//!Bài 3 Kiểm tra email của người dùng
function checkEmail(email_nd) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email_nd)) {
    throw new Error("Email không hợp lệ");
  } else if (email_nd === "hoangnm.bg@gmail.com") {
    throw new Error("Email đã được đăng ký");
  } else {
    console.log(email_nd);
  }
}

function main() {
  //const productArray = [];
  //nhapMangSanPham(productArray);
  //inRaSanPhamCoGiaTu200(productArray);
  //inRaCacSanPhamCoTenVay(productArray);
  //inRaMangSanPhamCoGiaTangDan(productArray);
  let email = prompt("Nhập email: ");
  checkEmail(email);
}
main();
