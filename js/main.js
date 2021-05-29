/*global $, console, window alert */

$(function () {
    'use strict';

    //scroll to top
    
    var scrollToTop =  $(".scroll-to-top");
        
    $(window).scroll(function () {
           
        if ($(window).scrollTop() >= 1000) {
                
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);
        }
    });
        
        
    scrollToTop.click(function (e) {
           
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
            
    });
    
        // Add Nice Scroll
    
    $("body").niceScroll();
    
    // Start Navbar 
    $(window).scroll(function () {
       
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    
    // Deal With Tabs 
    $('.tabs-section .switch-tab li').click(function () {
       
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-content > div').hide();
        $($(this).data('class')).show();
    });
    
});