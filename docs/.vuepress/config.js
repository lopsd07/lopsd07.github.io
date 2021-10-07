const fs = require("fs");
const path = require("path");

module.exports = {
    title: '我的笔记',  // 设置网站标题
    description: 'My Notes',
    base: '',
    theme: 'antdocs',
    themeConfig: {
        // backToTop: true,
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
            // { text: '数据库', link: '/database/' },
            {
                text: '常用工具', ariaLabel: 'tools', items:
                    [{ text: '测试', link: '/tools/testing/' }, { text: '系统', link: '/tools/system/' }]
            },
            { text: '附录', link: '/more/' },
            { text: 'Bing', link: 'https://bing.com' },
        ],
        sidebar: {
            '/base/': getSideBar('base', '基础'),
            '/spring/': getSideBar('spring', 'Spring'),
            '/cloud-native/spring-cloud/': getSideBar('cloud-native/spring-cloud', 'Spring Cloud'),
            '/tools/testing/': getSideBar('tools/testing', '测试'),
            '/tools/system/': getSideBar('tools/system', '系统'),
        },
        sidebarDepth: 2
    },
    lastUpdated: 'Last Updated', // string | boolean
    plugins: {
        '@vuepress/back-to-top': true,
        '@vuepress/last-updated': true,
        'reading-progress': true,
        'fulltext-search': true,
        // '@vuepress/search': {
        //     search: true, //默认false
        //     searchMaxSuggestions: 10 // 默认是5
        // },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
        },
        '@vuepress/active-header-links': {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        "one-click-copy":
        {
            copyMessage: "复制成功！",
            toolTipMessage: 'Copy to clipboard',
        }
    }
}

function getSideBar(folder, title) {
    const extension = [".md"];

    const files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
            (item) =>
                item.toLowerCase() != "readme.md" &&
                fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
                extension.includes(path.extname(item))
        );

    return [{ title: title, children: ["", ...files] }];
}