
function slidePlaceholder(){

	var toCustom = document.querySelectorAll('.slidePlaceHolder input'+', .slidePlaceHolder textarea'+', .slidePlaceHolder select');

	for ( var i = 0 ; i < toCustom.length ; i++ ){

		var newPlaceholder = document.createElement('p');

		if(toCustom[i].getAttribute("data-placeholder") != undefined){
			newPlaceholder.innerHTML = toCustom[i].getAttribute("data-placeholder");
		}else{
			newPlaceholder.innerHTML = toCustom[i].placeholder;
		}

		if(toCustom[i].getAttribute("data-color") != undefined){
			newPlaceholder.style.color = toCustom[i].getAttribute("data-color");
			toCustom[i].style.borderBottomColor = toCustom[i].getAttribute("data-color");
		}else{
			newPlaceholder.style.color = "inherit";
		}

		if(toCustom[i].getAttribute("data-position") != undefined){
			switch (toCustom[i].getAttribute("data-position")) {
			  case "right":
				newPlaceholder.className = 'txtPlaceholder';	
				toCustom[i].parentNode.appendChild(newPlaceholder);
			    break;
			  case "left":
				newPlaceholder.className = 'txtPlaceholder';	
				toCustom[i].parentNode.insertBefore(newPlaceholder, toCustom[i]);
			    break;
			  case "bottom":
				newPlaceholder.className = 'txtPlaceholder';	
				toCustom[i].parentNode.appendChild(newPlaceholder);
			    break;
			  case "top":
				newPlaceholder.className = 'txtPlaceholder';	
				toCustom[i].parentNode.insertBefore(newPlaceholder, toCustom[i]);
			    break;
			  case "inside":
				newPlaceholder.className = 'txtPlaceholder';	
				newPlaceholder.style.position = 'absolute';	
				toCustom[i].parentNode.insertBefore(newPlaceholder, toCustom[i]);
			    break;
			}
		}else{
			newPlaceholder.className = 'txtPlaceholder';	
			toCustom[i].parentNode.insertBefore(newPlaceholder, toCustom[i]);
		}

		toCustom[i].addEventListener("keypress", CustomPlaceholderChange);
		toCustom[i].addEventListener("mousemove", CustomPlaceholderChange);
		toCustom[i].addEventListener("onfocus", CustomPlaceholderChange);
	}

}


function CustomPlaceholderChange(){
	if(this.value != ""){
		this.parentNode.querySelector(".txtPlaceholder").style.display = "block";
		if(this.getAttribute("data-position") == "right" || this.getAttribute("data-position") == "left" ){
			this.parentNode.querySelector(".txtPlaceholder").style.display = "inline-block";
		}
		this.parentNode.querySelector(".txtPlaceholder").classList.remove("txtPlaceholder_anim_disappear");
		this.parentNode.querySelector(".txtPlaceholder").classList.add("txtPlaceholder_anim_appear");
		this.parentNode.querySelector(".txtPlaceholder").removeEventListener("animationend", CustomPlaceholderEnd);
	}else{
		this.parentNode.querySelector(".txtPlaceholder").classList.remove("txtPlaceholder_anim_appear");
		this.parentNode.querySelector(".txtPlaceholder").classList.add("txtPlaceholder_anim_disappear");
		this.parentNode.querySelector(".txtPlaceholder").addEventListener("animationend", CustomPlaceholderEnd);
	}
}

function CustomPlaceholderEnd(e){
	this.style.display = "none";
}
