# Cahier des participant·e·s · SilverTech

Version web du cahier du participant pour la rencontre du conseil d'administration et du comité aviseur du 5 octobre 2026 (Musée d'art de Joliette).

Application statique (Vite, React, TypeScript), protégée par un mot de passe partagé via Cloudflare Pages.

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # vérification des types + build dans dist/
npm run preview    # servir le build local
```

## Où modifier le contenu

Tout le texte est séparé de la mise en page.

| Pour modifier | Fichier |
| --- | --- |
| Textes, équipe, projets, grilles de cotisations, questions, ordre du jour | `src/content.ts` |
| Textes plus éditoriaux (introductions, citations, encadrés) | `src/sections/*.tsx` |
| Vidéo YouTube (identifiant) | `VIDEO` dans `src/content.ts` |
| Couleurs et mise en page | `src/styles.css` (variables en haut du fichier) |
| Images | `public/img/` (WebP) |

Points à compléter avant l'envoi :

- **Points à adresser** (section « Avant la rencontre ») : le gabarit d'origine contenait du faux texte, remplacé ici par un encart à compléter dans `src/sections/Before.tsx`.
- **Annexe C** : document d'adhésion des Innovateurs (emplacement vide), dans `src/sections/Annexes.tsx`.

## Fonctions interactives

- Table des matières latérale qui suit la lecture, barre de progression, recherche (Ctrl ou Cmd + K).
- Vidéo YouTube en mode « façade » : rien n'est chargé depuis YouTube avant le clic (domaine `youtube-nocookie.com`).
- **Carnet de notes** : notes et questions « gardées pour la discussion », enregistrées dans le `localStorage` du navigateur. Un avertissement rappelle qu'elles restent sur l'appareil et peuvent être perdues. Export Markdown, copie, sauvegarde JSON (réimportable) et impression.
- Respect de `prefers-reduced-motion`, navigation au clavier, mise en page adaptée tablette et mobile.

## Déploiement sur Cloudflare Pages avec mot de passe partagé

Le mot de passe est vérifié côté serveur par `functions/_middleware.ts` : sans le bon mot de passe, aucun fichier du cahier n'est servi.

1. Dans le tableau de bord Cloudflare : **Workers et Pages**, **Créer**, **Pages**, **Se connecter à Git**, puis choisir ce dépôt.
2. Paramètres de build :
   - Commande de build : `npm run build`
   - Répertoire de sortie : `dist`
   - Variable d'environnement `NODE_VERSION` : `22`
3. Dans **Paramètres, Variables et secrets**, ajouter le secret **`CAHIER_PASSWORD`** (production, et aperçu si utilisé) avec le mot de passe à partager.
4. Déployer. Pour changer le mot de passe, modifier le secret et redéployer : toutes les sessions ouvertes sont alors invalidées.

Sans la variable `CAHIER_PASSWORD`, le site refuse tout accès (échec fermé).

Recommandé : ajouter dans Cloudflare (**Sécurité, WAF, Règles de limitation de débit**) une règle limitant les tentatives sur le chemin `/__login`.

Alternative à un mot de passe unique : **Cloudflare Access** (Zero Trust) avec code par courriel pour une liste de participants nommés. Dans ce cas, le fichier `functions/_middleware.ts` peut être retiré.

## Limites à connaître

- Les notes du carnet vivent uniquement dans le navigateur de chaque personne : elles ne sont ni synchronisées ni récupérables par l'équipe.
- Le site est marqué `noindex` (balise, en-tête et `robots.txt`) en plus de la protection par mot de passe.
