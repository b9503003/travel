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

        // 初始化
        showSlide(0);
        startSlideShow();

        // 表單提交處理
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`感謝您的訂閱！我們將發送最新旅遊資訊至: ${email}`);
            this.querySelector('input').value = '';
        });
