
const colorNames = ['DarkSeaGreen','Khaki','LightPink','MediumPurple','BurlyWood','Thistle','PowderBlue','LightGreen'];
let colorIndex = 0;
const memoList = document.querySelector('#memoList ul')
const btnAddBoard = document.getElementById('btnAddBoard');
const addBoard = document.querySelector('.addBoard')
const btnAddMemo = document.getElementById('btnAddMemo');
const memoInput = document.getElementById('memoInput')
const memoContainer = document.getElementById('memoContainer')
const memoHeader = `
<div class="memoHeader">
  <div class="colorList">
    <span class="color"></span>
    <span class="color"></span>
    <span class="color"></span>
  </div>
  <div class="btns">
    <button class="hideMemo"><i class="bar"></i></button>
    <button class="removeMemo"><i class="ri-delete-bin-line"></i></button>
  </div>
</div>
`

btnAddBoard.addEventListener('click',function() {
  addBoard.style.display = 'flex';
  memoInput.focus();
})
btnAddMemo.addEventListener('click',function() {

  let memo = memoInput.value;
  //입력값이 없을 때 추가 버튼을 누르면 스티커 생성 안되고, 경고창
  if(memo === '') {
    alert('write memo');
    memoInput.focus();
    return
  }
  //sticker 생성
  const sticker = document.createElement('div');
  const memoOuput = document.createElement('div')
  sticker.classList.add('sticker')
  memoOuput.classList.add('memoOuput')

  colorIndex = (colorIndex >= colorNames.length - 1) ? 0 : colorIndex + 1;
  sticker.style.backgroundColor = colorNames[colorIndex]

  sticker.innerHTML = memoHeader;
  sticker.appendChild(memoOuput)

  memoOuput.innerText = memo;
  memoContainer.appendChild(sticker)

  //컬러 span에 컬러 적용하는 함수, 함수를 따로 만들지 않고 직접 작성해도 됨
  color(sticker);

  memoInput.value = '';
  memoInput.focus();

  //1. li 요소를 생성해서 memoList의 ul의 자손으로 추가
  //2. li에 텍스트로 value 값
  const li = document.createElement('li')
  li.innerText = memo
  memoList.appendChild(li)

  const removeMemo = sticker.querySelector('.removeMemo')
  removeMemo.addEventListener('click', function() {
    sticker.remove();
    li.remove()
  })
  const hideMemo = sticker.querySelector('.hideMemo')
  hideMemo.addEventListener('click', function() {
    sticker.style.display = 'none';
    li.style.background = 'silver'
  })
  li.addEventListener('click', function() {
    this.style.backgroundColor = "#FFF";
    sticker.style.display = 'block'
  })

  //3. 스티커의 삭제버튼을 클릭하면 li도 삭제
  //4. 스티커의 하이드 버튼을 클릭하면 li 비활성화 모드
  //5. 비활성 li를 클릭하면 스티커 보여야 함


})//sticker 생성 버튼


function color(sticker) {
  const colorChip = sticker.querySelectorAll('.sticker .color')

  colorChip.forEach(function(color, index) {
    color.style.backgroundColor = colorNames[index % 3]
    color.addEventListener('click', function() {
      sticker.style.backgroundColor = color.style.backgroundColor
    })
  })
}
