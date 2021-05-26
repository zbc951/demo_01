$(function(){
    $('header button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('header .search,header .search input').blur(function(){
        $('header .search').removeClass('active');
    })
})

$(function(){
    var wwh = window.innerHeight;
    $('main').css('height',(String(wwh - 50) + 'px'));

    $(window).resize(function(){
        var wwh = window.innerHeight;
        $('main').css('height',(String(wwh - 50) + 'px'));
    })
})