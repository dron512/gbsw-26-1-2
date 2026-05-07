$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,        // 자동 재생
        autoplaySpeed: 3000,   // 3초마다 전환
        dots: true,            // 하단 네비게이션 점 표시
        arrows: true,          // 좌우 화살표 표시
        infinite: true,        // 무한 반복
        fade: true,            // 페이드 효과 (선택사항)
        // cssEase: 'linear'
    });
});