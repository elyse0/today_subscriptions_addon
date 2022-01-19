// Remove manage subscriptions button
manageSubscriptionsButton = document.getElementById("subscribe-button")
if (manageSubscriptionsButton !== null) {
    manageSubscriptionsButton.remove()
}

// Remove view mode buttons (grid and list)
viewModeButtons = document.getElementById("menu")
if (viewModeButtons !== null) {
    viewModeButtons.remove()
}

// Remove continuation loader (It takes care of loading more videos when you scroll)
continuationLoader = document.getElementsByTagName('ytd-continuation-item-renderer')
if (continuationLoader.length !== 0) {
    continuationLoader[0].remove()
}

// Hide all thumbnails
thumbnails = document.getElementsByTagName('ytd-grid-video-renderer')
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].hidden = true
}

// Remove not today's subscriptions
dayDivisions = document.getElementById("contents").childNodes
for (let i = dayDivisions.length - 1; i >= 0; i--) {
    if (i !== 0) {
        dayDivisions[i].remove()
    }
}

// Show today subscriptions
thumbnails = document.getElementsByTagName('ytd-grid-video-renderer')
for (let i = 0; i < thumbnails.length; i++) {

    if(thumbnails[i].childNodes[1].childNodes[0].childNodes[1].childNodes[3].childNodes.length === 2){

        thumbnails[i].hidden = false
    }
}
