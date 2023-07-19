$(function(){
  //상단네비
 
var sta = 0;
$('.btn_all').click(function(){
  if (sta == 0) {
    $(this).addClass('on'); 
   //A set  $('.box').fadeIn();//
  // $('.box').animate({left:0})//
   $('.box1').addClass('on');
    sta = 1;
  }
  else {
      $(this).removeClass('on'); 
     // A set $('.box').fadeOut();//
     //$('.box').animate({left:'-100%'})//
     $('.box1').removeClass('on');
      sta = 0;
  }
})
/  //슬라이드
$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
 //달력
 $.datepicker.setDefaults({
  closeText: "닫기",
  prevText: "이전달",
  nextText: "다음달",
  currentText: "오늘",
  monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
  ],
  monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
  ],
  dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
  weekHeader: "주",
  dateFormat: "yy.m.d", // 날짜형태 예)yy년 m월 d일
  firstDay: 0,
  isRTL: false,
  showMonthAfterYear: true,
  yearSuffix: "년"
})

$(".datepicker").datepicker({
  minDate: 0
})

 //sec2공지사항 탭
 Vue.component('tabs', {
  template: `
        <div>
            <div class="tabs">
              <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

  data() {
    return { tabs: [] };
  },

  created() {

    this.tabs = this.$children;

  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    } } });



Vue.component('tab', {

  template: `

        <div v-show="isActive"><slot></slot></div>

    `,

  props: {
    name: { required: true },
    selected: { default: false } },


  data() {

    return {
      isActive: false };


  },

  computed: {

    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    } },


  mounted() {

    this.isActive = this.selected;

  } });


new Vue({
  el: '#root' });

//sec3이미지 롤 오버
$('#section3 .over').each(function(){
var img = $(this).find('img') 
var src_off = img.attr('src'); 
var src_on = src_off.replace('_off','_on')
//alert(src_off+src_on)

$(this).hover(function(){ 
img.attr('src',src_on);
},function(){
img.attr('src',src_off); 
})
})
//sec5 탭
$('.tabSet').each(function(){     

var anchor = $(this).find('.tabs a');
var anchor_on = $(this).find('.tabs a.on');
var phref_on =  anchor_on.attr('phref');
var this_panel = $(this).find('.panel')

$(phref_on).show();
anchor.each(function(){
   var phref = $(this).attr('phref');

    $(this).click(function(){
this_panel.hide();
      anchor.removeClass('on'); 
      $(phref).show();
      $(this).addClass('on');
      $("#section5 .regular").slick('setPosition');//탭 안 슬라이드 포지션 오류
  }) //click
}) //anchor
})  //tabSet

//sec5 슬라이드

$("#section5 .regular").slick({

infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
dots : false, 
responsive: [                   
 {  breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
       }
  }, {  breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 2,
           // 세로 방향 슬라이드 옵션
    }
}
  
]  //반응형 포인트 지정
});


//sec7 슬라이드
$("#section7 .regular2").slick({
infinite: true,
slidesToShow: 5,
slidesToScroll: 1,
dots : false, 
arrows:true,
responsive: [                   
{  breakpoint: 800,
   settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     rows: 2,
          // 세로 방향 슬라이드 옵션
   }
}
 
]  //반응형 포인트 지정
});



//모바일 슬라이드
if ($(window).width() < 850) {

$('#section1 .slider img').attr('src','images/slide_img_m.jpg');

}else {

$('#section1 .slider img').attr('src','images/slide_img.jpg');

}
$(window).resize(function(){
if ($(window).width() < 850) {

$('#section1 .slider img').attr('src','images/slide_img_m.jpg');

}else {

$('#section1 .slider img').attr('src','images/slide_img.jpg');

}
})//슬라이드닫기

//회원가입 팝업창


$('.popup a').each(function(){
    //a 자동 스크롤 작동 막기
    jQuery('.popup a').click(function () {
      return false;
});

//팝업창띄우기
   $('.pop').hide();
   $(this).click(function(){
     var ahref = $(this).attr('href');
     $('.pop').hide();
     $(ahref).fadeIn();
     $('.popup a').css({background:'none'});


     	//스크롤 막기
    // $('.pop-wrap').on('scroll touchmove mousewheel', function(event) {
     // event.preventDefault();
     // event.stopPropagation();
     // return false;
     // });

     $('.close').click(function(){
       $(ahref).fadeOut(500);
       // 배경 어둡게 삭제
        $('.shadow').hide();
      	//스크롤 막기 해제 
        //$('.pop-wrap').off('scroll touchmove mousewheel');	

       //jQuery('.popup a').click(function () {
        //return false;
  //});
         })
       

$(".shadow").show(); // 배경 어둡게
    
   })
})
// 팝업 자동 스크롤 작동 막기
const body = document.querySelector('body');
body.style.overflow = 'hidden'

//제휴업체


$(function(){
    $('.sub-contents-title .tabSet').each(function(){       
      var anchor = $(this).find('.sub-contents-title .tabs a');
      var anchor_on = $(this).find('.sub-contents-title .tabs a.on');
	  var phref_on =  anchor_on.attr('phref');
	  var this_panel = $(this).find('.panel')

      $(phref_on).show();
      anchor.each(function(){
           var phref = $(this).attr('phref');
		   
            $(this).click(function(){
				this_panel.hide();
              anchor.removeClass('on'); //$('.tabs a')
              $(phref).show();
              $(this).addClass('on');

          }) //click
       }) //anchor
     })  //tabSet
      
    })//전체

//일정달력 팝업

$(function(){

 $('#sub-cal.popup a').each(function(){
     $('#sub-cal .pop').hide();
     $(this).click(function(){
       var ahref = $(this).attr('href');
       $('#sub-cal .pop').hide();
       $(ahref).fadeIn();
       $('#sub-cal .popup a').css({background:'none'});

       $('#sub-cal .close').click(function(){
         $(ahref).fadeOut(500);
         $('.shadow').hide();
        })

        $(".shadow").show(); // 배경 어둡게


      
     })
 })

}) 

//설문조사 팝업

$(function(){

  $('.popup-s a').each(function(){
      $('.pop').hide();
      $(this).click(function(){
        var ahref = $(this).attr('href');
        $('.survey-pop .pop').hide();
        $(ahref).fadeIn();
        $('.popup-s a').css({background:'none'});
 
        $(' .close').click(function(){
          $(ahref).fadeOut(500);
          $('.shadow').hide();
            })
 
            $(".shadow").show(); // 배경 어둡게
    
        
      })
  })
 
 }) 
 


})//ready

