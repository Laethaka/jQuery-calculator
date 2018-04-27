$(document).ready(function() {

    var firstNum = '';
    var operator = '';
    var secondNum = '';
    var operatorPressed = false;



    // if (!operatorPressed) { //FIRST NUMBER INPUT
    //     $('.number').on('click', function () {
    //         firstNum += $(this).attr('value');
    //         $('#first-number').text(firstNum);
    //     })
    // } else { //SECOND NUMBER INPUT
    //     $('.number').on('click', function () {
    //         secondNum += $(this).attr('value');
    //         $('#second-number').text(secondNum);
    //     })
    // }

    $('.number').on('click', function () {
        if (!operatorPressed) { //OPERATOR HASN'T BEEN HIT
            firstNum += $(this).attr('value');
            $('#first-number').text(firstNum);
        } else {
            secondNum += $(this).attr('value');
            $('#second-number').text(secondNum);
        }
    })

    $('.operator').on('click', function() {
        operator += $(this).attr('value');
        $('#operator').text(operator);
        operatorPressed = true;
    })

    $('.equal').on('click')
    
    
    
});