

// son
const audio = document.querySelector('audio');
const  son = document.querySelector('button');
const bPause = document.querySelector('.pause');

audio.autoplay= true;
audio.load();

son.addEventListener('click', joue );
function joue(){
audio.play();
}

bPause.addEventListener('click',pause);
function pause(){
	audio.pause();
}



var images = document.getElementsByClassName('slidesimage');
var compteur =0;

var prev = document.getElementById('bPrev');
var next = document.getElementById('bNext');

// img cache
for (let i = 0; i < images.length; i++) {
	
if(images[i].name === 'img23'){
	images[i].style.display = 'none';
}
}
// prev & next
prev.addEventListener('click',fPrev);
function fPrev(){
	cacherImage(-1);
}

next.addEventListener('click',fNext);
function fNext(){
	cacherImage();
}

function cacherImage(){
	for (let i = 0; i < images.length; i++) {
		images[i].style.display  = 'none';
	}
	if(compteur < 3){
		images[compteur].style.display  ='block';
	}

	else if(compteur == 3){
		compteur = 0;
	images[compteur].style.display  ='block';
	}
	compteur++;
}
setInterval(cacherImage,2000);





