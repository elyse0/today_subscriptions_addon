
console.log("Executing!")
// Lateral bar

lateralBar = document.querySelector("#contentContainer")
if(lateralBar !== null){

    lateralBar.remove()
}

// Lateral small bar

lateralSmallBar = document.querySelector("ytd-mini-guide-renderer.style-scope")
if(lateralSmallBar !== null){

    lateralSmallBar.remove()
}

// Youtube subscriptions feed

youtube = document.querySelector("ytd-section-list-renderer.style-scope > div:nth-child(2)").childNodes

for (let i = 0; i < youtube.length; i++){
    if(i !== 0 )
        youtube[i].remove()
}

// Hide all videos

videos = document.querySelectorAll('#items.style-scope.ytd-grid-renderer ytd-grid-video-renderer.style-scope.ytd-grid-renderer')

for(let i = 0; i < videos.length; i++){

    videos[i].hidden = true
}

videos_to_show = document.querySelectorAll('#overlays.style-scope.ytd-thumbnail ytd-thumbnail-overlay-time-status-renderer.style-scope.ytd-thumbnail')

for(let i = 0; i < videos_to_show.length; i++){

    selected_video = document.querySelectorAll('#overlays.style-scope.ytd-thumbnail ytd-thumbnail-overlay-time-status-renderer.style-scope.ytd-thumbnail')[i]
    //selected_video.parentElement.parentElement.parentElement.parentElement.parentElement.hidden = true

    if(selected_video.parentElement.childElementCount === 2){
        selected_video.parentElement.parentElement.parentElement.parentElement.parentElement.hidden = false
    }

}

// Hide seen

// already_seen = document.querySelectorAll('#overlays.ytd-thumbnail #progress')
//
// for (let i = 0; i < already_seen.length; i++){
//
//     already_seen[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.hidden = true
// }