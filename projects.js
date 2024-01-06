//let info = 'StudySched is an iOS app that helps students stay organized. Used Swift and XCode to create the application. You can check it out here:'

function addInfo(info){
    let infoHTML = `<p>${info}</p>`
    document.querySelector(".project-info").innerHTML = infoHTML
   //console.log(document.querySelector(".project-info"))
}