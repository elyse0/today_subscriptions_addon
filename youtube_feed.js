function check_tabs(alarmInfo) {

    console.log("Handling alarm")

    browser.tabs.query({

        currentWindow: true,
        url: "https://www.youtube.com/feed/subscriptions"
    }, (tabs, error) => {

        if (error) {
            return Error()
        }

        for (let i = 0; i < tabs.length; i++) {

            browser.tabs.executeScript(tabs[i].id, {
                file: "scripts/today_subscriptions.js"
            }, (response, err) => {

                if (err) {
                    return Error
                }

                console.log("Script executed")
            })
        }
    })
}

browser.alarms.create({periodInMinutes: 0.015})
browser.alarms.onAlarm.addListener(check_tabs);