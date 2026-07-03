
let myDocument=document.documentElement; //goes to html page and stores it in vairable called mydocument document elemtn means root of whole page
let btn=document.getElementById("btn"); //finds button or feature we want to work as and stores it in an element
btn.addEventListener("click",()=>{ //this code executes when the user clicks on the button
    if (btn.textContent=="GO FULLSCREEN"){//if the text on the button says go full screen
        if(myDocument.requestFullscreen){ //checks if browser supports fullscreen
            myDocument.requestFullscreen();
        }
        else if(myDocument.msRequestFullscreen){//ms, moz,webkit are for different browsers ms is edge, mox is firefox, webkit is chrome/safari
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();

        }
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen();
        }
        btn.textContent="EXIT FULLSCREEN";// then the text changes to exit full screen once u r in fullscreen
    }
    else{
        if(document.exitFullscreen){//sees if browser supports to exit full screen
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen){ //does the opposite of the requestfullscreen qith different browsers
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen){
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen){
            document.webkitexitFullscreen();
        }
        btn.textContent="GO FULLSCREEN";//this also changes text at the end
    }
})
var image=["url('tomato1.png')","url('tomato2.png')","url('tomato3.png')","url('tomato4.png')","url('tomato5.png')","url('tomato6.png')","url('tomato7.png')"]; //variables of different images for background
        var i=0; //new variable counter that starts at zero
        document.getElementById('mybtn').addEventListener('click',function(){
            if(i<=image.length-2){ //goes to next image each time the user clicks on the button
                i=++i;
            }
            else{
                i=0; //if the user doesnt click on the button keep it the same way 
            }
            document.querySelector('.background-image').style.backgroundImage=image[i];// this is the code that actually changes the background
        })


var icon=document.getElementById("icon");
var dropdown=document.getElementById("playlist-dropdown");
icon.onclick=function(){
    if(dropdown.style.display==="none"){
        dropdown.style.display="block";
        icon.src="volume.png";
        playMusic();
    }
        else {
            dropdown.style.display="none";
            icon.src="no_volume.png";
            music.pause();
    }
}
//music player

let songs=[
    {
        name:'clair de lune',
        path:'song1.mp3',
        artist:'claude debussy',
        cover:'tomatotrack1.jpg'
    },
    {
        name:'soupir de dame',
        path:'song2.mp3',
        artist:'pianocafe_kumi ',
        cover:'tomatotrack2.jpg'
    },
    {
        name:'nocturne in c sharp minor',
        path:'song3.mp3',
        artist:'frédéric chopin',
        cover:'tomatotrack3.jpg'
    },
    {
        name:'merry xmas mr.lawrence',
        path:'song4.mp3',
        artist:'ryuichi sakamoto',
        cover:'tomatotrack4.jpg'
    },
    {
        name:'cherry blossom love',
        path:'song5.mp3',
        artist:'pianocafe_kumi',
        cover:'tomatotrack5.jpg'
    },
    {
        name:'japanese calm piano',
        path:'song6.mp3',
        artist:'pianocafe_Kumi',
        cover:'tomatotrack6.jpg'
    },
    {
        name:'still here',
        path:'song7.mp3',
        artist:'pianocafe_Kumi',
        cover:'tomatotrack7.jpg'
    }
]
let currentMusic=0;
const music=document.querySelector('#audio');

const seekBar=document.querySelector('.seek-bar');
const songName=document.querySelector('.music-name');
const artistName=document.querySelector('.artist-name');
const disk=document.querySelector('.disk');
const currentTime=document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration');
const playBtn=document.querySelector('.play-btn');
const forwardBtn=document.querySelector('.forward-btn');
const backwardBtn=document.querySelector('.backward-btn');

