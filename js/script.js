$(function () {

    // Wow
    new WOW().init();


    // スライダー
    var mySwiper = new Swiper('.swiper-container', {
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 'auto',
        // spaceBetween: 40,
        // initialSlide: 1,
        breakpoints: {
            767: {
                slidesPerView: 'auto',
                // spaceBetween: 28,
                // initialSlide: 1,
            }
        },
    });

    // sp-menu
    $('.header__sp__btn').on("click", function (e) {
        e.preventDefault();

        // spメニューを引き出し
        $('.header__nav__sp ul').css('right', '-80%');
        $('.header__nav__sp').toggle();
        $('.header__nav__sp ul').animate({ right: '0' });

        // ボディー
        $('.body__fix__scroll').css('left', '0');
        $('body').toggleClass('body__fix__scroll');
        // ボディーの回転
        $('.body__fix__scroll').animate({ left: '-80%' });

        // ボタンの変形
        $('.header__sp__btn__line').toggleClass('is-offcanvas');

        return false;
    });

    $('.header__nav__sp').on("click", function (e) {
        e.preventDefault();

        // sp-nav 解除
        $('.header__nav__sp').toggle();
        $('body').removeClass('body__fix__scroll');
        $('.header__sp__btn__line').removeClass('is-offcanvas');

        return false;
    });

    $('#header__sp-nav').on("click", function (e) {
        e.preventDefault();
        $(this).fadeToggle();
        $('#sp-nav__btn-close').fadeToggle();
        return false;
    });

    $('#sp-nav__btn-close').on("click", function (e) {
        e.preventDefault();
        $(this).fadeToggle();
        $('#header__sp-nav').fadeToggle();
        return false;
    });

    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let header = $(".header").innerHeight();
        let speed = 300;
        let id = $(this).attr("href");
        let target = $("#" == id ? "html" : id);
        let position = $(target).offset().top - header;

        // sp-nav 解除
        $('.header__nav__sp').hide();
        $('body').removeClass('body__fix__scroll');
        $('.header__sp__btn__line').removeClass('is-offcanvas');

        if ("fixed" !== $(".header").css("position")) {
            position = $(target).offset().top;
        }
        if (0 > position) {
            position = 0;
        }
        $("html, body").animate({
            scrollTop: position
        },
            speed
        );
        return false;
    });

    // スクロール判定
    $(window).on("scroll", function () {
        if (100 < $(this).scrollTop()) {
            $('.totop').addClass('is-show');
        } else {
            $('.totop').removeClass('is-show');
        }
    });

    // クリック
    // $('.header__nav ul li a').click(function () {
    //     $('.header__nav ul li a').removeClass('is-active');
    //     $(this).addClass('is-active');
    //     return false;
    // });

    // クリック
    // $('.tab__nav ul li span').click(function (e) {
    //     e.preventDefault();
    //     let target = $(this).data("target");

    //     $('.tab__nav ul li span').removeClass('is-active');
    //     $(this).addClass('is-active');

    //     $('.tab-item').removeClass('is-active');
    //     $(target).addClass('is-active');

    //     return false;
    // });

    // アコーディオン
    $('.accordion__body').hide()
    $('.accordion__head').click(function () {
        $(this).next().slideToggle();
        $(this).children('.accordion__icon').toggleClass('is-open');
    });

    // スクロールトップをふわっと表示
    $(window).on("scroll", function ($) {
        if ($(this).scrollTop() > 800) {
            $('.totop').addClass('is-show');
        } else {
            $('.totop').removeClass('is-show');
        }
    });

    // スクロールトップを押すとアニメーションでトップに戻る
    // $('.totop').click(function () {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 500);
    //     return false;
    // });

    // google formに飛ばさない＋お礼メッセージ
    let $form = $('#js-form');
    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $form.slideUp()
                    $('#js-success').slideDown()
                },
                200: function () {
                    //送信に失敗したときの処理
                    $form.slideUp()
                    $('#js-error').slideDown()
                }
            }
        });
        return false;
    });

    // ボタンの反転と使用可否
    let $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on('change', function () {
        // alert('on change')
        let $enterName = $('#js-form input[name="entry.1136986720"]').val();
        let $enterKana = $('#js-form input[name="entry.1654963543"]').val();
        // let $intx = $('#js-form input[type="text"]').val();
        // let $inem = $('#js-form input[type="email"]').val();
        // let $tatx = $('#js-form textarea[name="entry.1101967586"]').val();
        // let $inch = $('#js-form input[name="entry.129501072"]').prop('checked');
        if ($enterName !== '' && $enterKana !== '') {
            $submit.prop('disabled', false)
            $submit.addClass('is-submit')
        } else {
            $submit.prop('disabled', true)
            $submit.removeClass('is-submit')
        }
        return false;
    })



});