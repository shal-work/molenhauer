
import $ from '../core';

// $.prototype.drop = () => {
$.prototype.drop = function() {
	let shiftX,	shiftY;
	let X0=0, Y0=0;
	let X1=0, Y1=0;
	let onmouseup = false;

		$('#drag').on('mousedown', (event) => { 
			onmouseup = true;
			var drag = document.getElementById('drag');
			// shiftX = event.clientX;
			// shiftY = event.clientY;
			shiftX = event.pageX;
			shiftY = event.pageY;
			try { 
				drag.style.position = 'relative';
				drag.style.cursor = 'move';
				drag.style.zIndex = 999;
				
			}catch(e){
				onmouseup = false;
			}
		});
		$('#drag').on('touchstart', function (event) { 
			onmouseup = true;
			var drag = document.getElementById('drag');
			shiftX = event.touches[0].clientX;
			shiftY = event.touches[0].clientY;
			// shiftX = event.touches[0].pageX;
			// shiftY = event.touches[0].pageY;
			try { 
				
				drag.style.position = 'relative';
				drag.style.cursor = 'move';
				drag.style.zIndex = 999;
				
			}catch(e){
				onmouseup = false;
			}
		});
		

		function moveAt(X, Y) {
			X1 = X;
			Y1 = Y;
			let drag1 = document.getElementById('drag');
			drag1.style.transform = `translate(${X1}px, ${Y1}px) scale(3)`;
		}	


		$('#drag').on('mousemove', (event) => { 
			if (onmouseup) {
				try { 
				let X =  event.pageX - shiftX + X0;
				let Y =  event.pageY - shiftY + Y0;
					moveAt(X, Y);
				}catch(e){}

			}
		});
		$('#drag').on('touchmove', (e) => { 
			if (onmouseup) {
				try { 
				let X = e.touches[0].clientX - shiftX + X0;
				let Y = e.touches[0].clientY - shiftY + Y0;
					moveAt(X, Y);
				}catch(e){}

			}
		});

	

		$('#drag').on('mouseup', (event) => {
			onmouseup = false;
			// X0 = X1;
			// Y0 = Y1;
			X0 = 0;
			Y0 = 0;
			
			try { 
				drag.style.cursor = 'auto';
				drag.style.transform = `translate(0px, 0px) scale(3)`;
			}catch(e){}

		});
		$('#drag').on('touchend', (e) => {
			onmouseup = false;
			X0 = X1;
			Y0 = Y1;
			// X0 = 0;
			// Y0 = 0;
			
			try { 
				drag.style.cursor = 'auto';
				drag.style.transform = `translate(${X1}px, ${Y1}px) scale(3)`;
			}catch(e){}

		});
	
	
		// $('#drag').ondragstart = function() { //убрать курсор захваченной картинки
		//     // return false;
		// };
		$('#drag').on('dragstart', (e) => {
			e.preventDefault();
			// e.stopPropagation();
		});

};

// $('#drag').drop();
