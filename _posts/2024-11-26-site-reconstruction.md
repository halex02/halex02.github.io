---
layout: post
title: Reconstruction du site
---

Mon site est en cours de reconstruction après plusieurs années d’abandon.
J’ai laissé tombé le thème [hacker](https://pages-themes.github.io/hacker/) − je l’avais bricolé en dépit du bon sens et rendu impossible à maintenir −
pour le remplacer par le thème [lanyon](https://lanyon.getpoole.com) dont j’ai retouché le thème en surchargeant quelques styles de base dans un fichier <code>custom.css</code>
(ne pas retoucher les fichiers de base du thème ! j’ai retenu la leçon).

{% highlight css %}
/* Thème custom */
body.theme-base-0g {
	background-color: #E4EDFB ;
	color: #161F1E;
}

.theme-base-0g .post-date, .theme-base-0g .masthead-title small {
	color: #8D929A ;
}

.theme-base-0g .sidebar,
.theme-base-0g .sidebar-toggle:active,
.theme-base-0g #sidebar-checkbox:checked ~ .sidebar-toggle {
	background-color: #004439;
}
.theme-base-0g .container a,
.theme-base-0g .sidebar-toggle,
.theme-base-0g .related-posts li a:hover {
	color: #004439;
}
{% endhighlight %}

Je vais probablement le modifier <del>un peu plus</del> beaucoup plus pour tenter de l’utiliser pour l’interface de consultation 
de mon projet d’édition numérique pour mon mémoire.

J’ai jeté la plupart des posts de blog que j’avais écrit à l’époque : je n’aime pas la manière dont je les ai écrits 
(si quelqu’un a envie de jauger mes qualités d’écriture aujourd’hui, [ceci me parait bien](https://insula.univ-lille.fr/2021/04/04/linscription-latine-de-la-source-de-lescaut/)) 
et un nombre conséquent d’entre-eux étaient douloureux à relire (ils parlaient de ma santé mentale dans mes pires moments de dépression). 
J’en ai juste conservé quatre (plus les posts d’exemple du thème Lanyon que je jetterai plus tard).

Et sinon la principale raison de ressortir ce site, c’était d’héberger un [CV en ligne]({{ site.url }}/cv) au format HTML.

