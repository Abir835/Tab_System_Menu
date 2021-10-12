
$(".content-1").show();
$(document).ready(function () {
    $(".home").click(function () {
        $(".content-1").show();
        $(".content-2").hide();
        $(".content-3").hide();
        $(".content-4").hide();
        $(".content-5").hide();


    });
});

$(document).ready(function () {
    $(".blog").click(function () {
        $(".content-1").hide();
        $(".content-2").show();
        $(".content-3").hide();
        $(".content-4").hide();
        $(".content-5").hide();


    });
});

$(document).ready(function () {
    $(".code").click(function () {
        $(".content-1").hide();
        $(".content-2").hide();
        $(".content-3").show();
        $(".content-4").hide();
        $(".content-5").hide();


    });
});

$(document).ready(function () {
    $(".help").click(function () {
        $(".content-1").hide();
        $(".content-2").hide();
        $(".content-3").hide();
        $(".content-4").show();
        $(".content-5").hide();


    });
});

$(document).ready(function () {
    $(".about").click(function () {
        $(".content-1").hide();
        $(".content-2").hide();
        $(".content-3").hide();
        $(".content-4").hide();
        $(".content-5").show();


    });
});

