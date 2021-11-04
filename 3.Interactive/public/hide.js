$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'media') {
            $('#cloud').hide();
            $('#cloud2').show();           
       }

       else {
            $('#cloud').show();
            $('#cloud2').hide();   
       }
   });
});