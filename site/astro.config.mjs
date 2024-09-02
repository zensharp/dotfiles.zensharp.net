import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dotfiles.zensharp.net',
	integrations: [
		starlight({
			title: 'Dotfiles',
			social: {
				github: 'https://github.com/zensharp/dotfiles',
			},
			sidebar: [
				{
					label: 'Main',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Playbooks',
					autogenerate: { directory: 'playbooks' },
				},
				{
					label: 'Etc',
					autogenerate: { directory: 'etc' },
				},
			],
		}),
	],
});
