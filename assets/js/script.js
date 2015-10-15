$(document).ready(function () {
    $('.vue').hide();

    // Routeur
    $('.link').on('click', function () {
        console.log("ok");
        var vue = $(this).attr("data-view");
        $('.vue').hide();
        $('.' + vue).show();
    })
})
