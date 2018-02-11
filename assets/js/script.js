var i = 0;
var ora =
 ["Creio Em Deus Pai","Pai Nosso","Ave Maria","Ave Maria","Ave Maria","Pai Nosso","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Pai Nosso","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Pai Nosso","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Pai Nosso","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Pai Nosso","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Ave Maria","Salve Rainha"];
$( document ).ready(function() {
    console.log( "ready!" );
    $(".salve").hide();
    $(".creio").hide();
    $(".ave").hide();
    $(".pai").hide();
});
function comecar() {
    $(".top").text(ora[i]);
    id = "#id"+i;
    if(i == 0){
        $(id).attr("src","assets/img/crossR.png");
    }
    $(id).css("color","#f00");
    if(i > 60) {
        $(".top").text("Acabou!");
    }
i++;
}
