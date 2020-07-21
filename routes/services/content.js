const express = require("express")
const app = express.Router()


app.get("/api/pages/fortnite-game", async (req, res) => {
    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenews: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://cdn.discordapp.com/attachments/551380453135745044/735188726807920660/spyrez1920.png",
                        tileImage: "https://cdn.discordapp.com/attachments/551380453135745044/735188553063071804/spyrez1024.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "SpyrezFN",
                        _type: "CommonUI Simple Message MOTD",
                        title: "SpyrezFN",
                        body: "Welcome to SpyrezFN, A private server created by: Spyrez (TikTok: @mila.gaat.tekenen)",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `SpyrezFN-News-0`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "SpyrezFN",
                        body: "Credits: SpyrezFN (TikTok: @mila.gaat.tekenen)",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
                        stage: "season13",
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
                        stage: "season13",
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        }
    })
})


module.exports = app