 // burger menu 

 const menu = document.getElementsByClassName('menu')[0]
 const navbarLinks = document.getElementsByClassName('navigation')[0]


 menu.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
 })

//Add card

var noti = document.querySelector('.icon');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')
			if(add > 7 ){
					  location.reload();
      }
	// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
     
			select.appendChild(clone);
			clone.lastElementChild.innerHtml = document.getElementsByTagName('a')
			

			
			if (clone) {
				noti.onmouseleave = ()=>{
					select.classList.toggle('display');
				}	
			}
		}) 
		}
	
// Scroll Animation code

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("title3").className = "slide";
    document.getElementById("title4").className = "slide";
    document.getElementById("title5").className = "slide";
    document.getElementById("title6").className = "slide";
    document.getElementById("title7").className = "slide";
    document.getElementById("title8").className = "slide";
}
  }

// validation  form js code

const valid = document.getElementById("name");
const error = document.getElementById("error");
const btn = document.getElementById("btn");
const Password = document.getElementById("Password");

  Valid =()=>{
      if(valid.value === "" || valid.value == null){
	error.innerText = "Named is required"; 
        btn.style.display = "none";
      }else if(valid.value.length >= 6){
 	error.innerText = "";
 	btn.style.display = "flex";
     }else if(valid.value.length >= 1){
 	error.innerText = "Name must be longer then 6"; 
	btn.style.display = "none";
      }else if(valid.value.length >= 2){
 	error.innerText = "Name must be longer then 6"; 
 	btn.style.display = "none";
      }else if(valid.value.length >= 3){
	error.innerText = "Name must be longer then 6"; 
 	btn.style.display = "none";
      }else if(valid.value.length >= 4){
 	error.innerText = "Name must be longer then 6"; 
 	btn.style.display = "none";
      }else if(valid.value.length >= 5){
	error.innerText = "Name must be longer then 6"; 
 	btn.style.display = "none";
      }
      
}

// button js code

btn.addEventListener("click", ()=>{
	if(valid.value === "" || valid.value == null){
		error.innerText = "validation is required"; 
		btn.style.display = "none";
	     }else if(Password.value === "" || Password.value == null){
		error.innerText = "Password is required"; 
		btn.style.display = "none";
	}
	})

// password js code

pass =()=>{
	 if(Password.value.length <= 8){
	      error.innerText = "password must be longer then 8"; 
	      btn.style.display = "none";
}else if (Password.value.length >= 8){
	error.innerText = ""
	btn.style.display = "flex";
}
}	



// Popup js code

const loginReg = document.querySelector('.loginReg');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');



loginReg.onmouseleave = ()=>{
	modal.classList.add("show") 
}
   
 close.addEventListener('click', ()=>{
  modal.classList.remove("show") 
  
})