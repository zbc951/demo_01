    //header按鈕

$(function(){
    $('header button').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })

    $('header .search,header .search input').blur(function(){
        $('header .search').removeClass('active');
    })

    $('header .list').click(function(){
        if($('main').hasClass('twin')) {
            $('main').attr('class','single');
        } else {
            $('main').attr('class','twin');
        }

        $('.left').toggleClass('display');
    })
})

    //1100以下左列隱藏

$(function(){
    var wwd = window.innerWidth;
    if(wwd > 1100) {
        $('.list').addClass('active');
        $('.left').addClass('display');
        $('main').attr('class','twin');
    } else {
        $('.list').removeClass('active');
        $('.left').removeClass('display');
    }

    $(window).resize(function(){
        var wwd = window.innerWidth;
        if(wwd > 1100) {
            $('.list').addClass('active');
            $('.left').addClass('display');
            $('main').attr('class','twin');
        } else {
            $('.list').removeClass('active');
            $('.left').removeClass('display');
        }
    })
})

    //1100以下頁面拖動效果

$(function(){
    var drag = function(obj){  

        obj.bind("mousedown",start);  

        function start(event){  
            if(event.button == 0){//判斷是否點選滑鼠左鍵  
                gapX=event.clientX;
                startx = $(window).scrollLeft();  // scroll的初始位置

                //movemove事件必須繫結到$(document)上，滑鼠移動是在整個螢幕上的  
                $(document).bind("mousemove",move);  
                //此處的$(document)可以改為obj  
                $(document).bind("mouseup",stop);                           
            }  
            return false;//阻止預設事件或冒泡  
        }  
        function move(event){  
            var left = event.clientX-gapX; // 滑鼠移動的相對距離

            $(window).scrollLeft(startx - left );

            return false;//阻止預設事件或冒泡  
        }  
        function stop(){  
            //解繫結，這一步很必要，前面有解釋  
            $(document).unbind("mousemove",move);  
            $(document).unbind("mouseup",stop);  
        }  
    }  

    obj = $(".mainBox");  

    drag(obj);//傳入的必須是jQuery物件，否則不能呼叫jQuery的自定義函式 
})

    //左列點擊時頁面自動定位效果

$(function(){
    $('li').each(function(index){
        $('#btn'+index+'').click(function(){
            $('html,body').animate({
                scrollTop: $('#demo'+index+'').offset().top - 60
            }, 500)
        })
    })
})