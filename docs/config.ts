import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const currentYear = new Date().getFullYear()

export default defineAdditionalConfig({
	description: 'Không gian lưu trữ và chia sẻ kiến thức, từ code, ngoại ngữ cho đến trải nghiệm học tập hữu ích',

	themeConfig: {
		logo: 'images/logo.png',
		nav: nav(),
		search: {
			provider: 'local'
		},
		i18nRouting: true,
		sidebar: {
			'/programming': [
				{
					text: 'PHP',
					items: sidebarProgramming()
				},
				{
					text: 'Laravel',
					items: []
				},
				{
					text: 'Javascript',
					items: []
				},
				{
					text: 'ReactJS',
					items: []
				},
				{
					text: 'Thiết kế hệ thống',
					items: []
				}
			],
			'english': [
				{
					text: 'Tiếng Anh',
					items: [
						{
							text: 'Khóa học thầy Hùng cô Nhi',
							collapsed: true,
							items: [
								{ text: 'Ngày 01', link: '/english/courses/day-01' },
								{ text: 'Ngày 02', link: '/english/courses/day-02' },
								{ text: 'Ngày 03', link: '/english/courses/day-03' },
								{ text: 'Ngày 04', link: '/english/courses/day-04' },
								{ text: 'Ngày 05', link: '/english/courses/day-05' },
								{ text: 'Ngày 06', link: '/english/courses/day-06' },

							]
						},
					]
				}
			],
			'/article': [
				{
					text: 'Articles',
					items: [
						{ text: 'Blogs', link: '/articles/blogs' },
						{ text: 'Snippets', link: '/articles/snippets' },
						{ text: 'The new post', link: '/articles/the-new-post' },
					]
				}
			],
			'snippets/': [
				{
					text: 'snippets',
					items: []
				}
			],

		},
		editLink: {
			pattern: 'https://github.com/tqt97/learn-php-in-depth/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		returnToTopLabel: 'Back to top',
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © ${currentYear} <a href="https://github.com/tqt97" target="_blank"><b style="color:#3451b2">TQT97</b></a> | Không gian lưu trữ và chia sẻ kiến thức, từ code, ngoại ngữ cho đến trải nghiệm học tập hữu ích`
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
		{ text: 'Lập trình', link: '/programming', activeMatch: '/programming/' },
		{ text: 'Tiếng anh', link: '/english', activeMatch: '/english/' },
		{ text: 'Bài viết', link: '/articles', activeMatch: '/articles/' },
		{ text: 'Snippets', link: '/snippets', activeMatch: '/snippets/' },
	]
}

function sidebarProgramming(): DefaultTheme.SidebarItem[] {
	return [
		{
			items: [
				{ text: 'Tổng quan', link: '/programming/php/index' },
				{
					text: 'Các hàm có sẵn',
					collapsed: true,
					items: [
						{ text: 'Xử lý chuỗi', link: '/programming/php/string-functions' },
						{ text: 'Xử lý số', link: '/programming/php/number-functions' },
						{ text: 'Xử lý ngày', link: '/programming/php/datetime-functions' },
						{ text: 'Xử lý mảng', link: '/programming/php/array-functions' },
						{ text: 'Xử lý file', link: '/programming/php/file-functions' },
						{ text: 'Xử lý giải thuật', link: '/programming/php/algorithm-functions' },
					]
				},
			]
		}
	]
}