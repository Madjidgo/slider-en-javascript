// const nom ="mad";
// const sms = `
// ${nom?`Bjr M. ${nom}.`:"je ne connais pas ton nom."}
// `;


// document.body.innerHTML=(sms);



// function
// const ballon = 15;
// function tva(prix){
// 	return prix*1.2;
// }
// console.log(tva(ballon));

//  newceci equivaut a function fleche"

// const jeu = 15;
// const tva1 =(prix1)=>{
// 	return  prix1*1.2;

// }
// console.log(tva1(jeu));

// on peut simplifié
// const jeu1 = 15;
// const tva2 = prix=>prix*1.2;
// console.log(tva2(jeu1));

// news includes

// console.log([1,2,3].includes(1,0));
// console.log(["yo","yi"].includes("yo"));

// news puissance
// console.log(2**3);

// function fleche"

// const arr = [1,2,3,4,5,6,7,8,9];
// const foisDeux = arr.map(num =>num*2);

// console.log(foisDeux);

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


// new classList
// const titre = document.querySelector('h1');
// const liens = document.querySelectorAll("a");

// liens[0].addEventListener('click',e);
// function e (){
// 	titre.classList.add("fbi");
// };

// liens[1].addEventListener('click',e1);
// function e1 (){
// 	titre.classList.remove("fbi");
// };

// liens[2].addEventListener('click',e2);
// function e2 (){
// 	titre.classList.toggle("fbi");
// };

// new Animation

// const p = document.querySelector('p');
// p.style.position = 'absolute';
// let topPos= 0;
// let dir = 2;
 
// function hB(){
// 	if(topPos ==200){dir = -1}
// 	else if (topPos == -50) {dir = 1};

// 	topPos += 2 * dir;

	// p.style.left = `${topPos}px`;
// 	p.style.top = `${topPos}px`;
// 	p.style.right = `${topPos}px`;
// 	p.style.left = `${topPos}px`;
// 	p.style.top  = `${topPos}px`;
	 
	

// requestAnimationFrame(hB);
// }

// requestAnimationFrame(hB);

// slider
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





