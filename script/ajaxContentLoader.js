var init_save = $(".main-col-2").clone() ;
var tabLinks = jQuery.makeArray(document.getElementsByClassName(".post-link")) ;
var i = 0 ;

function getLink(){
  return $(this).attr("href") ;
}

function formatLink(s){
  return s.concat(" #LoadableContent") ;
}

function ajaxRequestCompletion(){
  console.log("Requête complétée.") ;
}

function mouseenterHandler(){
    $(".main-col-2").empty() ;
    $(".main-col-2").load(formatLinks(getLink()), ajaxRequestCompletion) ;
    console.log("DOM Element Entered") ;
}

function mouseleaveHandler(){
    $(".main-col-2").replaceWith(init_save.clone()) ;
    console.log("DOM Element leaved.") ;
}

for (; i < tabLinks.length ; i++){
  tabLinks[i].mouseenter(mouseenterHandler) ;
  tabLinks[i].mouseleave(mouseleaveHandler) ;
}
