/**
 * Sauvegarde du contenu initial du div principal pour pouvoir le remettre en place après prévisualisation d'un article.
 */
var G_INITIAL_CONTENT_SAVE = $("#post-include").clone() ;

/**
 * Liste des liens des articles.
 */
var G_LINKS = $(".post-link") ;

/**
 * Variable globale qui garde en mémoire la dernière url pour laquelle une requête AJAX a été effectuée,
 * ie. l'attribut href du dernier élément a pointé par la souris qui a activé un évènement.
 */
var G_LAST_URL_SAVE = null ;

/**
 * Fonction de callback qui renvoie un log détaillant les données chargées par la requête AJAX en cas de réussite.
 */
var ajaxRequestCompletion = function (url){
    console.log("Completed AJAX request : ".concat(url).concat(" #loadableContent").concat(" has been loaded.")) ;

}

var mouseEnterHandler = function (){
    console.log("DOM Element <a> Entered") ;

    /**
     * Création d'une variable qui contiendra l'arborescence DOM à insérer dans l'élément de class .main-col-2,
     * initialisée à null.
     */
    var l_loaded_content = null ;

    /**
     * Vérification de la dernière adresse pointée qui a généré une requête AJAX.
     */
    if (G_LAST_URL_SAVE != $(this).attr("href")){
	G_LAST_URL_SAVE = $(this).attr("href") ;
	l_loaded_content = G_INITIAL_CONTENT_SAVE.clone().load(G_LAST_URL_SAVE.concat(" #loadableContent"), ajaxRequestCompletion(G_LAST_URL_SAVE)) ;
	$(".post-list li").css("background-color","#0E2225");
	$("#post-include").replaceWith(l_loaded_content);
	$(this).parent().parent().css("background-color","#378695") ;
    }else{
	$("#post-include").replaceWith(G_INITIAL_CONTENT_SAVE.clone()) ;
	$(".post-list li").css("background-color","#0E2225");
	G_LAST_URL_SAVE = null ;
    }
}
G_LINKS.mouseenter(mouseEnterHandler) ;
