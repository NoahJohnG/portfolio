import { createStore } from 'vuex'

export default createStore({
    state: {
        // IMPORTANT: project ID's must having a matching view located at '@/views/projects/ID.vue'
        projectList: {
            /*
            "view_name": {
                "name": string <- REQUIRED,
                "summary": string <- REQUIRED,
                "keywords": string[] <- RECOMENDED,
                "image": string <- OPTIONAL
            }
            */
            "chess": {
                "name": "Physical Chess AI",
                "summary": "Designed a chessboard that automatically detects a players move, tracks the board's state, and communicates an AI's response.",
                "keywords": ["Embedded Systems", "C", "Circuit Design", "Linux"],
                "image": "/chessboard.png"
            },
            "lockheed": {
                "name": "Scheduling Service",
                "summary": "Implemented a real-time scheduling service using Lockheed Martin’s SmartSat™ SDK.",
                "keywords": ["Python", "C++", "TCP/IP", "UI"],
                "image": "/SCRiPT.png"
            },
            "portfolio": {
                "name": "Portfolio",
                "summary": "Did a thing or something.",
                "keywords": ["Vue", "HTML", "Less", "Typescript"],
                "image": "/SCRiPT.png"
            }
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
