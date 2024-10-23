import type { NavGroup } from '~/types/nav'

const author = {
    name: '小李同学',
    avatar: 'https://picsur.xxfer.cn/i/0b449fbc-f70c-4729-8840-45f8f68de15e.webp',
    email: '2565474095@qq.com',
    homepage: 'https://xxfer.cn',
}

export default {
    title: '小李同学 (@JJLibra)',
    description: 'Survive or Thrive.',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: '/icon.png',
    url: 'https://xxfer.cn',
    blogAtom: 'https://blog.xxfer.cn/rss.xml',
    footer: {
        copyright: `© ${new Date().getFullYear()} 小李同学`,
        message: 'aka Junjie Li, JJLibra',
    },
    imageDomains: [
        'blog.zhilu.cyou',
        // '7.isyangs.cn',
    ],
    injectHeadLinks: [
        // { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'this.media="all"' },
    ],
    nav: <NavGroup[]> [
        {
            title: '',
            list: [
                { icon: 'ph:house-duotone', title: '主页', link: '/' },
                { icon: 'ph:pen-nib-duotone', title: '文章', link: '/article' },
                // { icon: "ph:pen-nib-duotone", title: "文章", link: "https://blog.xxfer.cn", external: true },
                // { icon: "ph:code-duotone", title: "项目", link: "/project" },
                { icon: 'ph:code-duotone', title: '项目', link: 'https://github.com/JJLibra/#user-33976233-pinned-items-reorder-form', external: true },
                { icon: 'ph:globe-duotone', title: '站点', link: '/site' },
                { icon: 'ph:files-duotone', title: '日志', link: '/log' },
            ],
        },
        {
            title: '社交',
            list: [
                { icon: 'ri:qq-fill', title: '群: 169994096', link: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd', external: true },
                { icon: 'ph:github-logo-duotone', title: 'Github', link: 'https://github.com/JJLibra', external: true },
                { icon: 'ph:telegram-logo-duotone', title: 'Telegram', link: 'https://t.me/JJLibra', external: true },
            ],
        },
    ],
}