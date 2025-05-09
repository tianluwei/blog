export default {
    title: '码路芽子', // 博客的标题
    description: 'tlw 的个人博客', // 博客的介绍
    base: '/blog/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        nav: [ // 页面右上角的导航
            { text: "基础知识", link: "/articles/vue/上传素材到COS" },
            { text: "技术博客", link: "/articles/uniapp/一键登录" },
            {
                text: '博客文档',
                items: [ // 可以配置成下拉
                    { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
                    { text: '其他', link: '/articles/other/nvm管理node' },
                ]
            }
        ],
        sidebar: { // 侧边栏，可以分组
            "/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "上传素材到COS",
                            link: "/articles/vue/上传素材到COS",
                        },
                        {
                            text: "文件下载",
                            link: "/articles/vue/文件下载",
                        },
                    ],
                },
            ],
            "/articles/uniapp/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "一键登录",
                            link: "/articles/uniapp/一键登录",
                        }
                    ],
                },
            ],
            "/articles/javaScript-core/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "1. 构造函数、原型、原型链",
                            link: "/articles/javaScript-core/构造函数、原型、原型链",
                        },
                        {
                            text: "2. 执行上下文和执行上下文栈",
                            link: "/articles/javaScript-core/执行上下文和执行上下文栈",
                        },
                        {
                            text: "3. this的指向",
                            link: "/articles/javaScript-core/this的指向",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/articles/libs/": [
                {
                    items: [
                        {
                            text: "1. VForm3低代码初体验",
                            link: "/articles/libs/VForm3低代码初体验",
                        },
                    ],
                }
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/tianluwei" }], // 可以连接到 github
    },
    head: [
        [
            'link', { rel: 'icon', href: '/icon.png' }
        ],
        ['script', { id: 'abcscript' }, `console.log(1001)`]
    ]
}


