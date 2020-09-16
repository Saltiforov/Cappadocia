$(function(){
    $('.fairy-tail__slider').slick({
        prevArrow:'<button type="button" class="slick-next slick-btn"><img src="images/next-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-prev slick-btn"><img src="images/prev-arrow.svg" alt=""></button>',
        fade: true,
        responsive: [
            {
                breakpoint:601,
                settings: {
                    arrows:false
                }
            }
        ]
    });
    $('.our-trip__slider').slick({
        prevArrow:'<button type="button" class="slick-next slick-btn"><img src="images/next-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-prev slick-btn"><img src="images/prev-arrow.svg" alt=""></button>',
        // fade: true
        responsive: [
            {
                breakpoint:601,
                settings: {
                    arrows:false
                }
            }
        ]
    });
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */
        $('html, body').animate({scrollTop: dn}, 1000);
        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});
