$(document).ready(function(){

    $(".class_star_picker").bind("click", function(){
        $('.class_star').removeClass('not_chosen');
        $('.class_star_picker').removeClass('class_star_picker_picked');
        $(this).addClass('class_star_picker_picked')
    })
    
    $(".comments_slider_list_block").each(function(index){
        $(".comments_slider_list_block").eq(index).css({"left": "-" + index*100 + "%"})
    })
    
    $(".comments_slider_list").height($(".comments_slider_list_block_chosen").outerHeight());

    $('.comments_slider_nav_block').bind("click", function(event){
        if(!$(this).hasClass("comments_slider_nav_block_chosen")){
            $('.comments_slider_nav_block').removeClass("comments_slider_nav_block_chosen");
            $(this).addClass('comments_slider_nav_block_chosen')
            let catchChosenIndex = $(this).index();
            console.log(catchChosenIndex)
            $(".comments_slider_list_block_chosen").removeClass("comments_slider_list_block_chosen");
            $(".comments_slider_list_block").eq(catchChosenIndex).addClass("comments_slider_list_block_chosen");
            $(".comments_slider_list").height($(".comments_slider_list_block_chosen").outerHeight());
        }
    });
    $(".news_block").bind('click', function(){
        $(this).toggleClass('news_block_chosen');
    })
})