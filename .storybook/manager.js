import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import brandImage from '../assets/images/gravitee-logo-dark-blue.svg';

const graviteeTheme = create({
  base: 'light',
  brandTitle: 'Gravitee components',
  brandUrl: 'https://gravitee.io/',
  brandImage,
});

addons.setConfig({
  theme: graviteeTheme,
  sidebar: {
    showRoots: true,
  },
  enableShortcuts: false,
});
