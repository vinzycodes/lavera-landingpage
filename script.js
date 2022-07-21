$(document).ready(function(){

    $(".pass-form").submit(function( event ) {
        if($('.pass').val() == 'andrevenue2k22'){
            $('.full-screen').fadeOut();
        }else{
            alert('Wrong Password');
        }
        event.preventDefault();
    });
       
});