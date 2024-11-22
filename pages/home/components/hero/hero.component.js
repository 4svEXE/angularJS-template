angular.module('pages')
    .component('heroSection', {
        templateUrl: 'pages/home/components/hero/hero.template.html',
        controller: function HeroController($timeout) {
            const vm = this;

            vm.slides = [
                { image: 'https://via.placeholder.com/800x400?text=Slide+1', caption: 'Slide 1 Caption' },
                { image: 'https://via.placeholder.com/800x400?text=Slide+2', caption: 'Slide 2 Caption' },
                { image: 'https://via.placeholder.com/800x400?text=Slide+3', caption: 'Slide 3 Caption' },
                { image: 'https://via.placeholder.com/800x400?text=Slide+4', caption: 'Slide 4 Caption' },
                { image: 'https://via.placeholder.com/800x400?text=Slide+5', caption: 'Slide 5 Caption' },
            ];

            vm.$postLink = function () {
                $timeout(function () {
                    new Swiper('.swiper', {
                        loop: true,
                        autoplay: {
                            delay: 8000,
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
                });
            };
        }
    });
