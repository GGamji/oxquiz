// 새 파일에 회원관리
//1. 이름과 연락처를 입력 받음
//2. 기본 리스트로 나열
//3. 그룹(select 태그, 가족 / 친구 / 직장)으로 분류
//4. 분류된 항목은 각각의 리스트로 변경 (예 : 완료목록)
//5. 삭제 가능하도록 버튼 추가

//*** 음식점, 상품명, 가격, 분류(중식, 일식, 한식, 분식, 기타)
let users = [];
let completeds = [];
let userId = 0;
const userForm = document.getElementById('user_form')
const userName = document.getElementById('user_name')
const userTel = document.getElementById('user_tel')
const userList = document.getElementById('user_list')
const completedList = document.getElementById('completed_list')
const familList = document.getElementById('famil_list')
const companyList = document.getElementById('company_list')

window.addEventListener('DOMContentLoaded', function() {
  userName.focus()
})

userForm.addEventListener('submit', function(u) {
  u.preventDefault();
  let userNameText = userName.value;

  userName.focus();
  userName.value = ''

  addTask(userNameText)
})

function addTask(txt) {
  userId++
  const user = {
    id: userId,
    text: txt,
    completed: false
  }
  users.push(user)
  console.log(users);
}

function renderUsers() {
  userList.innerHTML = '';
  companyList.innerHTML = '';

  users.forEach(user => {
    const listItem = document.createElement('li');
    userList.appendChild(listItem);

    const taskText = document.createElement('select')
    

    if(user.completed) {
      completedList.appendChild(listItem)
    } else {
      userList.appendChild(listItem)
    }

  })
}





// function addTask(txt) {
//   const listItem = document.createElement('li')
//   const select = document.createElement('select')
//   const option = document.createElement('option')
//   const option1 = document.createElement('option')
//   const option2 = document.createElement('option')
//   const option3 = document.createElement('option')

//   listItem.innerHTML = txt;
//   option.innerText = '그룹 선택'
//   option1.innerText = '가족'
//   option1.value = '가족'
//   option2.innerText = '친구'
//   option2.value = '친구'
//   option3.innerText = '동료'
//   option3.value = '동료'

//   userList.appendChild(listItem)
//   listItem.appendChild(select)
//   select.appendChild(option)
//   select.appendChild(option1)
//   select.appendChild(option2)
//   select.appendChild(option3)


//   select.addEventListener('click', function() {

//   })
// }




