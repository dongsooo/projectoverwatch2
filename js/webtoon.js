


 const swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
     slidesPerView: 3,       // 한 번에 보여지는 슬라이드 개수
            slidesPerGroup: 3,      // 한 번에 넘길 슬라이드 개수
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });