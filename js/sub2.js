//스크롤 버튼
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
            scrollTop: 20000
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

//상세페이지 돋보기
$(document).ready(function () {
 
    var target = $('.target');
    var zoom = target.data('zoom');
 
    $(".p_img01")
        .on('mousemove', magnify)
        .prepend("<div class='magnifier'></div>")
        .children('.magnifier').css({
            "background": "url('" + target.attr("src") + "') no-repeat",
            "background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
        });
 
    var magnifier = $('.magnifier');
 
    function magnify(e) {
 
        var mouseX = e.pageX - $(this).offset().left;
        var mouseY = e.pageY - $(this).offset().top;
 
        if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
            magnifier.fadeIn(100);
        } else {
            magnifier.fadeOut(100);
        }
 
        if (magnifier.is(":visible")) {
 
            var rx = -(mouseX * zoom - magnifier.width() /2 );
            var ry = -(mouseY * zoom - magnifier.height() /2 );
 
            var px = mouseX - magnifier.width() / 2;
            var py = mouseY - magnifier.height() / 2;
 
            magnifier.css({
                left: px,
                top: py,
                backgroundPosition: rx + "px " + ry + "px"
            });
        }
    }
});

//돋보기 02
$(document).ready(function () {
 
    var targetS = $('.target02');
    var zoomS = targetS.data('zoom');
 
    $(".p_img02")
        .on('mousemove', magnify)
        .prepend("<div class='magnifier02'></div>")
        .children('.magnifier02').css({
            "background": "url('" + targetS.attr("src") + "') no-repeat",
            "background-size": targetS.width() * zoomS + "px " + targetS.height() * zoomS+ "px"
        });
 
    var magnifierS = $('.magnifier02');
 
    function magnify(e) {
 
        var mouseX = e.pageX - $(this).offset().left;
        var mouseY = e.pageY - $(this).offset().top;
 
        if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
            magnifierS.fadeIn(100);
        } else {
            magnifierS.fadeOut(100);
        }
 
        if (magnifierS.is(":visible")) {
 
            var rx = -(mouseX * zoomS - magnifierS.width() /2 );
            var ry = -(mouseY * zoomS - magnifierS.height() /2 );
 
            var px = mouseX - magnifierS.width() / 2;
            var py = mouseY - magnifierS.height() / 2;
 
            magnifierS.css({
                left: px,
                top: py,
                backgroundPosition: rx + "px " + ry + "px"
            });
        }
    }
});

//돋보기 03
$(document).ready(function () {
 
    var targetT = $('.target03');
    var zoomT = targetT.data('zoom');
 
    $(".p_img03")
        .on('mousemove', magnify)
        .prepend("<div class='magnifier03'></div>")
        .children('.magnifier03').css({
            "background": "url('" + targetT.attr("src") + "') no-repeat",
            "background-size": targetT.width() * zoomT + "px " + targetT.height() * zoomT+ "px"
        });
 
    var magnifierT = $('.magnifier03');
 
    function magnify(e) {
 
        var mouseX = e.pageX - $(this).offset().left;
        var mouseY = e.pageY - $(this).offset().top;
 
        if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
            magnifierT.fadeIn(100);
        } else {
            magnifierT.fadeOut(100);
        }
 
        if (magnifierT.is(":visible")) {
 
            // 3
            var rx = -(mouseX * zoomT - magnifierT.width() /2 );
            var ry = -(mouseY * zoomT - magnifierT.height() /2 );
 
            var px = mouseX - magnifierT.width() / 2;
            var py = mouseY - magnifierT.height() / 2;
 
            magnifierT.css({
                left: px,
                top: py,
                backgroundPosition: rx + "px " + ry + "px"
            });
        }
    }
});

//돋보기 04
$(document).ready(function () {
 
    var targetF = $('.target04');
    var zoomF = targetF.data('zoom');
 
    $(".p_img04")
        .on('mousemove', magnify)
        .prepend("<div class='magnifier04'></div>")
        .children('.magnifier04').css({
            "background": "url('" + targetF.attr("src") + "') no-repeat",
            "background-size": targetF.width() * zoomF + "px " + targetF.height() * zoomF+ "px"
        });
 
    var magnifierF = $('.magnifier04');
 
    function magnify(e) {
 
        var mouseX = e.pageX - $(this).offset().left;
        var mouseY = e.pageY - $(this).offset().top;
 
        if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
            magnifierF.fadeIn(100);
        } else {
            magnifierF.fadeOut(100);
        }
 
        if (magnifierF.is(":visible")) {
 
            var rx = -(mouseX * zoomF - magnifierF.width() /2 );
            var ry = -(mouseY * zoomF - magnifierF.height() /2 );
 
            var px = mouseX - magnifierF.width() / 2;
            var py = mouseY - magnifierF.height() / 2;
 
            magnifierF.css({
                left: px,
                top: py,
                backgroundPosition: rx + "px " + ry + "px"
            });
        }
    }
});


//수량 버튼 + 총 계
$(document).ready(function(){
    $('.btn_up').click(function(){
        var n = $('.btn_up').index(this);
        var num = $('.Quantity:eq('+n+')').val();
        var sum = $('.sum').val();
        var nu = num*1+1
        num = $('.Quantity:eq('+n+')').val(num*1+1);
        sum = $('.sum').val(12900*nu);
    });
});
$(document).ready(function(){
    $('.btn_down').click(function(){
        var n = $('.btn_down').index(this);
        var num = $('.Quantity:eq('+n+')').val();
        var sum = $('.sum').val();
        var nu = num*1-1
        if(num > 1){
           num = $('.Quantity:eq('+n+')').val(num*1-1);
            sum = $('.sum').val(12900*nu);
           }else{
               alert('더 이상 줄일수 없습니다.');
           };
    });
});


//리뷰 펼쳐보기
$(document).ready(function(){
    var review_pre = $('.review_pre'),
        review_full = $('.review_full');
    $(review_pre).click(function(){
        $(this).css('display','none');
        $(this).siblings(review_full).css('display','block');
    });
    $(review_full).click(function(){
        $(this).css('display','none');
        $(this).siblings(review_pre).css('display','flex');
    });
});













