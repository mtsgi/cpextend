console.log("init");
$("body").append("<div id='cp-mojisuu'></div>");
$("#cp-mojisuu").hide();

$("textarea").on("click keyup", function(){
    $("#cp-mojisuu").show();
    $("#cp-mojisuu").text(this.value.length);
}).on("blur", function(){
    $("#cp-mojisuu").hide();
});