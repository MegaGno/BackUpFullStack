$("h1").addClass("big-title margin-50");

$("button").html("<em>Don't click me</em>");

console.log($("a").attr("href"));
$("a").attr("href", "https://www.yahoo.com");


$("button").click(function() {
    $("h1").css("color", "purple");
});


$("input").keypress(function(event) {
    $("h1").text(event.key);
});

$("button").on("click", function() {
    //$("h1").toggle();
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});