let second=0;
let minute=0;
let hour=0;
let interval=null;
let running=false;
let playPause=document.getElementById('play-pause');
let timer=document.getElementById('stopwatch-time');
let reset=document.getElementById('reset');


playPause.addEventListener('click',function(){
    if(!running){
       interval= setInterval(function(){
            second++;
            //  timer.innerText=`${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
            if(second>59){
                minute+=1;
                second=0;
                // timer.innerText=`${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
                if(minute>59){
                    hour+=1;
                    minute=0;
                    
                }
                // timer.innerText=`${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
            }

            timer.innerText=`${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
        },999);
        running=true;
        playPause.innerHTML='<i class="fa-solid fa-pause"></i>';
    }
    else{
        clearInterval(interval);
        running=false;
        playPause.innerHTML='<i class="fa-solid fa-play" id="play"></i>';
    }
})

reset.addEventListener('click',function(){
    timer.innerText="00:00:00";
    clearInterval(interval);
    playPause.innerHTML='<i class="fa-solid fa-play" id="play"></i>';
    running=false;
    second=0;
    minute=0;
    hour=0;
})