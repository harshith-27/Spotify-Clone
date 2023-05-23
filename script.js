function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName ="Music/"+songNumber+".mp3";
    

    if(audioElement.getAttribute("src")== songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="Images/play-button.png"">';
        
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="Images/pause-button.png"">';
       
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="Images/pause-button.png"">';

    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="Images/play-button.png">';
    }
}