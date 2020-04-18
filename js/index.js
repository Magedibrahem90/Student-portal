/* scrollTop  */
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop>800)
    {
        $("#btnup").fadeIn(500);
    }
    else
    {
        $("#btnup").fadeOut(500);
    }
})
/* scrollTop end */
$("#btnup").click(function(){
    $("body,html").animate({scrollTop:0},1000);
})
/*scroll to sections*/
$("#btnup").click(function(){
    $("body,html").animate({scrollTop:0},1000);
})
$("nav a").click(function(){
    let ahref = $(this).attr("href");
    let ProfileOffset = $(ahref).offset().top;
    $("body,html").animate({scrollTop:ProfileOffset},1000);

})
/*scroll to sections end*/
