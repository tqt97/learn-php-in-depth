// import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')
const currentYear = new Date().getFullYear()

export default defineAdditionalConfig({
	description: 'Vite & Vue powered static site generator.',

	themeConfig: {
		logo: '../public/images/logo.png',
		nav: nav(),
		search: {
			provider: 'local'
		},
		i18nRouting: true,
		sidebar: {
			'/documents/': [
				{
					text: 'Documents',
					items: [
						{ text: 'Docs', link: '/documents/docs' }
					]
				}
			],
			'/blogs/': [
				{
					text: 'Blogs',
					items: [
						{ text: 'Blog', link: '/blogs/blog' },
					]
				}
			],
			'/snippets/': [
				{
					text: 'Snippets',
					items: [
						{ text: 'Snippet', link: '/snippets/snippet' }
					]
				}
			]
		},
		editLink: {
			pattern: 'https://github.com/tqt97/learn-php-in-depth/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		returnToTopLabel: 'Back to top',
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © ${currentYear} Learn PHP in Depth`
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/tqt97/learn-php-in-depth' }
		],
		lastUpdated: {
			text: 'Updated at',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'medium'
			}
		},
	}
})

function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: 'Documents', link: '/en/documents', activeMatch: '/en/documents/' },
		{ text: 'Blogs', link: '/en/blogs', activeMatch: '/en/blogs/' },
		{ text: 'Snippets', link: '/en/snippets', activeMatch: '/en/snippets/' },
	]
}