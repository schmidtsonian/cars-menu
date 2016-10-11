/// <reference path="definitions/jquery/jquery.d.ts" />
/// <reference path="Loader.ts"/>


//TODO: Refactor this shiet!!!
$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport: any = {
        top : win.scrollTop() + 300,
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + (win.height() - 300);
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return ( !(
      viewport.right < bounds.left || 
      viewport.left > bounds.right || 
      viewport.bottom < bounds.top || 
      viewport.top > bounds.bottom ));
    
};

//TODO: apply debounce on resize
$(window).on('load scroll resize', function(){
    $('.js-block').each(function(i) {
      
        var $el: any = $('.js-block').eq(i);
        if( $el.isOnScreen() ){
          $el.addClass('visible')
        }else{
          $el.removeClass('visible')
        }
    });
});
$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});
module app.menu{

    import Loader =  app.menu.Loader;

    export class Main{


        private loader: Loader;

        constructor(){

            this.loader = new Loader()
        }

        init() {

            this.loader.onLoadAllCallback = () => {
                $('#js-spinner').addClass('spinner--close')

                setTimeout(()=>{
                    $('#js-spinner').remove();
                    $('body').removeClass('js-loading');
                }, 1650)
            };
            this.loader.init();
        }

    }

    // Init all stuff.
    export const mainView = new Main();
    mainView.init();
}