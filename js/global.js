$(document).ready(function(){
	//Variables
	var myLogin = "root" 
	var myPassWord = "root"
	console.log("hello")
	
	//Check auth
	$("button#validateID").on("click",function(){
		console.log("myLogin")
		if( (($("input#password").val()) == myPassWord) && (($("input#login").val()) == myLogin)){
			console.log("ok");
			$(location).attr('href',"./homePage.html");
		}else{
			alert("mauvais ID, try again!")
		}
	  });

	  //createChat
	  $("button").on("click",function(){
		console.log("helloConnexion")
		
	  });
	  
	
});