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
                {text: 'Allegati',
                    items: [
                        {text: 'Allegati 1 - Project Overview Statement', link: `${processPath}/Allegato-1`},
                        {text: 'Allegato 2 - Requirements Breakdown Structure', link: `${processPath}/Allegato-2`},
                        {text: 'Allegato 3 - Work Breakdown Structure', link: `${processPath}/Allegato-3`},
                        {text: 'Allegato 4 - Stima dei costi', link: `${processPath}/Allegato-4`},
                        {text: 'Allegato 5 - Diagramma di Gantt', link: `${processPath}/Allegato-5`},
                        {text: 'Allegato 6 - Risk Analysis', link: `${processPath}/Allegato-6`}
                    ]
                }
            ],

            socialLinks: [
                {icon: 'github', link: 'https://github.com/PM-Papyrus/PM-Papyrus'}
            ]
        }
    })
)
