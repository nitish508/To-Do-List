
myFunction = function(){	
	 var ul = document.getElementsByClassName("list")[0];
	var candidate = document.getElementById("getInputValue");
	  var li = document.createElement("li");
	  var span = document.createElement("span");
	 li.setAttribute('clasas','itemNumber');
	 var txt = document.createTextNode("\u00D7");
		span.className = "close";
		 span.appendChild(txt);
	 if(candidate.value == ""){		 
		 //alert("Please Fill Items")
		 candidate.classList.add('Error');
		 window.setTimeout(function () { 
            document.getElementById("getInputValue").focus();
        }, 0);	
	 }else{
		 li.appendChild(document.createTextNode(candidate.value));
		li.appendChild(span);
		ul.appendChild(li);
			candidate.classList.remove('Error');
	 }	  
	 candidate.value = "";
	 span.onclick = function() {this.parentNode.remove();}
	
};