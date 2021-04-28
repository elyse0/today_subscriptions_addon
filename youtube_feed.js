function check_tabs(alarmInfo) {

    console.log("Handling alarm")

    browser.tabs.query({

        currentWindow: true,
        url: "https://www.youtube.com/feed/subscriptions"
    }, (tabs, error) => {

        if (error) {

            return Error()
        }

        if(!tabs.length){

            return Error
        }

        browser.storage.local.get({
                hide_left_bar: false
            }, (data, err) => {

                console.log("Hide left bar: " + data.hide_left_bar)

                if(!err){

                    for (let i = 0; i < tabs.length; i++) {

                        if(data.hide_left_bar){

                            browser.tabs.executeScript(tabs[i].id, {
                                file: "scripts/remove_left_bar.js"})
                        }

                        browser.tabs.executeScript(tabs[i].id, {
                            file: "scripts/today_subscriptions.js"
                        })
                    }
                }
            }
        )
    })
}

browser.alarms.create({periodInMinutes: 0.015})
browser.alarms.onAlarm.addListener(check_tabs);