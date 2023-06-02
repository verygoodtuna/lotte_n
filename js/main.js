$ (function () {

    $('.main_slide').on('init afterChange', function(e,s,c){
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.mslide_btn .page span').text(c ? (c+1) : 1);
        $('.mslide_btn .page strong').text(s.slideCount);

        console.log(s.slideCount);

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        fade: true,
    });

    $('.mslide_btn .prev').on('click', function(){
        $('.main_slide').slick('slickPrev')
    })

    $('.mslide_btn .next').on('click', function(){
        $('.main_slide').slick('slickNext')
    })

    $('.mslide_btn .play').on('click', function (){
        $('.main_slide').slick('slickPlay')
    })

    $('.mslide_btn .stop').on('click', function (){
        $('.main_slide').slick('slickPause')
    })
        
});