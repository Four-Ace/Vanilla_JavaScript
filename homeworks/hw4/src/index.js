const clockTitle = document.querySelector(".js-clock");

const target_date = [12,25];
let Mdays = [31,28,31,30,31,30,31,31,30,31,30,31];


secondHandler();
setInterval(secondHandler, 1000);

function secondHandler(){
    const date = new Date();
    const cur_month = date.getMonth();
    const cur_days = date.getDate();
    const cur_hour = date.getHours();
    const cur_min = date.getMinutes();
    const cur_sec = date.getSeconds();
    let rDays = 0;
    let rHour =23;
    let rMin = 59;
    let rSec = 60;

    //이번달을 포함한 모든 남은 달의 일 수를 더한다.
    // 오늘의 일수를 뺀다, 시간을 뺀다. 분을 뺀다, 초를 뺀다. 
    //
    //	  (1)                12월   (2) 25일  (3) 
    //-----------------------------

    //날짜 계산
    if(cur_days < target_date[1] && cur_month+1===12) //(1)
    {
        rDays = target_date[1]-cur_days-1;
    }
    else if(cur_days >= target_date[1] && cur_month <= target_date[0]) { //(2)
        rDays = addArray(Mdays,0,target_date[0]-1)
        +Mdays[target_date[0]-1]+ target_date[1]-cur_days;
    }
    else{ //(3)
    rDays = addArray(Mdays,cur_month,target_date[0]-1)
     + target_date[1]-cur_days-1;
    }
    
    //시간 계산
     rHour = rHour - cur_hour;
     rMin = rMin - cur_min;
     rSec = rSec - cur_sec;
     console.log(`${rDays} ${rHour} ${rMin} ${rSec} `);

    clockTitle.innerText = `${rDays}d ${rHour}h ${rMin}m ${rSec}s`;
}

function addArray(array,from,to) {
    //배열의 지정된 부분을 더하는 함수
    return array.slice(from, to).reduce((accumulator, currentValue) => accumulator + currentValue);
}