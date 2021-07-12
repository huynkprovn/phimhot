fetch('./js/LASTEST.json')
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        for (let i = 16; i < 19; i++) {
            $('.owl-carousel').append(
                `<a href="#">
                <div class="slider-image" style="background-image: url(${data.phim.phimbo[i].imageUrl})">
                    <div class="image-overlay">
                        <h3 class="slider-title">${data.phim.phimbo[i].title}</h3>
                    </div>
                </div>
                </a>
                <a href="#">
                    <div class="slider-image" style="background-image: url(${data.phim.phimle[i].imageUrl})">
                        <div class="image-overlay">
                            <h3 class="slider-title">${data.phim.phimle[i].title}</h3>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="slider-image" style="background-image: url(${data.phim.phimchieurap[i].imageUrl})">
                        <div class="image-overlay">
                            <h3 class="slider-title">${data.phim.phimchieurap[i].title}</h3>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="slider-image" style="background-image: url(${data.phim.phimhoathinh[i].imageUrl})">
                        <div class="image-overlay">
                            <h3 class="slider-title">${data.phim.phimhoathinh[i].title}</h3>
                        </div>
                    </div>
                </a>`
            )
        }
        $(".owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            // autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 10
                },
                490: {
                    items: 2,
                    margin: 10
                },
                700: {
                    items: 3,
                    margin: 70
                },
                1000: {
                    items: 4,
                    margin: 20
                },
                1200: {
                    items: 5,
                    margin: 80
                }
            }
        });
    })