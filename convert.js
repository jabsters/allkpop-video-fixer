$j = jQuery.noConflict();

$j('div.akp_jwvid').each(function(index){
    $j(this).html('<iframe width="560" height="315" src="'+decodeURIComponent($j('div.akp_jwvid:eq('+index+')>div>object>param:last').attr('value')).split('&')[5].substring(5).replace('watch?v=','embed/')+'" frameborder="0" allowfullscreen></iframe>')
});
