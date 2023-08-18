var new_lang = {
lt1: 'Acheter Hondrocream à prix réduit. Les prix, les commentaires. Commandez Hondrocream maintenant!',
lt2: 'Commandez maintenant',
lt3: 'L’efficacité',
lt4: 'L’application',
lt5: 'Les commentaires',
lt6: 'Débarrassez-vous de la douleur aux articulations',
lt7: 'Les articulations sans douleur grâce à la crème «Hondrocream»!',
lt8: 'Ça empêche les dépôts de sel',
lt9: 'Ça récupère les articulations et les tissus',
lt10: "Ça élimine la douleur et de l'œdème",
lt11: 'Promotion! Réduction 50%!',
lt12: 'Commander',
lt13: 'Nous vous rappellerons dans 15 minutes pour préciser les détails de la commande',
lt14: 'Pourquoi Hondrocream est si efficace?',
lt15: 'Ça stimule la cicatrisation des tissus, active le métabolisme',
lt16: 'Glucosamine',
lt17: 'Ça restaure et renforce les articulations arthritiques et артрозах',
lt18: 'Chondroïtine',
lt19: "Ça stimule la production d'acide hyaluronique, qui est responsable de la santé du cartilage",
lt20: 'Camphre',
lt21: "Ça soulage l'inflammation et la douleur lors des exacerbations aiguës de maladies des articulations, des cartilages et de ligaments",
lt22: "Quelle est la façon d'utiliser la crème «Hondrocream»?",
lt23: 'Prenez une petite quantité de moyens',
lt24: 'Appliquez-le sur les zones de problème (pieds, coudes, etc.)',
lt25: 'Puis frottez par quelques mouvements de massage',
lt26: 'Répétez chaque jour',
lt27: 'Débarrassez-vous maintenant de la douleur dans les articulations!',
lt28: 'il reste seulement 7 pièces!',
lt29: 'Heures',
lt30: 'Minutes',
lt31: 'Secondes',
lt32: 'Commander',
lt33: 'Commentaires à propos de la crème "Hondrocream"',
lt34: 'Marie, 34 ans, Paris',
lt35: "Quand j’ai commencé à faire mal à mes doigts, mon médecin m'a conseillé la crème «Hondrocream». Je l’ai achetée immédiatement et j’eiatis très heureuse que j’avais suivi ses recommandations. Tout d'abord la crème m'a délivré de la douleur et la tension dans les mains, mais puis la douleur a disparu. Je peux travailler normalement et je ne m'en souviens presque de cette maladie terrible. J’ai commandé cette crème pour ma mère. Elle aussi, elle a trop aimé l'effet.",
lt36: 'Daniel, 45 ans, Nantes',
lt37: "Dans sa jeunesse, je faisais des haltères, et ,en outre, j’ai travaillé sur le chantier. Cette charge a rapidement commencé à influer sur l'état de mes articulations et cartilages. À 40 ans, les genoux et le bas du dos m’ont dérangé déjà presque chaque jour: un peu d'activité physique ou d'un changement de météo ça  a immédiatement touché mon état. j’ai essayé cette crème. Le résultat est parfait! la douleur apparaît moins souvent maintenant.",
lt38: 'Sophie, 52 ans, Toulouse',
lt39: "Après 40 ans, j'avais toujours des problèmes avec la cheville, et j'ai reçu une diagnostic décevante -  la polyarthrite rhumatoïde. Quoi, j'ai juste pas essayé, je ne voulais pas rester passive. En effet, ma famille, des enfants... Hondrocream m'a apporté un soulagement. Je le conseille à tous qui ont les difficultés des articulations, car il aide vraiment!",
lt41: "Attention! Méfiez-vous des imitations!",
lt42: "La crème «Hondrocream» est très populaire et efficace. Par conséquent, les contrefaçons apparaissent de plus en plus souvent sur l'internet. Ne vous laissez pas berner!",
lt43: 'Vous pouvez acheter Hondrocream seulement dans notre magasin. Ici, c’est un distributeur officiel en France. C’est pourquoi on vous garantit la qualité de tous les produits.',
lt44: 'SOYEZ EN BONNE SANTÉ!',
lt45: 'Après la commande, vous recevez:',
lt46: 'Un véritable crème «Hondrocream» pour les articulations',
lt47: 'Le meilleur prix',
lt48: 'La livraison rapide',
lt49: 'Débarrassez-vous de la douleur aux articulations',
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