playBtn.addEventListener('click',()=>{
    if(playBtn.classList.contains('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})



//setting up music

const setMusic=(i)=>{
    seekBar.value=0; //set range slide value to 0;
    let song=songs[i];
    currentMusic=i;
    music.src=song.path;
    songName.innerHTML=song.name;
    artistName.innerHTML=song.artist;
    disk.style.backgroundImage=`url('${song.cover}')`;
    currentTime.innerHTML='00:00';
    setTimeout(()=>{
        seekBar.max=music.duration;
        musicDuration.innerHTML=formatTime(music.duration);
    },300);
    
}

setMusic(0);
//formatting time in minutes and seconds format

const formatTime=(time)=>{
    let min=Math.floor(time/60);
    if (min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}


//seek bar

setInterval(()=>{
    seekBar.value=music.currentTime;
    currentTime.innerHTML=formatTime(music.currentTime);
},500)

seekBar.addEventListener('change',()=>{
    music.currentTime=seekBar.value;
})

const playMusic=()=>{
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}
//forward and backward button
forwardBtn.addEventListener('click',()=>{
    if(currentMusic >=songs.length-1){
        currentMusic=0;
    }
    else{
        currentMusic++
    }
    setMusic(currentMusic);
    playMusic();
});

backwardBtn.addEventListener('click',()=>{
    if(currentMusic <=0){
        currentMusic=songs.length-1;
    }
    else{
        currentMusic--
    }
    setMusic(currentMusic);
    playMusic();
});

music.addEventListener('ended',()=>{
    if(currentMusic>=songs.length-1){
        currentMusic=0;
    }
    else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});

//pomodoro timer
(function(){
    const fehBody=document.body;
    const workDurationInput=document.getElementById('work-duration');
    const restDurationInput=document.getElementById('rest-duration');
    const timerTime=document.getElementById('feh-timer-time');
    const circleProgress=document.querySelector('.circle-progress');
    let workDuration=parseInt(workDurationInput.value)*60;
    let restDuration=parseInt(restDurationInput.value)*60;
    let isPaused=true;
    let isWorking=true;
    let intervalId;
    const completedSessionsElement=document.getElementById('feh-completed-sessions');
    let completedSessions=0;
    let remainingTime=workDuration;
        const favicon=document.getElementById("favicon");

        if (favicon){
            favicon.href=`tomato_icon.png?v=${new Date().getTime()}`;
        }
        window.addEventListener('load',()=>{
            fehBody.classList.add('page-loaded');
        });
        //start buttonS
        const startBtn=document.getElementById('start-btn');
        startBtn.addEventListener('click',()=>{
            isPaused=false;
            alarmSound.play().then(()=>{alarmSound.pause();alarmSound.currentTime=0;}).catch(()=>{});

            fehBody.classList.add('timer-running');

            if (isWorking){
                fehBody.classList.remove('timer-paused');
            }
            else{
                fehBody.classList.add('rest-mode');
                fehBody.classList.remove('timer-paused');
            }

            if(!intervalId){
                intervalId=setInterval(updateTimer,1000);
            }
    });
    //pause button
        const pauseBtn=document.getElementById('pause-btn');
        pauseBtn.addEventListener('click',()=>{
            isPaused=true;
            fehBody.classList.remove('timer-running');
            fehBody.classList.add('timer-paused');
        });
    //settings
    const btnToggleSettings=document.getElementById('feh-toggle-settings');
    const btnCloseSettings=document.getElementById('feh-close-settings');

    function setBodySettings(){
        fehBody.classList.contains('settings-active') ? fehBody.classList.remove('settings-active'): fehBody.classList.add('settings-active');
    }

    function toggleSettings(){
        if(event.type==='click'){
            setBodySettings();
        }
        else if((event.type==='keydown'&&event.keyCode===27)){
            fehBody.classList.remove('settings-active');
        }
    }
    btnToggleSettings.addEventListener('click',toggleSettings);
    btnCloseSettings.addEventListener('click',toggleSettings);
    document.addEventListener('keydown',toggleSettings);

    //work/rest settings
    workDurationInput.addEventListener('change',()=>{
        if(workDurationInput.value<1){
            workDurationInput.value=1;
            alert("Input Positive Numbers Only!");

        }
        workDuration=parseInt(workDurationInput.value)*60;
        if(isWorking){
            remainingTime=workDuration;
            updateProgress();
        }
    });
     restDurationInput.addEventListener('change',()=>{
        if(restDurationInput.value<1){
            alert("Input Positive Numbers Only!");
            restDurationInput.value=1;

        }
        restDuration=parseInt(restDurationInput.value)*60;
        if(isWorking){
            remainingTime=workDuration;
            updateProgress();
        }
    });


    //update timer
    const alarmSound=new Audio("timer.mp4");
    
    function updateTimer(){
        

        
        if(!isPaused){
            remainingTime--;
            timerTime.textContent=formatTime(remainingTime);
            
            document.title=`${formatTime(remainingTime)}`;
            const favicon=document.getElementById("favicon");
            
            if (favicon){
                const currentHref=favicon.href.split('?')[0];
                favicon.href=`${currentHref}?v=${new Date().getTime()}`;
            }
            
            if(remainingTime<=0){
                isWorking=!isWorking;
                remainingTime=isWorking ? workDuration : restDuration;

                if(!isWorking){
                    fehBody.classList.add('rest-mode');
                    completedSessions++;
                    completedSessionsElement.textContent=completedSessions;
                   
                }
                else{
                    fehBody.classList.remove('rest-mode');

                }
                alarmSound.currentTime=0;
                alarmSound.play().catch(err=>console.log("alarm blocked:",err));
                isPaused=false;
                fehBody.classList.remove('timer-work-active');
            }
            
            
            
            updateProgress();
        }
        
    }
    //update progress
    function updateProgress(){
        const radius=45;
        const circumference=2*Math.PI*radius;

        const totalDuration= isWorking ? workDuration:restDuration;
        
        const dashOfset=(circumference*remainingTime)/totalDuration;

        circleProgress.style.strokeDashoffset=dashOfset;

        timerTime.textContent=formatTime(remainingTime);
    }

    function formatTime(seconds){
        const minutes=Math.floor(seconds/60);
        const remainingSeconds=seconds%60;
        return `${minutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2,'0')}`;
    }
    updateProgress();
    
})();





