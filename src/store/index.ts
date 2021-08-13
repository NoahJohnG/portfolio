import { createStore } from 'vuex'

export default createStore({
    state: {
        // IMPORTANT: project ID's must having a matching view located at '@/views/projects/ID.vue'
        projectList: {
            /*
            "view_name": {
                "name": string <- REQUIRED,
                "role": string <- REQUIRED,
                "orgs": string[] <- REQUIRED,
                "summary": string <- REQUIRED,
                "finished": boolean <- REQUIRED,
                "start": string <- OPTIONAL,
                "end": string <- OPTIONAL,
                "keywords": string[] <- RECOMENDED,
                "team": record<string, string> <- OPTIONAL
                "image": string <- OPTIONAL
            }
            */
            "portfolio": {
                "name": "Portfolio",
                "role": "Creator",
                "orgs": ["Personal Project"],
                "summary": "Only so much information can fit on a single page Résumé, and websites like LinkedIn are far too generic.\
                            In an effort to offer a more personal and in depth introduction to everything that makes up Noah,\
                            I decided to build a website from the ground up!",
                "finished": true,
                "start": new Date("June 2021"),
                "keywords": ["Vue", "HTML", "Less", "Typescript"],
                "image": "/SCRiPT.png"
            },
            "chess": {
                "name": "Physical Chess AI",
                "role": "Creator",
                "orgs": ["Cal Poly SLO"],
                "summary": "In an increasingly digital society, it can be hard to find hobbies that take you away from the screen.\
                            The virtual world offers AI that allow users to play multiplayer games alone, internet connectivity\
                            that enables connections with people far away, and uncountable resources for learning. The Physical\
                            Chess AI seeks to take as many of these advantages as possible and pack them into the form factor\
                            of a traditional chess board!",
                "finished": false,
                "start": new Date("January 2021"),
                "keywords": ["Embedded Systems", "C", "Circuit Design", "Linux", "Soldering"],
                "team": {
                    "John Oliver": "https://www.linkedin.com/in/john-oliver-1b98581/"
                },
                "image": "/chessboard.png"
            },
            "lockheed": {
                "name": "Scheduling Service",
                "role": "Student",
                "orgs": ["Lockheed Martin", "Cal Poly SLO"],
                "summary": "Built a thing for Lockheed Martin",
                "finished": true,
                "start": new Date("September 2020"),
                "end": new Date("March 2021"),
                "keywords": ["Python", "C++", "TCP/IP", "UI"],
                "team": {
                    "Chris Lupo": "https://www.linkedin.com/in/chrislupo/",
                    "Jack Ribarich": "https://www.linkedin.com/in/jack-ribarich/",
                    "Ryan Stamper": ""
                },
                "image": "/SCRiPT.png"
            },
            "statistics": {
                "name": "Joint Distribution Visualizer",
                "role": "Student",
                "orgs": ["Cal Poly SLO"],
                "summary": "Missed a statistics midterm smh",
                "finished": true,
                "start": new Date("August 2020"),
                "keywords": ["python", "statistics"],
                "image": "/SCRiPT.png"
            },
            "intel": {
                "name": "SSD Firmware Upgrade",
                "role": "SSD Firmware Developement Intern",
                "orgs": ["Intel"],
                "summary": "Spearheaded project to greatly increase SSD firmware efficiency by migrating to 64-bit binaries on existing hardware platform.",
                "start": new Date("June 2020"),
                "end": new Date("December 2020"),
                "keywords": ["C", "C++", "ARM Assembly", "Green Hills MULTI IDE"],
                "team": {
                    "Miguel Parra": "https://www.linkedin.com/in/miguel-parra-a97b31203/",
                    "Craig Valine": "https://www.linkedin.com/in/craig-valine-4485452/",
                    "Denise Vitt": "https://www.linkedin.com/in/denise-vitt-0001ba2/"
                },
                "image": "/SCRiPT.png"
            },
            "tatext": {
                "name": "TaText",
                "role": "Full Stack Developer",
                "orgs": ["Thirdpool Recruiting"],
                "summary": "Architected an SMS web-app that streamlines communication between recruiters and candistarts.",
                "finished": true,
                "start": new Date("June 2019"),
                "end": new Date("June 2020"),
                "keywords": ["SaS", "Vue", "HTML", "CSS", "Javascript"],
                "team": {
                    "Ben Hess": "https://www.linkedin.com/in/bkhess/",
                    "Logan Dziuk": "https://www.linkedin.com/in/logan-dziuk/"
                },
                "image": "/SCRiPT.png"
            },
            "wasted": {
                "name": "WastEd",
                "role": "Software Developer",
                "orgs": ["Hackathon"],
                "summary": "Architected an SMS web-app that streamlines communication between recruiters and candistarts.",
                "finished": true,
                "start": new Date("February 2019"),
                "keywords": ["Python", "Computer Vision", "Hackathon"],
                "team": {
                    "Madeline Feigles": "https://www.linkedin.com/in/madelinefeigles/",
                    "Cole Brinsfield": "https://www.linkedin.com/in/colebrinsfield/",
                    "Zach Blalock": "https://www.linkedin.com/in/zach-blalock/"
                },
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
