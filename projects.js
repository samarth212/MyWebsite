//let info = 'StudySched is an iOS app that helps students stay organized. Used Swift and XCode to create the application. You can check it out here:'

function addInfo(info, title, site, git){

    let infoHTML = `

    <div class="img-container">
        <img class="proj-img" src="" alt="">
    </div>
    <div class="info-text-div">
        <p class="proj-info-header">${title}</p>
        <p class="studysched">${info} <a href="https://studysched.com" target="_blank">Website</a> <a href="https://github.com/samarth212/StudySched" target="_blank">GitHub</a></p>
        <p class="close" onclick="
        document.querySelector('.project-info-inactive').classList.remove('project-info');
        document.querySelector('.info-content').innerHTML = '';
        ">CLOSE</p>
        
    </div>
  
    `

    document.querySelector(".info-content").innerHTML = infoHTML

}

function changeImage(source){
    console.log('worked')
    document.querySelector(".proj-img").src = source
}