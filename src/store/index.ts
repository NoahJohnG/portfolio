import { createStore } from 'vuex'

export default createStore({
    state: {
        // IMPORTANT: project ID's must having a matching view located at '@/views/projects/ID.vue'
        projectList: {
            /*
            "view_name": {
                "name": string <- REQUIRED,
                "date": string <- REQUIRED,
                "summary": string <- REQUIRED,
                "keywords": string[] <- RECOMENDED,
                "image": string <- OPTIONAL
            }
            */
            "chess": {
                "name": "Physical Chess AI",
                "date": "January 2021",
                "summary": "Designed a chessboard that automatically detects a players move, tracks the board's state, and communicates an AI's response.",
                "keywords": ["Embedded Systems", "C", "Circuit Design", "Linux"],
                "image": "/chessboard.png"
            },
            "lockheed": {
                "name": "Scheduling Service",
                "date": "September 2020",
                "summary": "Implemented a real-time scheduling service using Lockheed Martin’s SmartSat™ SDK.",
                "keywords": ["Python", "C++", "TCP/IP", "UI"],
                "image": "/SCRiPT.png"
            },
            "portfolio": {
                "name": "Portfolio",
                "date": "June 2021",
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
