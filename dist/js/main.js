(function($) {

    jQuery(document).on("ready", function() {

/*
* -----------------------------------------------------------------
*---------------------------Preloader---------------
* -----------------------------------------------------------------
*/

        var themeWindow = $(window);
        var pagebody = $('html, body');
        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            themeWindow.scrollTop(0);
        });

   

});
})(jQuery);