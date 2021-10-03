module.exports = {
    title: '我的随笔',  // 设置网站标题
    description: 'My Notes',
    base: '',
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {
                text: '基础', ariaLabel: 'base', items:
                    [{ text: '数据结构', link: '/base/' },
                    { text: '算法', link: '/base/' }]
            },
            {
                text: '编程语言', ariaLabel: 'java', items:
                    [{ text: 'Java', link: '/java/' },
                    { text: 'Python', link: '/python/' },
                    { text: 'Golang', link: '/golang/' }
                    ]
            },
            {
                text: 'Web 技术', ariaLabel: 'web', items:
                    [{ text: 'Spring', link: '/spring/' }
                    ]
            },
            {
                text: '云原生', ariaLabel: 'cloud-native', items:
                    [{ text: 'Spring Cloud', link: '/cloud-native/spring-cloud/' }
                    ]
            },
            { text: '数据库', link: '/database/' },
            { text: '我的工具', link: '/tools/' },
            { text: '附录', link: '/more/' },
            { text: 'Bing', link: 'https://bing.com' },
        ],
        sidebar: {
            '/base/': [
                {
                    title: '基础',
                    collapsable: true,
                    children: [
                        { title: '基础', path: '/base/' },
                    ]
                }
            ],
        },
        sidebarDepth: 2
    },
    lastUpdated: 'Last Updated', // string | boolean
    plugins: {
        '@vuepress/back-to-top': true,
        '@vuepress/last-updated': true,
        '@vuepress/search': {
            search: true, //默认false
            searchMaxSuggestions: 10 // 默认是5
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
        }
    }
}