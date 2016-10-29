$( document ).ready(function() {
     $( 'form' ).submit(function( event ) {
        event.preventDefault();
        var form = $( this );
        console.log( $( this ).serialize() );
		$.ajax({
            type: 'GET',
            url: '/people/'+ form.find(id_num).val(),
            data: form.serialize(),
            dataType: 'json',
            success: function(resp) {
                console.log(resp);
                var content = $("<p></p>").text(JSON.stringify(resp));
                $("body").append(content);
		}})
      .done(function(result){
      console.log('AJAX request succeeded...');
     

    })
    .fail(function(xhr, status, errorThrown) {
      console.log('AJAX request failed...');
    });
	});
})
