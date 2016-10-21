//Kyle Harkema
//For exercies 2 and 3
$( document ).ready(function() {

	$("body").append( "<button class='ui-button ui-widget ui-corner-all'>Get Data</button>" );
	$("body").append( "<p></p>");

	$("button").click(function() {
		$.ajax({
			url: "/fetch",
			type: "GET",
			data: {
				name: "Hey there lab7 pals!"
			}
		})
		
		.done(function (result) {
			console.log("Success!");
			$("p").html("<p> Data: " + result.content + "</p>");
		})
		
		.fail(function(xhr, status, errorThrown) {
			console.log("Failure");
			$("p").html("<p> Nothing there </p>");
		})
	});

});
