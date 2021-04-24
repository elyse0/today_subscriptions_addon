function handleAlarm(alarmInfo) {

    console.log("Handling alarm")

    browser.tabs.query({currentWindow: true}, (tabs, error) => {

        if (!error) {

            for (var i = 0; i < tabs.length; i++){

                if(tabs[i].url.includes("https://www.youtube.com/feed/subscriptions")){

                    browser.tabs.executeScript(tabs[i].id, {file: "scripts/today_subscriptions.js"}, (data, err) => {

                        if (err)
                            console.log("Error playing tab!")
                        else{

                            console.log("EXECUTING SCRIPT R3KT")
                            console.log(data)
                        }

                    })
                }
            }
        }
    })

}


browser.alarms.create({periodInMinutes: 0.015})
browser.alarms.onAlarm.addListener(handleAlarm);