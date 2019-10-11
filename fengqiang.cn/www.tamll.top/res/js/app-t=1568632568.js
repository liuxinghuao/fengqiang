$(function () {
    new WOW().init();
    $("#fix-add .gotop").click(function () {
        $('html,body').stop(true, false).animate({scrollTop: '0px'}, 800);
    });
    $(".banner .showSubmitForm").click(function () {
        $(".banner .form-box").show();
    });
    $(".banner .form-close").click(function () {
        $(".banner .form-box").hide();
    });
});