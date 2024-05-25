$('button[name="opertaor_function"]').click(function () {
    var operator = $(this).data('id');
    var num_1 = $('input[name = "number_1"]').val();
    var num_2 = $('input[name = "number_2"]').val();
    var ans = 0;
    if (num_1 == "" || num_2 == "") {
        window.alert('Please Enter the Number');
    }
    else if (isNaN(num_1) || isNaN(num_2)) {
        window.alert('Please Enter the valid number');
    }
    if (operator == '+') {
        ans = parseFloat(num_1) + parseFloat(num_2);
    }
    else if (operator == '-') {
        ans = parseFloat(num_1) - parseFloat(num_2);
    }
    else if (operator == '*') {
        ans = parseFloat(num_1) * parseFloat(num_2);
    }
    else if (operator == '/') {
        if (num_2 == 0) {
            window.alert('Number 2 can not be 0');
        }
        ans = parseFloat(num_1) / parseFloat(num_2);
    }
    $('input[name = "output"]').val(ans.toFixed(2));
});