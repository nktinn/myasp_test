//Details open/close

document.onclick = function (e) {
	var f = document.querySelector("details");
	var element = document.getElementById("caret");
    if (!e.target.classList.contains("detail__body") && !e.target.classList.contains("detail__summary") && !e.target.classList.contains("detail__summary_img") && !e.target.classList.contains("caret")) {
			if (f.open == true) {
				f.open = false;
 				element.classList.toggle("caret-up");
        	}
    	}
    else element.classList.toggle("caret-up");	
    };