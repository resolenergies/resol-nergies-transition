

# Personnalisation des couleurs du site avec les couleurs du logo Resol Energies

## Palette de couleurs du logo
- **Vert** : #29BE4A (couleur principale)
- **Bleu fonce** : #180582 (texte du logo, couleur secondaire)
- **Turquoise** : #3ECFC7 (accent complementaire)
- **Jaune/Or** : #FBB52A (accent)

## Changements prevus

### 1. Variables CSS (src/index.css)
Mise a jour des tokens de couleur pour refleter la palette du logo :

- **primary** : vert #29BE4A (boutons, liens, elements principaux)
- **secondary** : bleu fonce #180582 (titres, elements secondaires)
- **accent** : jaune/or #FBB52A (badges, highlights, CTA secondaires)
- **ring/focus** : turquoise #3ECFC7 (etats de focus, elements decoratifs)
- **gradient-hero** : degrade du vert #29BE4A vers le bleu #180582
- Ajustement des couleurs de fond, bordures et texte muted pour harmoniser avec la nouvelle palette
- Mode sombre adapte en consequence

### 2. Configuration Tailwind (tailwind.config.ts)
Aucun changement structurel necessaire car les couleurs sont deja liees aux variables CSS.

### Fichiers modifies
- `src/index.css` : variables de couleur light et dark

