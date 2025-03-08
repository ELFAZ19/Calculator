$(document).ready(function () {
    const $display = $('.value');
    const $buttons = $('button');

    $buttons.on('click', function () {
        const $button = $(this);
        const buttonValue = $button.data('button');

        try {
            if (buttonValue === 'C') {
                $display.val('');
            } else if (buttonValue === 'CE') {
                let string = $display.val();
                $display.val(string.substr(0, string.length - 1));
            } else if (buttonValue === '=') {
                if ($display.val() !== '') {
                    $display.val(eval($display.val()));
                }
            } else {
                $display.val($display.val() + buttonValue);
            }
        } catch (err) {
            $display.val('invalid Entry');
            setTimeout(() => $display.val(''), 1000);
        }
    });
});