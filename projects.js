//let info = 'StudySched is an iOS app that helps students stay organized. Used Swift and XCode to create the application. You can check it out here:'

function addInfo(info, title, img){
    let infoHTML = `

    <div class="img-container">
        <img class="proj-img" src='${img}' alt="">
    </div>
    <div class="info-text-div">
        <p class="proj-info-header">${title}</p>
        <p class="studysched">${info} <a href="https://studysched.com" target="_blank">Info Website</a> <a href="https://github.com/samarth212/StudySched" target="_blank">GitHub</a></p>
        <p class="close" onclick="
        document.querySelector('.project-info-inactive').classList.remove('project-info');
        document.querySelector('.info-content').innerHTML = '';
        ">CLOSE</p>
        
    </div>
  
    `


    document.querySelector(".info-content").innerHTML = infoHTML


}

function addCloseBar(){
    document.querySelector('.close-info').innerHTML = `
    
    <p>DETAILS</p>
    <p onclick="
   
    document.querySelector('.close-info-inactive').classList.remove('.close-info')
    ">CLOSE</p>
    `
}