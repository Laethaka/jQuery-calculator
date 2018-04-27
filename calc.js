$(document).ready(function() {

    var firstNum = '';

    $('.number').on('click', function () {
        firstNum+=$(this).attr('value');
        $('#first-number').text(firstNum);
    })
    
    
    
});