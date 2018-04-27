$(document).ready(function() {

    var firstNum = '';
    var operator = '';
    var secondNum = '';
    var operatorPressed = false;


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

    $('.equal').on('click', function() {
        doMath(firstNum, secondNum);
        operatorPressed = false;
    })

    function doMath(firstNum, secondNum) {
        if (operator ==='plus') {
            $('#result').text(parseInt(firstNum) + parseInt(secondNum))
        } else if (operator === 'minus') {
            return firstNum.parseInt() + secondNum.parseInt()
        }
    }
    
    
    
});