var init_save = $(".main-col-2").clone() ;
var tabLinks = $(".post-link").makeArray() ;
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
}

function mouseleaveHandler(){
 $(".main-col-2").replaceWith(init_save.clone()) ; 
}

for (; i < tabLinks.length ; i++){
  tabLinks[i].mouseenter() ;
  tabLinks[i].mouseleave() ;
}