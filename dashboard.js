$(document).ready(function() {
	lireHistorique();
	$("#envoyer_message").click(envoyerMessage);
});


function lireHistorique()
{
	$.post("xml/xmlChat.xml", function(result){
		//var r = $(result).find("status");
		traiteHistorique(result);
	}, "xml");
}


function traiteHistorique(Xreponse)
	{
		var Xstatus = $(Xreponse).find('message').each(function(){
			var idChannel = $(this).find('idChannel').text();
			var dateTime = $(this).find('dateTime').text();
			var idPseudo = $(this).find('idPseudo').text();
			var message = $(this).find('message').text();

			$("p#historique_message").append("<p  class=\"btn-primary\">" +  message + "</p>");

		});
	}


function envoyerMessage(){
		var message = $("#message").val();
		alert($.now());

		$("p#historique_message").append("<p  class=\"btn-primary\">" +  message + "</p>");

		
		$("#message").val("");

		$.post("xml/xmlChat.xml", function(result){

			ajouterMessageDansXML(result);
		
		}, "xml");

}

function ajouterMessageDansXML(xmlDoc){
			

		var xmlDoc2 = $(xmlDoc).find('messages');
		xmlDoc2.append('<message>' + "1" +'</message>');/*
			$(Xreponse).find('message').append('<idChannel>' + "principal" +'</idChannel>');
			$(Xreponse).find('message').append('<dateTime>'+ '1518795516807' +'</dateTime>');*/
}
