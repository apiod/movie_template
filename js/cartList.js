let len = localStorage.length;

const tbody = document.querySelector("#content");
let total = 0;
for (let i = 0; i < len; i++) {
  let key = localStorage.key(i);
  console.log("key :>> ", key);

  let value = localStorage.getItem(key);
  console.log("value :>> ", value);

  // let content = value.split(",");
  // console.log("content :>> ", content);

  // 객체 분해 할당 사용
  let [title, imgSrc, price] = value.split(",");
  price = parseInt(price);
  console.log("title, imgSrc,price :>> ", title, imgSrc, price);

  //행 생성
  let row = tbody.insertRow();
  //삭제를위한 tr에 id값 추가
  row.setAttribute("id", key);
  //이미지, 상품번호, 상품이름, 가격, 삭제
  // row.insertCell(0).innerHTML = `<img src='${content[1]}' class='poster'/>`;
  // row.insertCell(1).innerHTML = `<p id=${key}>${key}</p>`;
  // row.insertCell(2).innerHTML = `<p>${content[0]}</p>`;
  // row.insertCell(3).innerHTML =
  //   `<p>${parseInt(content[2]).toLocaleString()}</p>`;
  // row.insertCell(4).innerHTML = `<button name="delItem">삭제</button>`;
  // total += parseInt(content[2]);

  row.insertCell(0).innerHTML = `<img src='${imgSrc}' class='poster'/>`;
  row.insertCell(1).innerHTML = `<p id=${key}>${key}</p>`;
  row.insertCell(2).innerHTML = `<p>${title}</p>`;
  row.insertCell(3).innerHTML = `<p>${price.toLocaleString()}</p>`;
  row.insertCell(4).innerHTML = `<button name="delItem">삭제</button>`;
  total += price;
}

//버튼 이벤트
tbody.addEventListener("click", (event) => {
  if (event.target.matches("[name=delItem]")) {
    const tr = event.target.parentElement.parentElement;
    tr.remove();
    console.log(tr.getAttribute("id"));
    localStorage.removeItem(tr.getAttribute("id"));
  }
});

console.log(document.querySelector(".totalprice"));
document.querySelector(".totalprice").innerHTML = `주문가격: ${total}</p>`;
