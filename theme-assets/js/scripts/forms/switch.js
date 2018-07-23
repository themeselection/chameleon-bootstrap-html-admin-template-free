/*=========================================================================================
    File Name: switch.js
    Description: Switchery are best switches with many options.
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/
(function(window, document, $) {
  'use strict';
  var $html = $('html');

    // Switchery
    var i = 0;
    if (Array.prototype.forEach) {

        var elems = $('.switchery');
        $.each( elems, function( key, value ) {
            var $size="", $color="", $secondaryColor ="", $sizeClass="", $colorCode="", $secondaryColorCode="";
            $size = $(this).data('size');
            var $sizes ={
                'lg' : "large",
                'sm' : "small",
                'xs' : "xsmall"
            };
            if($(this).data('size')!== undefined){
                $sizeClass = "switchery switchery-"+$sizes[$size];
            }
            else{
                $sizeClass = "switchery";
            }

            $color = $(this).data('color');
            var $colors ={
                'primary' : "#6967ce",
                'success' : "#76dd6a",
                'danger' : "#fa626b",
                'warning' : "#fdb901",
                'info' : "#28afd0"
            };
            if($color !== undefined){
                $colorCode = $colors[$color];
            }
            else{
                $colorCode = "#fa626b";
            }

            var switchery = new Switchery($(this)[0], { className: $sizeClass, color: $colorCode, secondaryColor: $secondaryColorCode });
        });
    } else {
        var elems1 = document.querySelectorAll('.switchery');

        for (i = 0; i < elems1.length; i++) {
            var $size = elems1[i].data('size');
            var $color = elems1[i].data('color');
            var switchery = new Switchery(elems1[i], { color: '#37BC9B' });
        }
    }
    /*  Toggle Ends   */

})(window, document, jQuery);