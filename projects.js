//let info = 'StudySched is an iOS app that helps students stay organized. Used Swift and XCode to create the application. You can check it out here:'
let infoHTML = `<p>${info}</p>`

function addInfo(info){
    document.querySelector(".project-info").innerHTML = infoHTML
}