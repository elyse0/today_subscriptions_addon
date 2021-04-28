//console.log("Executing!")

// Remove subscribe button
subscribe_button = document.getElementById("subscribe-button")
if(subscribe_button !== null){

    subscribe_button.remove()
}

// Remove menu button
menu_button = document.getElementById("menu")
if(menu_button !== null){

    menu_button.remove()
}

// Remove continuation loader
continuation_loader = document.getElementsByTagName('ytd-continuation-item-renderer')
if (continuation_loader.length !== 0){

    continuation_loader[0].remove()
}

// Hide all thumbnails
thumbnails = document.getElementsByTagName('ytd-grid-video-renderer')
for (let i = 0; i < thumbnails.length; i++) {

    thumbnails[i].hidden = true
}

// Remove not today's subscriptions
days = document.getElementById("contents").childNodes

for (let i = days.length - 1; i >= 0; i--) {

    if (i !== 0) {
        days[i].remove()
    }
}

// Show today subscriptions
thumbnails = document.getElementsByTagName('ytd-grid-video-renderer')
for (let i = 0; i < thumbnails.length; i++) {

    if(thumbnails[i].childNodes[1].childNodes[0].childNodes[1].childNodes[3].childNodes.length === 2){

        thumbnails[i].hidden = false
    }
    //else {
    //
    //     thumbnails[i].remove()
    // }
}
