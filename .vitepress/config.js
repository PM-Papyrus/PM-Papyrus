import {defineConfig} from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

let reportPath = '/report'
let processPath = '/process'
// https://vitepress.dev/reference/site-config

export default withMermaid(
    defineConfig({
        base: '/PM-Papyrus/',
        title: "PM-Papyrus",
        description: "Project Management - Papyrus",
        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            nav: [
                {text: 'Home', link: '/'},
            ],

            sidebar: [
                {text: 'Report',
                    items: [
                        {text: 'Scoping', link: `${reportPath}/1-Scoping`},
                        {text: 'Planning', link: `${reportPath}/2-Planning`},
                        {text: 'Launching/Execution', link: `${reportPath}/3-Launching`},
                        {text: 'Monitoring & Controlling', link: `${reportPath}/4-Monitoring`},
                        {text: 'Closing & Acceptance', link: `${reportPath}/5-Closing`}
                    ]
                },
            ],

            socialLinks: [
                {icon: 'github', link: 'https://github.com/PM-Papyrus/PM-Papyrus'}
            ]
        }
    })
)
