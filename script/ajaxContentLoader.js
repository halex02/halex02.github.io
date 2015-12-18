var init_save = $(".main-col-2").clone() ;
var jLinks = $(".post-link") ;
var i = 0 ;

function ajaxRequestCompletion(){
    console.log("Requête complétée.") ;
}

function mouseenterHandler(){
    console.log("DOM Element Entered") ;
    /*var loaded_content = init_save.clone().load($(this).attr("href").concat(" #loadableContent"), ajaxRequestCompletion) ;*/
    if($("#loadableContent")[0]!=null){
	$(".main-col-2").replaceWith(init_save.clone()) ;
	$(".post-list li").css("background-color","#0E2225");
    }else{
	$(".main-col-2").empty() ;
	$(".main-col-2").load($(this).attr("href").concat(" #loadableContent"), ajaxRequestCompletion) ;
	$(this).parent().parent().css("background-color","#378695") ;
    }
}

function mouseleaveHandler(){
    $(".main-col-2").replaceWith(init_save.clone()) ;
    console.log("DOM Element leaved.") ;
}

jLinks.mouseenter(mouseenterHandler) ;
/*jLinks.mouseleave(mouseleaveHandler) ;*/
