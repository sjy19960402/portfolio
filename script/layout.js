
// 기본 이벤트 제거
   window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

$(function(){
    // nav가 상단으로 떨어진값을 변수에 저장
    const nav_Offset = $('.gnb').offset().top;
    console.log(nav_Offset);

    $(window).scroll(function(){ //화면을 스크롤하면 아래내용 동작
        let sPos = $(this).scrollTop(); //현재 세로 스크롤값을 변수에 담는다

        if(nav_Offset<=sPos){ //nav높이가 스크롤값보다 작거나 같으면
            $('.gnb').addClass('act'); //화면 상단 고정
        }else{
            $('.gnb').removeClass('act'); //그렇지 않으면 고정 해제
        }
        $('.gnb li a').removeClass('on');
        // article높이값을 세로스크롤 값 영역과 비교하여 해당 메뉴에 서식 on적용
        $('section article').each(function(i){
            let top = $(this).offset().top-400;

            if(sPos>=top){
                $('.gnb li a').removeClass('on');
                $('.gnb li').eq(i).find('a').addClass('on');
            }
        });
    });

    
});

// 페이지 선언    
var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({scrollTop:0},10);

// 마우스 휠 동작시 이벤트
$(window).on("wheel", function(e){

    if($html.is(":animated")) return;
 
    if(e.originalEvent.deltaY > 0){
        if(page== lastPage) return;
 
        page++;
    }else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;
 
        page--;
    }
    var posTop = (page-1) * $(window).height();
 
    $html.animate({scrollTop : posTop});
 
});
// web publishing tab mnu
$(function(){
    // 첫번째 메뉴 서식
    $('#tab_con > ul > li:first-child > a').addClass('t_on');

    // 두번째 메뉴 콘텐츠 보이도록
    $('#tab_con .c01').css('display','block')

    // 탭메뉴 클릭시 해당 메뉴 서식을 적용, 콘텐츠도 보이게 + 선택하지 않은 콘텐츠를 숨기고, 서식도 제거
    const tab_mnu = $('#tab_con > ul > li > a');
    tab_mnu.click(function(){
        $(this).addClass('t_on').parent().siblings().find('a').removeClass('t_on');

        $(this).next().show().parent().siblings().find('.con').hide();

        return false; // #새로고침 방지
    });

});



