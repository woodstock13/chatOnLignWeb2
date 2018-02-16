$(document).ready(function(){
	//Variables
	var myCurrentChannel = 0; 
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

	  //Init joinChat
	  $("button#joinID").on("click",function(){
			if(myCurrentChannel == 0){
				myCurrentChannel = $("input#idChannel").val();

				$("div#myConversation").css('visibility',"visible");
				$("h2#titleConversation").append(myCurrentChannel)
			}
			else{
					console.log("refresh!")
					location.reload();
				}
			
		});
		
		$("#envoyer_message").click(envoyerMessage);
		function envoyerMessage()
		{
			var message = $("#message").val();
			
			$("p#historique_message").append("<p  class=\"btn-primary\">" +  message + "</p>");
			$("#message").val("");
			$.post("xml/xmlChat.xml", function(result){
				ajouterMessageDansXML(result);
			}, "xml");
		}
});