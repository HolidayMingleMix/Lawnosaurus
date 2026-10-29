document.addEventListener("DOMContentLoaded", () => {
	const output = document.querySelector('.output');
	const FOLDER_PATH = "./images/";
	const images = ['yard1.jpg','yard2.jpg','yard3.jpg','yard4.jpg','yard5.jpg','yard6.jpg'].map(name => FOLDER_PATH + name);
	
	cGallery();

	function cGallery(){
		let curIndex = 0;
		const gallery = document.createElement('div');
		const curImage = document.createElement('img');
		curImage.src = images[0];
		const btn1 = document.createElement('button');
		btn1.textContent = 'Prev';
		const btn2 = document.createElement('button');
		btn2.textContent = 'Next';
		output.append(gallery);
		gallery.append(curImage);
		gallery.append(btn1);
		gallery.append(btn2);
		
		btn1.addEventListener('click',()=>{
			curIndex--;
			if(curIndex<0){
				curIndex = images.length-1;
			}
			console.log(images[curIndex]);
			curImage.src = images[curIndex];
		});
		btn2.addEventListener('click',()=>{
			curIndex++;
			if(curIndex>= images.length){
				curIndex = 0;
			}
			console.log(images[curIndex]);
			curImage.src = images[curIndex];
		});
	}
});