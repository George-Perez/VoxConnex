
function scroll_to_class(element_class, removed_height) {
    var scroll_to = $(element_class).offset().top - removed_height;
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 0);
    }
}

function bar_progress(progress_line_object, direction) {
    var number_of_steps = progress_line_object.data('number-of-steps');
    var now_value = progress_line_object.data('now-value');
    var new_value = 0;
    if (direction == 'right') {
        new_value = now_value + (100 / number_of_steps);
    }
    else if (direction == 'left') {
        new_value = now_value - (100 / number_of_steps);
    }
    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function () {

    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function () {
        $.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function () {
        $.backstretch("resize");
    });

    /*
        Form
    */
    $('.f1 fieldset:first').fadeIn('slow');

    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.f1 .btn-next').on('click', function () {
        for (var i = 0; i <= 6; i++) {
            formValue[i] = $('.textfield-' + i).val();
        }

        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');
        var progress_line = $(this).parents('.f1').find('.f1-progress-line');

        // fields validation
        parent_fieldset.find('input[type="text"], input[type="password"], input[type="email"], input[type="number"], textarea').each(function () {
            if ($(this).val() == "") {
                if (!$(this).hasClass("optional")) {
                    $(this).addClass('input-error');
                    next_step = false;
                }
            }
            else {
                $(this).removeClass('input-error');

            }
        });
        // fields validation

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                // change icons
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                // progress bar
                bar_progress(progress_line, 'right');
                // show next step
                $(this).next().fadeIn();
                // scroll window to beginning of the form
                scroll_to_class($('.f1'), 20);
            });
        }

    });

    // previous step
    $('.f1 .btn-previous').on('click', function () {
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');
        var progress_line = $(this).parents('.f1').find('.f1-progress-line');

        $(this).parents('fieldset').fadeOut(400, function () {
            // change icons
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            // progress bar
            bar_progress(progress_line, 'left');
            // show previous step
            $(this).prev().fadeIn();
            // scroll window to beginning of the form
            scroll_to_class($('.f1'), 20);
        });
    });










    /*

    !!!!!!!!!!!!! ALL JOHNS CODE !!!!!!!!!!!!!!
    !!!!!!!!!!!!! USE AT OWN RISK !!!!!!!!!!!!!

    I tried to explain each function.... Hope this helps.
    v0.1

    CURRENTLY NOT FUNCTIONING CORRECTLY - 3/20/2018

    */

    //global variables for validation of f1 form
    var toggle = "";
    var formValue = [];

    // on submit click, go through each textfield- + i and valdiate the fields
    $('.f1').on('submit', function (e) {
            validateTextField('.f1');
    });

    //Nested this section to the next button. Now we get formValues the first time a user clicks next.
    ////get the original value of the focused element and store it in a global variable for later use
    //    for (var i = 0; i <= 6; i++) {
    //        formValue[i] = $('.textfield-' + i).val();
    //    }


  
    /*
    toggles validation on or off by storing a local variable of what the user types in (if anything),
    and then go through each text field to check to see if the original value of the text field
    stored in formValue matches what the user typed stored in the local variable, userValue.
    If they do not match then, set global variable toggle to "enabled".
    */
    function toggleValidation(textfieldclass) {
        var userValue = [];
        for (var i = 0; i <= 6; i++) {
            userValue[i] = $('.textfield-' + i).val();
        }
        if (userValue[i] != formValue[i]){
            toggle = "enabled";
        } else {
            toggle = "";
        }
    }

    ////phone validation with regular express and int instead of text
    //function togglePhoneValidation() {
    //if (phone number == valid) {
    //    toggle = "enabled";
    //} else {
    //      toggle = "";
    // spit out error message for phone
    //}
    

    ////email validation with regluar expression
    //function toggleEmailValidation() {
    //    if (emailaddress == valid) {
    //        toggle = "enabled";
    //    } else {
    //        toggle = "";
    //        spit out error message for email
    //    }
    //}

    ////first and last name validation with regular expression
    //function toggleContactValidation() {
    //    if (first and last name == valid) {
    //        toggle = "enabled";
    //    } else {
    //        toggle = "";
    //        spit out error message for first and last name
    //    }
    //}




    /*
    Checks if toggle is enabled. If enabled, then checks regular expression

    !!!!!!!!!!!!!!!!!!REGULAR EXPRESSION NOT SETUP YET!!!!!!!!!!!!!!!!!!!!!!!

    and checks to see if the value is empty. If it is, then add class 'input-error',
    stopping the user from completely filling out the form. Otherwise, continue to the next
    function.
    */
    function validateTextField(formname, textfieldid) {
        toggleValidation(textfieldid);
        if (toggle == "enabled") {
            if ($(textfieldid).val() == "") {
                e.preventDefault();
                $(textfieldid).addClass('input-error');
            }
            else {
                $(textfieldid).removeClass('input-error');
            }
            // fields validation	
        }
        else {
            /*
            This section disabled until can get the function to work correctly
            !!!!!!!!!!!!!!!!!CURRENTLY DISABLED!!!!!!!!!!!!!!!!!!!!!!!!!
            */
            //$(formclass).validate({
            //    invalidHandler: function (event, validator) {
            //        // 'this' refers to the form
            //        var errors = validator.numberOfInvalids();
            //        if (errors) {
            //            var message = errors == 1
            //                ? 'You missed 1 field. It has been highlighted'
            //                : 'You missed ' + errors + ' fields. They have been highlighted';
            //            $("div.error span").html(message);
            //            $("div.error").show();
            //        } else {
            //            $("div.error").hide();
            //        }
            //    }
            //});
        }

    }



});
