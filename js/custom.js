//라이트박스
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
    window.open('sample_popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
});

//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").css("display","block");
    // $("#modal").show();
    // $("#modal").fadeIn();
    // $("#modal").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").css("display","none");
    // $("#modal").hide();
    // $("#modal").fadeOut();
    // $("#modal").slideUp();
});

//탭 메뉴
var $tab_list = $('.tab_menu');

$tab_list.find('ul ul').hide();
$tab_list.find('li.active>ul').show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);

//배너
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$('.gallery_img').slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$('.pause').on('click', function(){
    $('.gallery_img').slick('slickPause');
});

$('.play').on('click', function(){
    $('.gallery_img').slick('slickPlay');
});

$('.prev').on('click', function(){
    $('.gallery_img').slick('slickPrev');
});

$('.next').on('click', function(){
    $('.gallery_img').slick('slickNext');
});

//전체 메뉴
$(".tit .btn").click(function(){
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle();
    $(this).toggleClass("on");
});

// iOS 비디오 자동재생 지원
$(document).ready(function() {
    var video = document.querySelector('.background-video');
    
    if (video) {
        // iOS에서 비디오 재생을 위한 설정
        video.setAttribute('playsinline', true);
        video.setAttribute('webkit-playsinline', true);
        video.setAttribute('muted', true);
        
        // 비디오 로드 완료 후 재생 시도
        video.addEventListener('loadedmetadata', function() {
            var playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    // 비디오가 성공적으로 재생됨
                    console.log('Video started playing');
                }).catch(function(error) {
                    // 비디오 재생 실패 시 대체 배경 표시
                    console.log('Video autoplay failed:', error);
                    $('.video-fallback').show();
                });
            }
        });
        
        // 사용자 상호작용 후 비디오 재생 시도
        $(document).on('touchstart click', function() {
            if (video.paused) {
                video.play().catch(function(error) {
                    console.log('Video play failed on user interaction:', error);
                });
            }
        });
    }
});

// .contents2 터치 효과
$(document).ready(function() {
    // 터치 디바이스 감지
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // 터치 디바이스에서만 적용
        var $themeItems = $('.contents2 .theme .theme_box > div > div');
        
        $themeItems.on('touchstart', function(e) {
            e.preventDefault();
            $(this).addClass('touch-active');
        });
        
        $themeItems.on('touchend touchcancel', function(e) {
            e.preventDefault();
            var $this = $(this);
            
            // 터치 효과 지속 시간 (300ms)
            setTimeout(function() {
                $this.removeClass('touch-active');
            }, 300);
        });
    }
});

// 아코디언 기능 (960px 이하에서만 작동)
$(document).ready(function() {
    function initAccordion() {
        var $accordionItems = $('.sub3_contents1 .cont_1 > div');
        
        // 960px 이하에서만 아코디언 기능 활성화
        if ($(window).width() <= 960) {
            $accordionItems.off('click.accordion').on('click.accordion', function(e) {
                e.preventDefault();
                var $this = $(this);
                var $otherItems = $accordionItems.not($this);
                
                // 다른 아이템들 닫기
                $otherItems.removeClass('accordion-active');
                
                // 현재 아이템 토글
                $this.toggleClass('accordion-active');
                
                // 부드러운 스크롤 애니메이션 (열린 아이템으로 스크롤)
                if ($this.hasClass('accordion-active')) {
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: $this.offset().top - 50
                        }, 500);
                    }, 300);
                }
            });
        } else {
            // 960px 초과에서는 아코디언 기능 비활성화
            $accordionItems.off('click.accordion');
        }
    }
    
    // 초기 실행
    initAccordion();
    
    // 윈도우 리사이즈 시 재실행
    $(window).on('resize', function() {
        initAccordion();
    });
});

