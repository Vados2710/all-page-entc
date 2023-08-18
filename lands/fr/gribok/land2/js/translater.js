var new_lang = {
"lt00": "Acheter Tinedol à prix réduit. Les prix, les commentaires. Commandez Tinedol maintenant!",
"lt0": "Faire appel",
"lt1": "l'Action du Tinedol",
"lt2": "l'Efficacité",
"lt3": "Commentaires",
"lt4": "Le moyen simple de gagner des champignons, des démangeaisons et des fissures!",
"lt5": "Traite mycose des pieds et des ongles",
"lt6": "Soulage les démangeaisons et la desquamation",
"lt7": "Élimine la transpiration et l'odeur",
"lt8": "Panser les fissures sur les talons",
"lt9": "Jusqu'à la fin de l’action il reste:",
"lt10": "<span class=\"for-win\">La série limitée! Dépêchez-vous!</span><br> Seulement 120 paquets à un prix spécial!",
"lt11": "Réduction 50%",
"lt12": "Prix spécial:",
"lt13": "Comment fonctionne Tinedol?",
"lt14": "L'application régulière, Tinedol élimine plusieurs problèmes. Les composants actifs Inclus <span class=\"for-win\">Climbazole</span> et <span class=\"for-win\">Farnesol</span> éliminent:",
"lt15": "Dermatophyte",
"lt16": "l'Odeur",
"lt17": "Sueurs",
"lt18": "Cracks",
"lt19": "<span class=\"for-win\">Climbazole</span> supprime la croissance et le développement des levures et des dermatophytes. Il soulage les démangeaisons, exerce un effet destructeur sur les cellules déjà existantes, bloquent l'émergence de nouvelles colonies.",
"lt20": "<span class=\"for-win\">Farnesol</span>“coupe” les glandes sudoripares et inhibe l'activité des bactéries, grâce à laquelle la sueur de la même personne est toujours en bonne santé et peu de temps acquiert une odeur désagréable. Désinfecte et adoucit la peau, il donne un léger parfum floral pour longtemps.",
"lt21": "L’onguent<span class=\"for-win\"> hydrate </span> et <span class=\"for-win\"> nourrit </span> la peau des pieds, élimine les cors, exfolie, répare les fissures.",
"lt22": "À la différence de la poudre, l’onguent Tinedol est répartie uniformément sur toute la surface du pied.<span class=\"for-win\">Elle pénètre rapidement</span>et ne laisse pas de traces sur les draps et les vêtements.",
"lt23": "Dans la composition de l’onguents Tinedol, nous avons ajouté <span class=\"for-win\">l'huile essentielle de menthe</span> et <span class=\"for-win\">la vitamine E</span>. Le tocophérol efficace <span class=\"for-win\">aux prises avec les pieds</span> et <span class=\"for-win\">les durillons</span>, la menthe offre à la peau de la fraîcheur et de confort après une journée de travail.",
"lt24": "Tinedol. Le moyen simple de gagner des dermatophytes, des démangeaisons et des fissures!",
"lt25": "Jusqu'à la fin de l’action il reste::",
"lt26": "<span class=\"for-win\">La série limitée! Dépêchez-vous!</span><br>Seulement 120 paquets à un prix spécial!",
"lt27": "Réduction de 50%",
"lt28": "Prix spécial:",
};

function Translater () {
 for (class_name in new_lang) {
  var elements = document.getElementsByClassName(class_name);
  if (elements.length) {
   for (key in elements) {
    elements[key].innerHTML = new_lang[class_name];
   }
  }
 }
};