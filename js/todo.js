let todos = [];
let completedTodos = [];
let todoId = 0;

const todoForm = document.getElementById('todo_form')
const newTodo = document.getElementById('add_todo')
const todoList = document.getElementById('todo_list')
const completedList = document.getElementById('completed_list')

window.addEventListener('DOMContentLoaded', function() {
  newTodo.focus()
})

todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); //기본동작 제거
  let addText = newTodo.value;

  newTodo.focus();
  newTodo.value = ''

  // addTask(addText);
  addTodo(addText) //data 처리
})

function addTodo(txt) { //id, text, completed
  todoId++;
  const todo = {
    id: todoId,
    text: txt,
    completed: false
  }
  todos.push(todo)

  renderTodos() //DOM으로 화면 출력
} //addTodo()

function renderTodos() {
  //input을 입력할 대마다 todos 배열의 갯수만큼 li를 생성
  //기존의 내용은 삭제
  todoList.innerHTML = '';
  completedList.innerHTML = '';

  todos.forEach(todo => {
    const listItem = document.createElement('li'); //li 생성

    const checkbox = document.createElement('input'); //li 자손 checkbox 생성
    checkbox.type = 'checkbox';

    const taskText= document.createElement('input');
    taskText.type = 'text';
    taskText.value = todo.text;
    taskText.readOnly = true;

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="ri-edit-2-line"></i>'

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>'

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // todoList.appendChild(listItem);
    if(todo.completed) {
      //완료 목록
      completedList.appendChild(listItem);
    } else {
      //기본 목록
      todoList.appendChild(listItem);
    }

    //delete
    deleteButton.addEventListener('click', function() {
      deleteTodo(todo.id)
      renderTodos()
    }) //deleteButton

    //checkbox
    checkbox.addEventListener('change', function() {
      completionTodo(todo.id)
    }) //checkbox

    //edite
    editButton.addEventListener('click', function() {
      if(taskText.readOnly) {
        taskText.readOnly = false;
        this.innerHTML = '<i class="ri-save-line"></i>' //저장
      } else {
        taskText.readOnly = true;
        this.innerHTML = '<i class="ri-edit-2-line"></i>' //수정
        editeTodo(todo.id, taskText.value)
      }
    })//editeButton()

  }) //todo.forEach()
} //renderTodos()

function editeTodo(id, newTxt) {
  todos =todos.map(todo => {
    if(todo.id === id) {
      todo.text = newTxt
    }
    return todo
  })
  renderTodos()
}

function completionTodo(id) {
  //map() => completed : true (todo.id === id)
  todos = todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed //todo.completed = true
      if(todo.completed) { //true => completedTodos 배열로
        completedTodos.push(todo)
      } else { //나머지는 todos 배열로 false => true를 제외시킴
        completedTodos = completedTodos.filter(item => item.id !== id)
      }
    }
    return todo;
  })
  renderTodos()
} //completionTodo()

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
} //deleteTodo()




function addTask(txt) { //DOM으로만 처리한 로직
  const listItem = document.createElement('li')
  const checkbox = document.createElement('input')
  const taskText= document.createElement('input')
  const editButton = document.createElement('button')
  const deleteButton = document.createElement('button')
  checkbox.type = 'checkbox'; // input에 반드시 필요한 속성이어서 작성한 것
  taskText.type = 'text'; // 태그들에게 반드시 있어야 하는 속성들은 써줘야 함
  taskText.value = txt;
  taskText.readOnly = true;
  editButton.innerHTML = '<i class="ri-edit-2-line"></i>'
  deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>'

  todoList.appendChild(listItem)
  listItem.appendChild(checkbox)
  listItem.appendChild(taskText)
  listItem.appendChild(editButton)
  listItem.appendChild(deleteButton)

  //edit 버튼
  editButton.addEventListener('click', function() {
    //taskText를 수정 => readOnly
    //자신의 innerText를 변경 => save / edit
    //taskText.readOnly
    // if() {red}
    // else {blue}
    if(taskText.readOnly) {
      taskText.readOnly =false;
      this.innerHTML = '<i class="ri-save-line"></i>'
    } else {
      taskText.readOnly = true;
      this.innerHTML = '<i class="ri-edit-2-line"></i>'
    }
  })

  //checkbox
  checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
      taskText.classList.add('checked')
      completedList.appendChild(listItem)
    } else {
      taskText.classList.remove('checked')
      todoList.appendChild(listItem)
    }
  })

  //delete 버튼
  deleteButton.addEventListener('click', function() {
    listItem.remove()
  })
}

// 새 파일에 회원관리
//1. 이름과 연락처를 입력 받음
//2. 기본 리스트로 나열
//3. 그룹(select 태그, 가족 / 친구 / 직장)으로 분류
//4. 분류된 항목은 각각의 리스트로 변경 (예 : 완료목록)
