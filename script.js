'use strict';

let msgSpace = document.querySelector('.msg-no'),
    timeSpace = document.querySelector('.cur-time'),
    totalMsg = 0;

function updateMsgColor() {
    if (totalMsg > 0) {
        msgSpace.style.color = 'red';
    } else {
        msgSpace.style.color = '#FFFFFF';
    }
}

const updateTime = () => {
    let date = new Date();
    let hour = formatTime(date.getHours());
    let minute = formatTime(date.getMinutes());
    let curTime = `${hour}:${minute}`;
    timeSpace.textContent = curTime;
}

function increaseMsg() {
    totalMsg++;
    msgSpace.textContent = totalMsg;
    updateMsgColor();
}

function decreaseMsg() {
    if (totalMsg>0) {
        totalMsg--;
        msgSpace.textContent = totalMsg;
    }
    updateMsgColor();
}

setInterval(updateTime, 1000);
