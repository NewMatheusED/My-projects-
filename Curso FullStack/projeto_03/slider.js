$(function(){

    var delay = 3000;
    var curIndex = 0
    var amt = $('.sobre-autor').length;
    
    initSlider();
    autoPLay();

    function initSlider(){
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width',sizeBoxSingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');


        for(var i = 0; i < amt; i++){
            if(i == 0 ){
                $('.slider-bullets').append('<span style="background-color: gray;"></span>')
            }else{
                $('.slider-bullets').append('<span></span>')
            }
        }
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170)');
        $('.scroll').stop().animate({scrollLeft:offSetX})
    }

    function autoPLay(){
        setInterval(() => {
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex); 
        }, delay);
    }

    $(window).resize(function(){
        $('.scroll').stop().animate({scrollLeft:0})
    })

})