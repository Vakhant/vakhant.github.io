$(document).ready(function(){
    $(window).bind("resize", function(){
        $(".promo_slider_list").height($(".promo_slide_chosen").outerHeight());
    })
   
    $(".promo_slide").each(function(index){
        $(".promo_slide").eq(index).css({"left": "-" + index*100 + "%"})
    })

    $(".promo_slider_list").height($(".promo_slide_chosen").outerHeight());

    $('#PromoPrevNews').bind("click", function(event){
        if(!$(this).hasClass("promo_slider_nav_step_btn_disabled")){
            $('#PromoNextNews').removeClass("promo_slider_nav_step_btn_disabled");
            let catchChosenIndex = $(event.target).closest(".promo_slider").find(".promo_slide_chosen").index();
            if(catchChosenIndex-1 == 0){
                $(this).addClass("promo_slider_nav_step_btn_disabled");
            }
            console.log(catchChosenIndex)
            $(".promo_slide_chosen").removeClass("promo_slide_chosen");
            $(".promo_slide").eq(catchChosenIndex-1).addClass("promo_slide_chosen");
            $(".promo_slider_list").height($(this).closest(".promo_slider").find(".promo_slide").eq(catchChosenIndex-1).outerHeight());
        }
    });
    
    $('#PromoNextNews').bind("click", function(event){
        if(!$(this).hasClass("promo_slider_nav_step_btn_disabled")){
            $('#PromoPrevNews').removeClass("promo_slider_nav_step_btn_disabled");
            let catchChosenIndex = $(event.target).closest(".promo_slider").find(".promo_slide_chosen").index();
            let catchLastIndex = $(event.target).closest(".promo_slider").find(".promo_slide:last").index();
            if(catchChosenIndex+1 == catchLastIndex){
                $(this).addClass("promo_slider_nav_step_btn_disabled");
            }
            console.log(catchChosenIndex)
            $(".promo_slide_chosen").removeClass("promo_slide_chosen");
            $(".promo_slide").eq(catchChosenIndex+1).addClass("promo_slide_chosen");
            $(".promo_slider_list").height($(this).closest(".promo_slider").find(".promo_slide").eq(catchChosenIndex+1).outerHeight());
        }
    });

    $(".we_are_informed_block").bind('click', function(){
        $(this).toggleClass('we_are_informed_block_chosen');
    })
    $(".company_news_block").bind('click', function(){
        $(this).toggleClass('company_news_block_chosen');
    })
    
    $(window).bind('load resize', function(){
        if($(window).width() <= 720){
            if(!$('.opinion_list, .comments_list').hasClass('slick-slider')){
                $('.opinion_list, .comments_list').slick({});            $('.comments_list').slick({});
            }
        }else{
            if($('.opinion_list, .comments_list').hasClass('slick-slider')){
                $('.opinion_list, .comments_list').slick('unslick');            $('.comments_list').slick('unslick');
            }
        }
    })
    $(window).bind('resize', function(){
        if($(window).width() > 720){
            $('.opinion_list, .comments_list').slick('unslick');
            $('.comments_list').slick('unslick');
        }
    })
          
})