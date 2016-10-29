$( document ).ready(function() {
     $( 'form' ).submit(function( event ) {
        event.preventDefault();
        var form = $( this );
        console.log( $( this ).serialize() );
		$.ajax({
            type: 'POST',
            url: '/people',
            data: form.serialize(),
            dataType: 'json',
		})
		alert("Person Added")
	});
})

