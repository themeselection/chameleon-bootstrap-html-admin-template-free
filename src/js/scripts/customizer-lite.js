/*=========================================================================================
  File Name: customizer.js
  Description: Template customizer js.
  ----------------------------------------------------------------------------------------
  Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
  Version: 1.0
  Author: ThemeSelection
  Author URL: https://themeselection.com/
==========================================================================================*/

(function(window, document, $) {
    'use strict';

    /********************************
    *           Customizer          *
    ********************************/
    // Customizer toggle & close button click events  [Remove customizer code from production]
    $('.customizer-toggle').on('click',function(){
        $('.customizer').toggleClass('open');
    });
    $('.customizer-close').on('click',function(){
        $('.customizer').removeClass('open');
    });
    // if($('.customizer-content').length > 0){
    //     $('.customizer-content').perfectScrollbar({
    //         theme:"dark"
    //     });
    // }

    /************************************
    *           Layout Options          *
    ************************************/
    var body = $('body'),
    header_navbar      = $('nav.header-navbar'),
    horz_header_navbar = $('div.header-navbar'),
    footer             = $('footer'),
    menu               = $('.main-menu'),
    menu_content       = $('.main-menu-content'),
    menu_type          = body.data('menu'),
    scroll_theme       = ($('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark',
    horz_layout        = false,
    semiLight          = false,
    semiDark           = false;

    if(header_navbar.hasClass('navbar-semi-light')){
        semiLight = true;
    }
    if(header_navbar.hasClass('navbar-semi-dark')){
        semiDark = true;
    }    

    if(menu_type == 'horizontal-menu'){
        horz_layout = true;
        $('.sidebar-color-options').hide().prev('h5').hide().prev('hr').hide();
        $('.cz-bg-image').hide().prev('h5').hide().prev('hr').hide();
        $('.sidebar-image-visibility').hide().prev('h5').hide();
    }

    if(menu_type === 'vertical-overlay-menu'){
        $('.color-options a#color-opt-3').tab('show');
        if( menu_type === 'vertical-content-menu' ){
            $('.color-options a#color-opt-4').tab('show');
        }
        if( menu_type === 'vertical-compact-menu' || menu_type === 'vertical-overlay-menu' ){
            $('#boxed-layout').parent('.custom-checkbox').attr('style','display: none !important');
        }
        $('.color-options .nav-semi-light').parent('.nav-item').attr('style','display: none !important');
        $('.color-options .nav-semi-dark').parent('.nav-item').attr('style','display: none !important');
    }
    
    // Layouts

    // If overlay menu template then collapsed sidebar should be checked by default
    if(menu_type === 'vertical-overlay-menu'){
        $('#collapsed-sidebar').prop('checked', true);
        $('#static-layout').parent('.custom-checkbox').attr('style','display: none !important');
        $('#static-navigation').parent('.custom-checkbox').attr('style','display: none !important');
    }

    var sidebarCollapsed = document.querySelector('#collapsed-sidebar');
    $('#collapsed-sidebar').on('change',function(){

        // console.log(sidebarCollapsed.checked);
        // Toggle menu
        $.app.menu.toggle();

        setTimeout(function(){
            $(window).trigger( "resize" );
        },100);
    });


    $('#fixed-layout').on('click',function(){
        // if($('#boxed-layout').prop('checked') === true){
        //     $('#boxed-layout').trigger('click');
        // }
        if( $(this).prop('checked') === true ){
            if( !body.hasClass('fixed-navbar') && horz_layout === false ){
                body.addClass('fixed-navbar');
            }
            if( !header_navbar.hasClass('fixed-top') && horz_layout === false ){
                header_navbar.addClass('fixed-top');
            }
            if( !footer.hasClass('fixed-bottom')){
                footer.addClass('fixed-bottom');
            }
            if( !horz_header_navbar.hasClass('navbar-fixed') && horz_layout === true){
                horz_header_navbar.addClass('navbar-fixed');
            }
            if( !horz_header_navbar.hasClass('menu-fixed')){
                horz_header_navbar.addClass('menu-fixed');
            }
            if( !menu.hasClass('menu-fixed')){
                menu.addClass('menu-fixed');
            }
            // menu_content.perfectScrollbar({
            //   suppressScrollX: true,
            //   theme: scroll_theme
            // });
            body.removeClass('boxed-layout');
            header_navbar.removeClass('navbar-static-top');
            horz_header_navbar.removeClass('navbar-static');
            menu.removeClass('menu-static');
            footer.removeClass('footer-static');
            body.removeClass('container');
            header_navbar.removeClass('container');
            header_navbar.removeClass('boxed-layout');
            // horz_header_navbar.removeClass('menu-fixed');
        }
        else{
            footer.removeClass('fixed-bottom');
        }
    });

    $('#boxed-layout').on('click',function(){
        if($('#fixed-layout').prop('checked') === true){
            $('#fixed-layout').trigger('click');
        }
        if( $(this).prop('checked') === true ){
            if( !body.hasClass('container boxed-layout') ){
                body.addClass('container boxed-layout');
            }
            if( !header_navbar.hasClass('container boxed-layout') ){
                header_navbar.addClass('container boxed-layout');
            }
            if( !menu.hasClass('menu-fixed') ){
                menu.addClass('menu-fixed');
            }
            // menu_content.perfectScrollbar({
            //   suppressScrollX: true,
            //   theme: scroll_theme
            // });
            header_navbar.removeClass('navbar-static-top');
            menu.removeClass('menu-static');
            footer.removeClass('footer-static');
            footer.removeClass('fixed-bottom');
        }
        else{
            body.removeClass('container boxed-layout');
            header_navbar.removeClass('container boxed-layout');
        }
    });

    $('#static-layout').on('click',function(){
        if( $(this).prop('checked') === true ){
            if( !header_navbar.hasClass('navbar-static-top') ){
                header_navbar.addClass('navbar-static-top');
            }
            if( !menu.hasClass('menu-static') ){
                menu.addClass('menu-static');
            }
            if( !footer.hasClass('footer-static')){
                footer.addClass('footer-static');
            }
            if(horz_layout === true){
                horz_header_navbar.unstick();
                horz_header_navbar.addClass('navbar-static');
            }
            body.removeClass('fixed-navbar');
            body.removeClass('container');
            body.removeClass('boxed-layout');
            header_navbar.removeClass('fixed-top');
            header_navbar.removeClass('container');
            header_navbar.removeClass('boxed-layout');
            horz_header_navbar.removeClass('menu-fixed');
            menu.removeClass('menu-fixed');
            footer.removeClass('fixed-bottom');
            $.app.menu.manualScroller.disable();
        }
        else{
            if(horz_layout === false){
                body.addClass('fixed-navbar');
                menu.removeClass('menu-static').addClass('menu-fixed');
                header_navbar.removeClass('navbar-static-top').addClass('fixed-top');
            }
            if(horz_layout === true){
                horz_header_navbar.sticky();
                horz_header_navbar.removeClass('navbar-static').addClass('navbar-fixed');
            }
            footer.removeClass('footer-static');
            $.app.menu.manualScroller.enable();
        }
    });

    $('#right-side-icons').on('click',function(){
        if(!menu.hasClass('menu-icon-right')){
            menu.addClass('menu-icon-right');
        }
        else{
            menu.removeClass('menu-icon-right');
        }

        if(horz_layout === true){
            if(!horz_header_navbar.hasClass('navbar-icon-right')){
                horz_header_navbar.addClass('navbar-icon-right');
            }
            else{
                horz_header_navbar.removeClass('navbar-icon-right');
            }
        }
    });


    /*******************************************
    *           Change Background Image        *
    *******************************************/
    $('.cz-bg-image img').on('click',function(){
        var $this = $(this),
        src = $this.attr('src');

        $('.navigation-background').css('background-image', 'url(' + src + ')');
        $this.closest('.cz-bg-image').find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    var navBackground = document.querySelector('#toggle-sidebar-bg-img');
    $('#toggle-sidebar-bg-img').on('change',function(){
        if(navBackground.checked === true){
            $('.navigation-background').css('display','block');
        }
        else{
            $('.navigation-background').css('display','none');
        }
    });


    /****************************************
    *           Change menu bg color        *
    ****************************************/
    function setSwitchery(switchElement, checkedBool) {
        if (checkedBool && (!switchElement.is(':checked')))  { // switch on if not on
            $(switchElement).trigger('click').attr("checked", "checked");
        } else if (!checkedBool && switchElement.checked) { // switch off if not off
            $(switchElement).trigger('click').removeAttr("checked");
        }
    }
    // var element = $('#sidebar-color-option');
    var element = $('#sidebar-color-option');
    if($('.main-menu').hasClass('menu-dark')){
        setSwitchery(element, true);
    }
    else{
        setSwitchery(element, false);
        
    }

    var menuBackground = document.querySelector('#sidebar-color-option');
    $('#sidebar-color-option').on('change',function(){
        if(menuBackground.checked === true){
            $('.main-menu').removeClass('menu-dark menu-light').addClass('menu-dark');
        }
        else{
            $('.main-menu').removeClass('menu-dark menu-light').addClass('menu-light');
        }
    });

    /******************************************
    *           Change Navbar bg color        *
    ******************************************/
    var activeNavbarColor = $('body').data('color');
    $('.navbar-color-options').find('.' + activeNavbarColor).addClass('active');
    
    $('.navbar-color-option').on('click',function(){
        var $this = $(this);
        var navbarColor = $this.data('bg');
        

        $('body').attr('data-color', navbarColor);
        $this.closest('.navbar-color-options').find('.active').removeClass('active');
        $this.addClass('active');
    });
    

    function changeLogo(logo){
        if(logo == 'light'){
            $('.brand-logo').attr('src','../../../app-assets/images/logo/logo.png');
        }
        else{
            $('.brand-logo').attr('src','../../../app-assets/images/logo/logo.png');
        }
    }

    $(document).ready(function(){
        var url = $(location). attr("href");
        $('#twitter').sharrre({
            share: {
                twitter: true
            },
            enableHover: false,
            enableTracking: false,
            enableCounter: false,
            buttons: { twitter: {via: 'ThemeSelection'}},
            click: function(api, options){
                api.simulateClick();
                api.openPopup('twitter');
            },
            template: '<i class="fa fa-twitter"></i> Twitter',
            url: url
        });

        $('#facebook').sharrre({
            share: {
                facebook: true
            },
            enableHover: false,
            enableTracking: false,
            enableCounter: false,
            click: function(api, options){
                api.simulateClick();
                api.openPopup('facebook');
            },
            template: '<i class="fa fa-facebook-square"></i> Facebook',
            url: url
        });

        $('#google').sharrre({
            share: {
                googlePlus: true
            },
            enableCounter: false,
            enableHover: false,
            enableTracking: true,
            click: function(api, options){
                api.simulateClick();
                api.openPopup('googlePlus');
            },
            template: '<i class="fa fa-google-plus"></i> Google',
            url: url
        });
    });
    
})(window, document, jQuery);