
function get_boolean_from_left_bar_form(){

    return document.querySelector("#hide_left_bar").value !== "false"
}

function save_options(e) {
    e.preventDefault();

    browser.storage.local.set({
        hide_left_bar: get_boolean_from_left_bar_form(),
    });
}

function restore_options() {

    browser.storage.local.get({
        hide_left_bar: false,
    }, (data, error) => {

        if(!error){

            document.querySelector("#hide_left_bar").value = data.hide_left_bar
        }
    })
}

document.addEventListener("DOMContentLoaded", restore_options);
document.querySelector("form").addEventListener("submit", save_options);
