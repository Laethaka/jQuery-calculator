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
        if (firstNum.length>0) {
            operator = $(this).attr('value');
            $('#operator').text(operator);
            operatorPressed = true;
        }
    })

    $('.equal').on('click', function() {
        doMath(firstNum, secondNum);
        operatorPressed = false;
    })

    $('.clear').on('click', function() {
        $('#first-number').empty();
        $('#operator').empty();
        $('#second-number').empty();
        $('#result').empty();
        firstNum = '';
        secondNum = '';
        operator = '';
        result = '';
    })

    function doMath(firstNum, secondNum) {
        if (operator ==='plus') {
            $('#result').text(parseInt(firstNum) + parseInt(secondNum))
        } else if (operator === 'minus') {
            $('#result').text(parseInt(firstNum) - parseInt(secondNum))
        } else if (operator === 'times') {
            $('#result').text(parseInt(firstNum) * parseInt(secondNum))
        } else if (operator === 'divide') {
            $('#result').text(parseInt(firstNum) / parseInt(secondNum))
        } else if (operator === 'power') {
            $('#result').text(parseInt(firstNum) ** parseInt(secondNum))
        }
    }
    
    
    
});