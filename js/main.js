// 스크롤 버튼
$(document).ready(function(){
    $('.scroll_top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
});
$(document).ready(function(){
    $('.scroll_bottom').click(function () {
        $('body,html').animate({
            scrollTop: 7000
        }, 1000);
    });
});


// 메뉴 스크롤 반응
$(document).ready(function(){
    var logo = $('#header  > .logo'),
        miniLogo = $('#header  > .mini_logo')
     $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                logo.fadeOut();
                miniLogo.fadeIn();
                $('#header').css({'height':'100px','background-color':'rgba(255,255,255,0.6)'});
                $('#header > ul').css('padding-top','0px');
            } else {
                logo.fadeIn();
                miniLogo.fadeOut();
                $('#header').css({'height':'215px','background-color':'rgba(255,255,255,0)'});
                $('#header > ul').css('padding-top','115px');
            }
        });
    });
});

//검색창
$(document).ready(function(){
    $('.search').mouseover(function(){
        $('.search input').css('width','100px');
    });
    $('.search').mouseleave(function(){
        $('.search input').css('width','0px');
    });
});