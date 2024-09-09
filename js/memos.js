let memos = [];
let memoId = 0;

const memoForm = document.getElementById('memoForm')
const memoList = document.getElementById('memo')
const writerName = document.getElementById('writer_name')


memoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let memoText = writerName.value;

  writerName.focus();
  writerName.value = ''

  addMemo(memoText)
})

function addMemo(txt) {
  memoId++;
  const memo = {
    id: memoId,
    text: txt
  }
  memos.push(memo)
}
function renderMemos() {
  memoList.innerHTML = '';

  memos.forEach(memo => {
    const listItem = document.createElement9('li')

  })
}
