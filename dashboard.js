$(document).ready(function() {
	$("#envoyer_message").click(envoyerMessage);
});

function envoyerMessage(){
		var message = $("#message").val();
		alert(message);

		$("p#historique_message").append("<p  class=\"btn-primary\">" +  message + "</p>");

		
		$("#message").val("");

		$.post("xml/xmlChat.xml", function(result){

			ajouterMessageDansXML(result);
		
		}, "xml");

}

function ajouterMessageDansXML(Xreponse){
	
			xmlDoc.append('<customer></customer>');
}