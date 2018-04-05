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


    //$('.btn-submit').on('click', function () {
    //    var parent_fieldset = $(this).parents('fieldset');
    //    var next_step = true;

    //    // fields validation
    //    parent_fieldset.find('input[type="text"], input[type="password"], input[type="email"], input[type="number"], textarea').each(function () {
    //        if ($(this).val() == "") {
    //            if (!$(this).hasClass("optional")) {
    //                $(this).addClass('input-error');
    //                next_step = false;
    //            }
    //        }
    //        else {
    //            $(this).removeClass('input-error');

    //        }
    //    });







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

    // on submit click, go through each textfield- + i and each field validation to valdiate the fields for the user
    $('.btn-submit').on('click', function (e) {
        toggleCompanyName();
        toggleContactName();
        togglePhoneNumber();
        toggleEmailInfo();
        toggleStreet1();
        toggleCityName();
        toggleState();
        toggleZipcode();
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
        if (userValue[i] != formValue[i]) {
            toggle = "enabled";
        } else {
            toggle = "";
        }
    }

 //validation for EACH element!! Why George... Why does it not work on your computer?
    function toggleHowManyNumbersPorting() {
        if ($('.how-many-numbers-porting').val() == "") {
            toggle = "enabled";
            $('.invalid-howmanynumbersporting').css('display', 'block');
            $('.valid-howmanynumbersporting').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-howmanynumbersporting').css('display', 'none');
            $('.valid-howmanynumbersporting').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.btn-next').on('click', function () {
        toggleHowManyNumbersPorting();
    });
    $('.how-many-numbers-porting').on('click change', function () {
        toggleHowManyNumbersPorting();
    });

    function toggleHowManyUsersInt() {
        if ($('.how-many-users').val() == "") {
            toggle = "enabled";
            $('.invalid-tooltip').css('display', 'block');
            $('.valid-tooltip').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-tooltip').css('display', 'none');
            $('.valid-tooltip').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.btn-next2').on('click', function () {
        toggleHowManyUsersInt();
    });
    $('.how-many-users').on('click change', function () {
        toggleHowManyUsersInt();
    });

    function toggleCompanyName() {
        if ($('.company-name').val() == "") {
            toggle = "enabled";
            $('.invalid-companyname').css('display', 'block');
            $('.valid-companyname').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-companyname').css('display', 'none');
            $('.valid-companyname').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.company-name').on('click change', function () {
        toggleCompanyName();
    });

    function toggleContactName() {
        if ($('.contact-name').val() == "") {
            toggle = "enabled";
            $('.invalid-contactname').css('display', 'block');
            $('.valid-contactname').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-contactname').css('display', 'none');
            $('.valid-contactname').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.contact-name').on('click change', function () {
        toggleContactName();
    });


    function togglePhoneNumber() {
        if ($('.phone').val() == "") {
            toggle = "enabled";
            $('.invalid-phone').css('display', 'block');
            $('.valid-phone').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-phone').css('display', 'none');
            $('.valid-phone').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.phone').on('click change', function () {
        togglePhoneNumber();
    });


    function togglePhoneNumber() {
        if ($('.phone').val() == "") {
            toggle = "enabled";
            $('.invalid-phone').css('display', 'block');
            $('.valid-phone').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-phone').css('display', 'none');
            $('.valid-phone').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.phone').on('click change', function () {
        togglePhoneNumber();
    });


    function toggleEmailInfo() {
        if ($('.emailinfo').val() == "") {
            toggle = "enabled";
            $('.invalid-emailinfo').css('display', 'block');
            $('.valid-emailinfo').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-emailinfo').css('display', 'none');
            $('.valid-emailinfo').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.emailinfo').on('click change', function () {
        toggleEmailInfo();
    });


    function toggleStreet1() {
        if ($('.street1').val() == "") {
            toggle = "enabled";
            $('.invalid-street1').css('display', 'block');
            $('.valid-street1').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-street1').css('display', 'none');
            $('.valid-street1').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.street1').on('click change', function () {
        toggleStreet1();
    });



    function toggleCityName() {
        if ($('.cityname').val() == "") {
            toggle = "enabled";
            $('.invalid-cityname').css('display', 'block');
            $('.valid-cityname').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-cityname').css('display', 'none');
            $('.valid-cityname').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.cityname').on('click change', function () {
        toggleCityName();
    });


    function toggleState() {
        if ($('.state').val() == "") {
            toggle = "enabled";
            $('.invalid-state').css('display', 'block');
            $('.valid-state').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-state').css('display', 'none');
            $('.valid-state').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.state').on('click change', function () {
        toggleState();
    });


    function toggleZipcode() {
        if ($('.zipcode').val() == "") {
            toggle = "enabled";
            $('.invalid-zipcode').css('display', 'block');
            $('.valid-zipcode').css('display', 'none');
        } else {
            toggle = "";
            $('.invalid-zipcode').css('display', 'none');
            $('.valid-zipcode').css('display', 'block').delay(2000).fadeOut("slow");
        }
    }
    $('.zipcode').on('click change', function () {
        toggleZipcode();
    });


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
        }
    }



});
