import"./shapes/general-shapes";export class GvIcons{static getIcon(n){const[o,e]=n.split(":");if(window.GvIcons[o]){if(window.GvIcons[o][e])return window.GvIcons[o][e];console.error(`Cannot find icon "${e}" in shape "${o}". Show Gravitee.io Components documentation.`)}else console.error(`Cannot find shape "${o}". Show Gravitee.io Components documentation.`);return"?"}}
//# sourceMappingURL=gv-icons.js.map