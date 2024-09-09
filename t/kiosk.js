const orderList = [];
let i = 0;


$('#menu li').click(function() {
  //클릭한 li의 상품명과 가격 가져오기
  let pname = $(this).find('.p_name').text()
  let pprice = $(this).find('.p_price').text()

  const chioce = {
    no: ++i, name: pname, price: pprice, count: 1
  }

  orderList.push(chioce)
  // console.log(orderList)

  // printBill(pname, pprice)
  printBill()
})

//상품명과 가격을 계산서에 출력
// function printBill(name, price) {
//   $('#order .o_name').text(name)
//   $('#order .o_price').text(price)
// }
let sum = 0;
function printBill() {
  const printItem = orderList[orderList.length - 1]
  $('.blank').remove()
  //tr 생성
  $('#list').append(`
    <tr>
      <td class="o_no">${printItem.no}</td>
      <td class="o_name">${printItem.name}</td>
      <td class="o_cnt">${printItem.count}</td>
      <td class="o_price">${printItem.price}</td>
    </tr>
  `)
  //no의 숫자 합
  sum += parseInt(printItem.price.replace(',', ''))
  $('#pay_sum').text(sum.toLocaleString() + '원') //1, 3, 6, 10
}
let inputSum = 0;
let change = 0;
$('.payment').click(function() {
  //id="input_sum" - id="pay_sum"
  // 1000원 모자람, 거스름돈 100원
  change = inputSum - sum;
  let message;
  if(change > 0) {
    message = `거스름돈 ${change.toLocaleString()}원 남음`
  }
  else {
    message = `${Math.abs(change).toLocaleString()}원 모자람`
  }
  $('#change').text(message)
  console.log(change);
})

function cash(m) {
  //pay 버튼을 클릭하면 input_sum에 금액누적
  inputSum += m
  $('#input_sum').text(`${inputSum.toLocaleString()}원`)
}