---
layout: post
title: "Multiscreen pour i3."
date: 2015-12-30 18:01:35
categories: programmation,script,bash
published: true
comments: true
---
Bonsoir les amateurs de pingouins !  
Voici 2 petits scripts bash que j'ai écrit pour gérer les multiscreens avec le windows manager que j'utilise sur mon netbook : i3.

###Script de déconnexion :

Du coup, on commence par la fin : le script qui permet de déconnecter TOUS les moniteurs secondaires, c'est le plus crade des deux mais c'est surtout celui des deux qui demande le moins d'adaptations de la part de l'utilisateur (une unique variable à modifier).

{% highlight bash linenos %}
#!/usr/bin/env bash

#Mettre dans cette variable la regex donnant l'ensemble des sorties
#qui peuvent être désactivées.
OUTPUTS="(VGA1|HDMI1)"

for i in $(xrandr | egrep $OUTPUTS | egrep " connected" | cut -d' ' -f1)
do
    echo 'désactivation de '$i' en cours :'

    xrandr --output $i --off && echo "xrandr retourne "$?". Désactivation de "$i" effectuée."
done

exit 0
{% endhighlight %}

Il suffit de mettre dans la variable `OUTPUT` la regex, comme indiqué dans le commentaire. Ensuite le programme effectue une boucle for sur un truc assez peu digeste, que je vais détailler un peu :  
`xrandr` quand on ne lui passe aucun paramètre renvoie des infos détaillées sur l'ensembles des sorties vidéos de l'ordinateur, on filtre ça avec egrep pour n'avoir que les sorties secondaires (on ne veut pas déconnecter la sortie `LVDS1`, par exemple, vu que c'est l'écran principal du netbook), on rafine ça encore une fois avec egrep en lui demandant de rechercher le motif `" connected"` (l'espace avant connected est important), et enfin on fait un `cut -d' ' -f1` pour ne récupérer que les noms des sorties effectivement connectées, qu'il ne reste plus qu'à désactiver avec `xrandr --output $i --off`. Et le tour est joué.

###Script de connexion :
Ce script ci est plus simple mais doit être adapté pour chaque moniteur utilisé en changeant la résolution et la sortie vidéo utilisée. Il faut donc faire un copier-coller chaque fois qu'on travaille avec un nouveau moniteur.

{% highlight bash linenos %}
#!/usr/bin/env bash

xrandr --output LVDS1 --primary --mode 1366x768
xrandr --output VGA1 --mode 1280x1024
xrandr --auto --output VGA1 --right-of LVDS1
i3-msg 'workspace 10' && i3-msg 'move workspace to output VGA1' && i3-msg 'rename workspace 10 to "10:VGA"'
feh  --bg-scale '/home/halex02/Pictures/background/orion_nebula.jpg' 
{% endhighlight %}

On commence par dire quel est l'écran principal (ligne 3), puis on active la sortie secondaire (ligne 4), ici `VGA1`, et on lui passe la résolution qu'elle doit utiliser. Ensuite on positionne les deux moniteurs relativement l'un par rapport à l'autre (ligne 5). Ensuite, on demande à i3 de déposer un bureau virtuel sur le moniteur secondaire, qu'on peut renommer. Enfin la dernière ligne (qui suppose que `feh` soit installé) sert à régler les bugs d'affichage du fond d'écran du bureau (je suppose qu'ils sont dûs au fait que les moniteurs n'ont pas la même résolution).