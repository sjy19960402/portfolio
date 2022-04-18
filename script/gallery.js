

$(function(){

    /* total menu apply */
    $('.g_gnb > ul > li:first-child > a').addClass('g_act');

    $('.g_gnb > ul > li > a').click(function(){
      // $('.gnb a').removeClass('act');
      // $(this).addClass('act');

      $(this).addClass('g_act').parent().siblings().find('a').removeClass('g_act');
      return false;
    });

    /* menu click => class show, hide*/
    const total_mnu = $('.g_gnb > ul > li:first-child a');
    const uiux_btn = $('.g_gnb > ul > li:nth-child(2) a');
    const web_btn = $('.g_gnb > ul > li:nth-child(3) a');
    const logo_btn = $('.g_gnb > ul > li:nth-child(4) > a');
    const mockup_btn = $('.g_gnb > ul > li:last-child > a');

    total_mnu.click(function(){
      $('.total').hide();
      $('.total').fadeIn();
    });

    uiux_btn.click(function(){
      $('.total').hide();
      $('.uiux').fadeIn();
    });

    web_btn.click(function(){
      $('.total').hide();
      $('.webde').fadeIn();
    });

    logo_btn.click(function(){
      $('.total').hide();
      $('.logode').fadeIn();
    });

    mockup_btn.click(function(){
      $('.total').hide();
      $('.mock').fadeIn();
    });

    //갤러리 이미지 목록(li)에 마우스 오버시 캡션 나오게 하기
    $('.g_list > li').mouseenter(function(){ //마우스 오버시 동작
      $(this).find('.caption').stop().animate({'bottom':'0px'},300); //마우스 올린 li태그의 자손 caption
    });

    $('.g_list > li').mouseleave(function(){  //마우스 아웃시 동작
      $('.caption').stop().animate({'bottom':'-40px'},300);
    });

    //목록안의 img태그의 src값 불러오기
    $('.g_list > li').click(function(e){
      e.preventDefault();
      
      const img_url = $(this).find('img').attr('src');
      console.log(img_url); //이미지 src속성값이 출력되는지 확인한다.
      const title = $(this).find('.caption').text(); //캡션에 있는 텍스트값을 변수에 담는다.
      console.log(title);

      // let modal = "<div class='modal'><div><h3>"+title+"</h3><img src='"+img_url+"' alt=''><br><a href='#' title='닫기'><i class='fas fa-times'></a></div></div>";

      let modal = `<div class='modal'>
      <div><h3>${title}</h3>
      <img src='${img_url}' alt=''>
      <br>
      <a href='#' title='닫기'><i class='fas fa-times'></i></a>
      <i class='fas fa-angle-left'></i>
      <i class='fas fa-angle-right'></i>
      </div>
      </div>`;

      $('body').append(modal); //이미지를 body태그 안쪽의 뒤에 나오게한다.
      
      const img_h = $('.modal').find('img').height()+60;
      // console.log(img_h);
      // $('.modal h3').css({
      //   'position':'absolute',
      //   'top':img_h,
      //   'z-index':'1000'
      // });

      //좌, 우 버튼 클릭시 각각 해당하는 인덱스값을 구하여 이미지 변경하게 하기

      let i_num = $(this).index()+1; //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.....
      console.log(i_num);

      $('i.fa-angle-left').click(function(){ //1, 12, 11, 10, 9, 8, .......
        if(i_num==1){
          i_num=16;
        }else{
          i_num--;
        }
        // $('.modal img').attr('src','./images/img'+i_num+'.jpg');
        img_check(); //이미지 확장자를 체크해주는 함수
        $('.modal h3').text($('.g_list > li').eq(i_num-1).find('.caption').text());
      });

      $('i.fa-angle-right').click(function(){ //1, 2, 3, 4, 5, 6, 7, 8..
        if(i_num==16){
          i_num=1;
        }else{
          i_num++;
        }
        // $('.modal img').attr('src','./images/img'+i_num+'.jpg');
        img_check(); //이미지 확장자를 체크해주는 함수
        $('.modal h3').text($('.g_list > li').eq(i_num-1).find('.caption').text());
      });

      function img_check(){
          //jpg 확장자를 붙여준다.
          $('.modal img').attr('src','./images/img'+i_num+'.jpg'); 
        }

      //닫기 버튼 클릭시 모달윈도 숨기기s
      $('.modal a').click(function(){
        $('.modal').fadeOut();
        return false; // # 새로고침 방지
      });

      // return false;

    });
});