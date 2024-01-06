//let info = 'StudySched is an iOS app that helps students stay organized. Used Swift and XCode to create the application. You can check it out here:'

function addInfo(info, title, img){
    let infoHTML = `

    <div class="img-container">
        <img class="proj-img" src="images/Screenshot 2023-11-17 at 7.14.18 PM.png" alt="">
    </div>
    <div class="info-text-div">
        <p class="proj-info-header">${title}</p>
        <p class="studysched">${info}</p>
    </div>
  
    `
    document.querySelector(".info-content").innerHTML = infoHTML
}

