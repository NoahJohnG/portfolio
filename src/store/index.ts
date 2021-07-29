import { createStore } from 'vuex'

export default createStore({
  state: {
    projectList: [
        {
            "name": "Physical Chess AI",
            "description": "Designed a chessboard that automatically detects a players move, tracks the board's state, and communicates an AI's response.",
            "image": "/chessboard.png"
        },
        {
            "name": "Scheduling Service",
            "description": "Implemented a real-time scheduling service using Lockheed Martin’s SmartSat™ SDK.",
            "image": "/SCRiPT.png"
        },
        {
            "name": "Some Networking Project",
            "description": "Did a thing or something.",
            "image": "/SCRiPT.png"
        }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
