        // 漢堡選單功能
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('show');
        });

        // 英雄區域輪播功能
        const slides = document.querySelectorAll('.hero-slide');
        const controls = document.querySelectorAll('.hero-control');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            // 隱藏所有幻灯片
            slides.forEach(slide => slide.classList.remove('active'));
            controls.forEach(control => control.classList.remove('active'));
            
            // 顯示選定的幻灯片
            slides[index].classList.add('active');
            controls[index].classList.add('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            let next = currentSlide + 1;
            if (next >= slides.length) next = 0;
            showSlide(next);
        }

        // 點擊控制點切換幻灯片
        controls.forEach((control, index) => {
            control.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(index);
                startSlideShow();
            });
        });

        // 啟動自動輪播
        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        // 滾動效果
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(44, 62, 80, 0.95)';
                header.style.padding = '0.5rem 2rem';
            } else {
                header.style.background = '#2c3e50';
                header.style.padding = '1rem 2rem';
            }
        });

        // 景點卡片動畫
        const attractionCards = document.querySelectorAll('.attraction-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        attractionCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });



