//let info = 'StudySched is an iOS app that helps students stay organized. Used Swift and XCode to create the application. You can check it out here:'

function addInfo(info, title){
    let infoHTML = `

    <div class="info-text-div">
        <p class="proj-info-header">${title}</p>
        <p class="studysched">${info}</p>
    </div>
  
    `
    document.querySelector(".info-content").innerHTML = infoHTML
}