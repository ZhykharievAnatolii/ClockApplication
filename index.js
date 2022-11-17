"use strict"
/**
 *
 * @type {Date} date
 */
const now=new Date();
function updateTime(date) {
    const hours=document.querySelector('.hours');
    const minutes=document.querySelector('.minutes');
    const seconds=document.querySelector('.seconds');

    hours.innerText=date.getHours().toString().padStart(2, '0');
    minutes.innerText=date.getMinutes().toString().padStart(2, '0');
    seconds.innerText=date.getSeconds().toString().padStart(2, '0');

}
updateTime(now);
// setInterval(()=>{
// now.setSeconds(now.getSeconds()+1);
//     updateTime(now);
// },1000)
const intervalId=setInterval(()=>{
    now.setSeconds(now.getSeconds()+1);
    updateTime(now);
},1000);

// function renderNotification(text) {
//     const list=document.querySelector('ul')
//     const notification=document.createElement('li');
//     notification.innerText=text;
//     list.append(notification);
//     return notification;
//
// };
const button = document.querySelector('button');
const list = document.querySelector('ul');
const names = ['Bohdan', 'Stepan', 'Yura', 'Julia', 'Olena'];

const renderItem = (text) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'X';
    item.innerText = text;
    item.append(button);
    button.onclick = () => {
        item.remove();
    };
    item.onmousedown = () => {
        item.classList.add('red');
    };

    item.onmouseup = () => {
        item.classList.remove('red');
    }


    list.append(item);
};

names.forEach(renderItem);