$(document).ready(function(){
    $('.slides').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging : function(slider, i) {
            return '<button type="button"></button>';
        },
    });
});

$(document).ready(function(){
    $(".nav-bars-mobile").click(function(){
        $(".collapse").collapse('toggle');
        $(".menu-mobile").addClass('show');
    });
});

$(document).ready(function(){
  $('.comments-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
});

$(document).ready(function(){
    $('.videos-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });
})

$(document).ready(function(){
    $('.news-home-page .news-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });
})

const newsApp = [
  [
    {
      linkImg: '../img/Hung-img/News-Page/news1.jpg',
      title: 'ĂN HẢI SẢN NHẬN ƯU ĐÃI KÉP TẠI NHÀ HÀNG HẢI SẢN NGON BẬC NHẤT ĐÀ NẴNG - NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: 'ĐÓN KHÁCH MIỄN PHÍ ĐẾN NHÀ HÀNG (TRONG BÁN KÍNH 12KM) Khác với các nhà hàng hải sản cùng khu vực, bạn sẽ không cần phải bắt xe hay tìm đường để đến với Ngọc Hương Seafood Restaurant, dù nắng h..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news2.jpg',
      title: 'NHÀ HÀNG HẢI SẢN NGON Ở ĐÀ NẴNG 2020',
      description: 'Tại sao Đà Nẵng phải phát triển du lịch? Những cái nhất của Đà Nẵng Luôn nắm giữ ngôi Vương trong ngành du lịch miền Trung 10 năm liên tiếp, Đà Nẵng là cái tên vô cùng quen thuộc không chỉ với k..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news3.jpg',
      title: 'NGOC HUONG SEAFOOD RESTAURANT - BEST DA NANG SEAFOOD RESTAURANT',
      description: 'Known as the best seafood restaurant in Da Nang, Ngoc Huong Seafood Restaurant is a prestigious stop for gourmets. Ngoc Huong Seafood Restaurant is a familiar destination for gourmets With a..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news4.jpg',
      title: 'CHI PHÍ ĂN HẢI SẢN TẠI NHÀ HÀNG Ở ĐÀ NẴNG',
      description: 'Chi phí ăn hải sản trung bình cho một người tại Đà Nẵng. Cũng giống như khách sạn, các nhà hàng hải sản tại Đà Nẵng cũng được phân làm nhiều cấp độ 3 sao, 4 sao, 5 sao tương đương với chi phí bữa ă..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news5.jpg',
      title: 'DU LỊCH ĐÀ NẴNG VÀO DỊP TẾT NGUYÊN ĐÁN NÊN ĂN GÌ? Ở ĐÂU?',
      description: 'Xu hướng du lịch vào dịp tết Nguyên Đán ngày càng được mở rộng đặc biệt là ở giới trẻ, thậm chí có nhiều gia đình còn đưa nhau đi du lịch vào thời điểm này để cảm nhận một không khí ngày Tết mới mẻ mà..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news6.jpg',
      title: 'NẠP ĐẦY VITAMIN SEA VỚI LẨU TIẾN VUA XUA TAN GIÓ LẠNH ĐÀ NẴNG ',
      description: 'Nghe cái tên thôi chắc chắn bạn cũng thắc mắc tại sao lại là lẩu tiến Vua? Nó ngon đến mức nào mà lại được cung tiến để trở thành một món ăn cực phẩm phẩm? Bạn sẽ tự trả lời được điều đó nếu chính bạn..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news7.jpg',
      title: 'CHI PHÍ ĂN HẢI SẢN TẠI NHÀ HÀNG Ở ĐÀ NẴNG',
      description: 'Chi phí ăn hải sản trung bình cho một người tại Đà Nẵng. Cũng giống như khách sạn, các nhà hàng hải sản tại Đà Nẵng cũng được phân làm nhiều cấp độ 3 sao, 4 sao, 5 sao tương đương với chi phí bữa ă..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news8.jpg',
      title: 'DU LỊCH ĐÀ NẴNG VÀO DỊP TẾT NGUYÊN ĐÁN NÊN ĂN GÌ? Ở ĐÂU?',
      description: 'Xu hướng du lịch vào dịp tết Nguyên Đán ngày càng được mở rộng đặc biệt là ở giới trẻ, thậm chí có nhiều gia đình còn đưa nhau đi du lịch vào thời điểm này để cảm nhận một không khí ngày Tết mới mẻ mà..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news9.jpg',
      title: 'NẠP ĐẦY VITAMIN SEA VỚI LẨU TIẾN VUA XUA TAN GIÓ LẠNH ĐÀ NẴNG ',
      description: 'Nghe cái tên thôi chắc chắn bạn cũng thắc mắc tại sao lại là lẩu tiến Vua? Nó ngon đến mức nào mà lại được cung tiến để trở thành một món ăn cực phẩm phẩm? Bạn sẽ tự trả lời được điều đó nếu chính bạn..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news10.jpg',
      title: 'CHI PHÍ ĂN HẢI SẢN TẠI NHÀ HÀNG Ở ĐÀ NẴNG',
      description: 'Chi phí ăn hải sản trung bình cho một người tại Đà Nẵng. Cũng giống như khách sạn, các nhà hàng hải sản tại Đà Nẵng cũng được phân làm nhiều cấp độ 3 sao, 4 sao, 5 sao tương đương với chi phí bữa ă..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news11.jpg',
      title: 'DU LỊCH ĐÀ NẴNG VÀO DỊP TẾT NGUYÊN ĐÁN NÊN ĂN GÌ? Ở ĐÂU?',
      description: 'Xu hướng du lịch vào dịp tết Nguyên Đán ngày càng được mở rộng đặc biệt là ở giới trẻ, thậm chí có nhiều gia đình còn đưa nhau đi du lịch vào thời điểm này để cảm nhận một không khí ngày Tết mới mẻ mà..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news12.jpg',
      title: 'NẠP ĐẦY VITAMIN SEA VỚI LẨU TIẾN VUA XUA TAN GIÓ LẠNH ĐÀ NẴNG ',
      description: 'Nghe cái tên thôi chắc chắn bạn cũng thắc mắc tại sao lại là lẩu tiến Vua? Nó ngon đến mức nào mà lại được cung tiến để trở thành một món ăn cực phẩm phẩm? Bạn sẽ tự trả lời được điều đó nếu chính bạn..',
      href: '#'
    }
  ]
]

const newsLatestApp = [
  [
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-1.png',
      title: 'Hải sản Đà Nẵng tươi sống giá rẻ chỉ trong tháng 12',
      description: 'Hải sản tươi sống, bơi tại bể - Khuyến mãi lớn tháng 12 nhà hàng hải sản Ngọc Hương luôn tự tin v..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-2.png',
      title: 'CÁC THỰC KHÁCH NÓI GÌ VỀ NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '1. Chất lượng món ăn Nhà hàng hải sản Ngọc Hương khẳng định chất lượng hải sản tươi ngon 100%. Ở ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-3.png',
      title: 'TIẾT LỘ 3 ĐIỀU BẠN CHƯA BIẾT VỀ SASHIMI - MÓN ĂN QUỐC HỒN CỦA NGƯỜI NHẬT',
      description: '1. Ý nghĩa Nổi tiếng trên khắp thế giới vì mang trong mình sự tinh túy của văn hóa ẩm thực Nhật B..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-4.png',
      title: '7 MÓN ĂN HẢI SẢN NGON NỔI TIẾNG KHÔNG NÊN BỎ QUA?',
      description: '&raquo; XEM THÊM: TẤT TẦN TẬT VỀ SASHIMI TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT 1. Hàu Mỹ đốt lò p..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-5.png',
      title: 'CON THÔNG MINH NHỜ CHẾ ĐỘ DINH DƯỠNG TỪ HẢI SẢN?',
      description: '  1. Dinh dưỡng từ hải sản Hải sản là một thực phẩm quan trọng trong chế độ dinh dưỡng củ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-6.png',
      title: 'HÀU MỸ BỎ LÒ PHOMAI - THẦN DƯỢC BIỂN KHƠI',
      description: '1. Hàu Mỹ Là một loài động vật thuộc nhóm thân mềm, hai mảnh vỏ trong họ nhà ghẹ, sò, Hàu Mỹ ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-7.png',
      title: 'THƯỞNG THỨC SET LẨU TIẾN VUA "SIÊU HẤP DẪN" TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '1. Lẩu tiến vua  Lẩu tiến vua mang một hương vị khác lạ, mới mẻ và khó có thể cưỡng lại. Ngu..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-8.png',
      title: 'CÁ CU SỐT NGŨ LIỄU - TÊN ĐỘC, NẤU LẠ, VỊ CÓ MỘT KHÔNG HAI',
      description: '&raquo; XEM THÊM : Nhà hàng hải sản Đà Nẵng – Món cá “ nhà giàu mới dám ăn” 1.Cái tên độc đáo có t..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-9.png',
      title: 'LƯU Ý NÀO DÀNH CHO CÁC MẸ KHI CHO BÉ ĂN HẢI SẢN?',
      description: '&raquo; XEM THÊM : Ăn hải sản đúng cách khi mang thai 1.Thời điểm thích hợp cho bé ăn hải sản Độ tuổ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-10.png',
      title: 'TOP 5 LOẠI HẢI SẢN HỖ TRỢ GIẢM CÂN HIỆU QUẢ',
      description: '&raquo; XEM THÊM : Top 6 loại hải sản tốt cho tim mạch 1.Tôm  Tôm là một trong những loại ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-11.png',
      title: 'CỒI MÂY NƯỚNG MỠ HÀNH - SỰ TINH TẾ ĐỐI VỚI MÓN QUÀ BIỂN CẢ',
      description: '&raquo; XEM THÊM : Ngọc Hương Seafood Restaurant – thiên đường bào ngư 1. Cồi mây - cái ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-12.png',
      title: 'TOP 6 LOẠI HẢI SẢN TỐT CHO TIM MẠCH',
      description: '&raquo; Xem thêm: Cua sốt tiêu đen Singapore- Hàng nghìn thực khách đã thử, còn bạn thì sao? 1. Cá hồi ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-13.png',
      title: '“ĐIỂM DANH” HẢI SẢN TƯƠI SỐNG TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: 'Tôm - Hải sản quen thuộc của đất biển Tôm là một loại hải sản quen thuộc trong menu của mọi nhà h..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-14.png',
      title: 'CUA SỐT TIÊU ĐEN SINGAPORE- HÀNG NGHÌN THỰC KHÁCH ĐÃ THỬ, CÒN BẠN THÌ SAO?',
      description: '&raquo; &raquo; &raquo;  Xem thêm: Lẩu tiến vua- Món ăn mê hoặc lòng người 1. Nguồn gốc  ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-15.png',
      title: '5 LÝ DO HỐI TIẾC NẾU BỎ QUA NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '&raquo; &raquo; Xem thêm: Cách ăn hải sản đúng cách cho người bị gout 1. Vị trí đắc địa tại Đà ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-16.png',
      title: 'CÀN QUÉT THẾ GIỚI HẢI SẢN ĐÀ NẴNG TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '  &raquo; &raquo; &raquo; Xem thêm: 3 món hải sản ngập pho mai được dân Đà Nẵng săn lùng ..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-17.png',
      title: 'TẤT TẦN TẬT VỀ SASHIMI TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: 'Sashimi cá Mú Cá Mú hay còn gọi là cá Suzuki (theo Nhật Bản), đây là loại cá thịt trắng và gần nh..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-18.png',
      title: 'NGỌC HƯƠNG SEAFOOD RESTAURANT - THIÊN ĐƯỜNG BÀO NGƯ',
      description: 'Bào Ngư hấp gừng  Thay vì các món chiên xào, hãy thử đổi gió với món Bào Ngư hấp gừng tại Ng..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-19.png',
      title: 'THỰC ĐƠN NGỌC HƯƠNG SEAFOOD RESTAURANT GÓI TRỌN TINH HOA ẨM THỰC ĐÀ NẴNG',
      description: 'Món ăn về cua Cua sốt tiêu đen Cua sốt tiêu đen được cho là cực phẩm trong ẩm thực Singapore..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-20.png',
      title: 'LẨU TIẾN VUA - MÓN ĂN MÊ HOẶC LÒNG NGƯỜI',
      description: 'TẠI SAO “LẨU TIẾN VUA” TRỞ NÊN HOT? Đầu tiên, chính là cái tên đặc biệt của món ăn này. Lẩu tiến ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-21.png',
      title: 'REVIEW HÀU MỸ BỎ LÒ PHÔ MAI - MÓN NGON VẠN NGƯỜI MÊ TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '&raquo; XEM THÊM: 3 Món Hải Sản Ngập Phomai Được Dân Đà Nẵng Săn Lùng NGỌC HƯƠNG SEAFOOD REST..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-22.png',
      title: '3 MÓN HẢI SẢN NGẬP PHOMAI ĐƯỢC DÂN ĐÀ NẴNG SĂN LÙNG',
      description: 'HÀU MỸ BỎ LÒ PHOMAI Hàu Mỹ bỏ lò phô mai tại nhà hàng hải sản Ngọc Hương Hàu Mỹ - Ông ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-23.png',
      title: 'NHỮNG MẸO CHỌN HẢI SẢN TƯƠI NGON CHO CHỊ EM NỘI TRỢ',
      description: '1. Kinh nghiệm chọn mực tươi ngon  Từ lâu, mực đã trở thành món ăn được rất nhiều gia đình ư..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-24.png',
      title: 'NHỮNG LOẠI HOA QUẢ CẦN TRÁNH KHI ĂN HẢI SẢN ĐỂ KHÔNG ẢNH HƯỞNG SỨC KHỎE',
      description: 'Ăn hải sản kiêng hoa quả cần được lưu ý kỹ Hải sản kỵ hoa quả giàu vitamin C Sau khi ăn ..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-25.png',
      title: 'CÁCH ĂN HẢI SẢN ĐÚNG CÁCH CHO NGƯỜI BỊ GOUT ',
      description: '  Người mắc bệnh gout có được ăn hải sản  Người bị bệnh gout có ăn hải sản đượ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-26.png',
      title: 'MÓN LẨU THÁI HẢI SẢN CHUA, CAY "NỨC TIẾNG" ĐÀ NẴNG ĐƯỢC CÁC ĐẦU BẾP TẠI NGỌC HƯƠNG SEAFOOD CHẾ BIẾN NHƯ THẾ NÀO?',
      description: 'Lẩu Thái là món ăn dễ làm, dễ ăn được rất nhiều người ưa chuộng Nguyên liệu được chọn lựa kỹ càng..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-27.png',
      title: 'NẾU BẠN THUỘC NHỮNG TUÝP NGƯỜI SAU, TUYỆT ĐỐI KHÔNG NÊN ĂN HẢI SẢN',
      description: 'Hải sản tuy là món ăn nhiều chất dinh dưỡng nhưng cũng tiềm tàng những nỗi nguy hiểm vô hình. 1. ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-28.png',
      title: 'CÁC MÓN ĐẶC SẢN TẠI ĐÀ NẴNG KHÔNG THỂ BỎ QUA KHI ĐẾN VỚI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '1.Các món đặc sản về cua  Nếu như nhắc đến các nhà hàng hải sản thì không thể nào thiếu nhữn..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-29.png',
      title: 'NHỮNG THỨC UỐNG DÙNG KÈM KHI ĂN HẢI SẢN',
      description: 'Những thức uống không nên đi với hải sản  Uống bia Uống bia kèm hải sản rất có hại ch..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-30.png',
      title: 'ĂN HẢI SẢN ĐÚNG CÁCH KHI MANG THAI',
      description: '  Các bác sĩ khuyên phụ nữ mang thai nên cân đối thực đơn có các loại hải sản. Bởi đây l..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-31.png',
      title: 'CUA GHẸ VÀ NHỮNG LƯU Ý KHI SỬ DỤNG',
      description: 'Cách ăn cua ghẹ Ăn kèm cua ghẹ với ít rau răm, muối tiêu chanh (hay ớt chanh) Cua ghẹ được..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-32.png',
      title: 'CÁC MÓN CHÁO HẢI SẢN NỔI TIẾNG TẠI NGỌC HƯƠNG SEAFOOD RESTAURANT',
      description: '1. Cháo tôm mũ ni Tôm mũ ni luôn được cho là “thực phẩm dành cho người giàu” bởi gái cả khá đắt đỏ,..',
      href: '#'
    }
  ],
  [
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-33.png',
      title: 'CÁCH SƠ CHẾ BÀO NGƯ ĐIÊU LUYỆN CỦA ĐẦU BẾP TẠI NHÀ HÀNG HẢI SẢN ĐÀ NẴNG',
      description: '6 bước sơ chế bào ngư từ đầu bếp chuyên nghiệp Bước 1: Tách phần thịt cồi Bào Ngư khỏi vỏ ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-34.png',
      title: 'LÝ DO MỰC TRỨNG ĐƯỢC ƯA CHUỘNG TẠI CÁC NHÀ HÀNG HẢI SẢN ĐÀ NẴNG',
      description: 'Các loại mực tại nhà hàng hải sản Đà Nẵng Có bao nhiêu loại mực tại nhà hàng hải sản Đà Nẵng bạn ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-35.png',
      title: 'BỎ TÚI TIPS ĂN HẢI SẢN ĐÀ NẴNG MỘT CÁCH AN TOÀN',
      description: 'Không nên uống bia khi ăn hải sản Nếu bạn không muốn gặp rắc rối với các vấn đề về xương khớp thì..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-36.png',
      title: 'LẠC VÀO THẾ GIỚI HẢI SẢN TƯƠI SỐNG TẠI ĐÀ NẴNG KHÔNG MUỐN VỀ',
      description: 'Nguồn hải sản Đà Nẵng – tinh hoa từ biển cả Với lợi thế về địa hình ven biển miền Trung dồi ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-37.png',
      title: 'NHỮNG MÓN HẢI SẢN ĐÀ NẴNG ĐẮT ĐỎ NHƯNG ĐÁNG ĐỂ THỬ',
      description: 'Cua hoàng đế Cua hoàng đế được mệnh danh là vua của các loài cua không chỉ về kích thước mà ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-38.png',
      title: 'ĐẾN ĐÀ NẴNG ĂN HẢI SẢN Ở ĐÂU? NGỌC HƯƠNG SEAFOOD RESTAURANT - NHÀ HÀNG HẢI SẢN NGON BẬC NHẤT ĐÀ NẴNG',
      description: 'Tiêu chí lựa chọn nhà hàng hải sản Đà Nẵng ngon, chất lượng Chất lượng hải sản Điều đầu tiên đ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-39.png',
      title: 'ĂN HẢI SẢN ĐÚNG CÁCH ĐỂ HẠN CHẾ TỐI ĐA THỦY NGÂN',
      description: 'Lợi ích của hải sản đối với sức khỏe Không phải ngẫu nhiên mà hải sản lại trở thành loại thực phẩ..',
      href: '#'
    },
    {
      linkImg: '../img/Hung-img/News-Page/news-latest-40.png',
      title: 'GỢI Ý THỰC ĐƠN CHO GIA ĐÌNH KHI ĂN TẠI NHÀ HÀNG HẢI SẢN ĐÀ NẴNG',
      description: 'Soup Món soup được xem là món khai vị lý tưởng và rất bổ dưỡng trước một bữa ăn ngon và hoàn hảo...',
      href: '#'
    }
  ],
]

const prevNewsBtn = document.querySelector('.box-news .prev');
const nextNewsBtn = document.querySelector('.box-news .next');
const prevNewsLatestBtn = document.querySelector('.box-news-latest .prev');
const nextNewsLatestBtn = document.querySelector('.box-news-latest .next');
let indexNews = 0;
let indexNewsLatest = 0;
prevNewsBtn.style.display = 'none';
prevNewsLatestBtn.style.display = 'none';

prevNewsBtn.addEventListener("click", () => {
  changeNewsList(-1);
})

nextNewsBtn.addEventListener("click", () => {
  changeNewsList(1);
})

function changeNewsList(checkChange) {
  if(checkChange === 1) {
    let newsItem = '';
    let newsList = [];
    indexNews++;
    
    newsList = newsApp[indexNews];
    for (let news of newsList) {
      newsItem += `
        <div class="news-item wow fadeInUp">
          <div class="card">
              <a href="${news.href}" class="img-news">
                  <img src=${news.linkImg} class="img-fluid" alt="news">
              </a>
              <div class="card-body">
                  <h3 class="card-title">
                      <a href="${news.href}">
                          ${news.title}
                      </a>
                  </h3>
                  <p class="card-text">
                      ${news.description}
                  </p>
              </div>
          </div>
        </div>
      `
    }
    document.querySelector('.box-news .news-list').innerHTML = newsItem;
    if(indexNews >= newsApp.length-1) {
      nextNewsBtn.style.display = 'none';
      indexNews = newsApp.length-1;
      return;
    } else if (indexNews > 0){
      prevNewsBtn.style.display = 'inline-block';
    }
  }
  if(checkChange === -1) {
    let newsItem = '';
    let newsList = [];
    indexNews--;
    
    newsList = newsApp[indexNews];
    for (let news of newsList) {
      newsItem += `
        <div class="news-item wow fadeInUp">
          <div class="card">
              <a href="${news.href}" class="img-news">
                  <img src=${news.linkImg} class="img-fluid" alt="news">
              </a>
              <div class="card-body">
                  <h3 class="card-title">
                      <a href="${news.href}">
                          ${news.title}
                      </a>
                  </h3>
                  <p class="card-text">
                      ${news.description}
                  </p>
              </div>
          </div>
        </div>
      `
    }
    document.querySelector('.box-news .news-list').innerHTML = newsItem;
    if(indexNews <= 0) {
      prevNewsBtn.style.display = 'none';
      indexNews = 0;
      return;
    } else {
      nextNewsBtn.style.display = 'inline-block';
    }
  }
}

//News latest
prevNewsLatestBtn.addEventListener("click", () => {
  changeNewsLatestList(-1);
})

nextNewsLatestBtn.addEventListener("click", () => {
  changeNewsLatestList(1);
})

function changeNewsLatestList(checkChange) {
  if(checkChange === 1) {
    let newsItem = '';
    let newsList = [];
    indexNewsLatest++;
    
    newsList = newsLatestApp[indexNewsLatest];
    for (let news of newsList) {
      newsItem += `
        <div class="news-item wow fadeInUp">
          <div class="row">
              <div class="col-5">
                  <a href="${news.href}">
                      <img src=${news.linkImg} class="img-fluid" alt="news">
                  </a>
              </div>
              <div class="col-7">
                  <div class="card-body">
                      <h3 class="card-title">
                          <a href="${news.href}">
                              ${news.title}
                          </a>
                      </h3>
                      <p class="card-text">
                          ${news.description}
                      </p>
                      <a href="#" class="btn btn-primary">Xem thêm</a>
                  </div>
              </div>
          </div>
      </div>
      `
    }
    document.querySelector('.box-news-latest .news-list').innerHTML = newsItem;
    if(indexNewsLatest >= newsLatestApp.length-1) {
      nextNewsLatestBtn.style.display = 'none';
      indexNewsLatest = newsLatestApp.length-1;
      return;
    } else if (indexNewsLatest > 0){
      prevNewsLatestBtn.style.display = 'inline-block';
    }
  }
  
  if(checkChange === -1) {
    let newsItem = '';
    let newsList = [];
    indexNewsLatest--;
    
    newsList = newsLatestApp[indexNewsLatest];
    for (let news of newsList) {
      newsItem += `
        <div class="news-item wow fadeInUp">
          <div class="row">
              <div class="col-5">
                  <a href="${news.href}">
                      <img src=${news.linkImg} class="img-fluid" alt="news">
                  </a>
              </div>
              <div class="col-7">
                  <div class="card-body">
                      <h3 class="card-title">
                          <a href="${news.href}">
                              ${news.title}
                          </a>
                      </h3>
                      <p class="card-text">
                          ${news.description}
                      </p>
                      <a href="#" class="btn btn-primary">Xem thêm</a>
                  </div>
              </div>
          </div>
      </div>
      `
    }
    document.querySelector('.box-news-latest .news-list').innerHTML = newsItem;
    if(indexNewsLatest <= 0) {
      prevNewsLatestBtn.style.display = 'none';
      indexNewsLatest = 0;
      return;
    } else {
      nextNewsLatestBtn.style.display = 'inline-block';
    }
  }
}