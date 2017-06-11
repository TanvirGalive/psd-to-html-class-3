(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
         $("#content").append("<p>The page just loaded");



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	