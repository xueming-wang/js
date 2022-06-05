//取得我的图片 从.html
let myImage = document.querySelector('img');

//点击图片定义成一个函数
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//取得Button 和 h1行的数据
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


//放入名字
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

//如果 不存在name 输入名字. 如果存在 取得名字并显示
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

//设置新名字
myButton.onclick = function() {
  setUserName();
}