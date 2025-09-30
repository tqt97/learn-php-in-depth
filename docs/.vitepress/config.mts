import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "TQT Notes",
  lang: 'vi-VI',
  description: "Không gian lưu trữ và chia sẻ kiến thức, từ code, ngoại ngữ cho đến trải nghiệm học tập hữu ích",

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }
    ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vitepress.dev/vitepress-og.jpg'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  mpa: true,

  markdown: {
    math: true,
    // lineNumbers: true,
    cache: true,
    theme: 'dracula-soft',
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    config(md) {
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'en':
              return 'Copy code'
            default:
              return 'Sao chép code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
    }

  },

  sitemap: {
    hostname: 'https://https://learn-php-in-depth.vercel.app',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  locales: {
    root: { label: 'Vietnamese', lang: 'vi', link: '/', dir: 'ltr' },
    en: { label: 'English', lang: 'en', link: '/en', dir: 'ltr' },
  },
})
