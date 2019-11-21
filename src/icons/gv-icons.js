/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getCssVar } from '../lib/style';
import { TemplateResult } from 'lit-html';

export class GvIcons {

  static async _getIcon (name) {
    const [shape, icon] = name.split(':');
    if (window.GvIcons == null) {
      window.GvIcons = {};
    }
    if (shape && window.GvIcons[shape] == null) {
      await import(`./shapes/${shape}.js`);
    }
    if (shape && window.GvIcons[shape]) {
      return window.GvIcons[shape][icon];
    }
    else {
      console.error(`Cannot find shape "${shape}". Show Gravitee.io Components documentation.`);
    }
    return '?';
  }

  static async getIcon (name, element) {
    let icon = await this._getIcon(name);
    if (icon && element) {
      const color = getCssVar(element, 'gv-icon--c', '#000');
      if (color) {
        icon = icon.replace(/fill="#000"/g, `fill="${color}"`);
      }
      const width = getCssVar(element, 'gv-icon--w', 32);
      const height = getCssVar(element, 'gv-icon--h', 32);
      if (width && height) {
        icon = icon.replace(/<svg/, `<svg width="${width}" height="${height}"`);
      }
    }

    return new TemplateResult([icon], [], 'html');
  }

}
