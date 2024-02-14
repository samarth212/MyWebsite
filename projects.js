function addInfo(info, title, site, git){

    let infoHTML = `

    <div class="img-container">
        <img class="proj-img" src="" alt="">
    </div>
    <div class="info-text-div">
        <p class="proj-info-header">${title}</p>
        <p class="studysched">${info} <a href="${site}" target="_blank">Website</a> <a href="${git}" target="_blank">GitHub</a></p>
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


$(document).ready(function() {

    $(".title").waypoint(function(){
        $(".title").addClass("animate__animated animate__zoomIn")
    }, {offset: "80%"})


    $(".ab-title").waypoint(function(){
        $(".ab-title").addClass("animate__animated animate__fadeInLeft")
    }, {offset: "80%"})

    $(".middle-desc").waypoint(function(){
        $(".middle-desc").addClass("animate__animated animate__fadeInRight")
    }, {offset: "80%"})

    $(".profile").waypoint(function(){
        $(".profile").addClass("animate__animated animate__fadeInLeft")
    }, {offset: "80%"})

    $(".skills").waypoint(function(){
        $(".skills").addClass("animate__animated animate__fadeInRight")
    }, {offset: "80%"})

    $(".resume-title").waypoint(function(){
        $(".resume-title").addClass("animate__animated animate__fadeInRight")
    }, {offset: "80%"})

    $(".resume-section").waypoint(function(){
        $(".resume-section").addClass("animate__animated animate__fadeInLeft")
    }, {offset: "80%"})
    
    $(".experience").waypoint(function(){
        $(".experience").addClass("animate__animated animate__bounce")
    }, {offset: "80%"})

    $(".project-page-title").waypoint(function(){
        $(".project-page-title").addClass("animate__animated animate__fadeInLeft")
    }, {offset: "80%"})

    $(".project-thumbnail").waypoint(function(){
        $(".project-thumbnail").addClass("animate__animated animate__backInUp")
    }, {offset: "80%"})

    $(".activities-page-title").waypoint(function(){
        $(".activities-page-title").addClass("animate__animated animate__fadeInLeft")
    }, {offset: "80%"})

    $(".activity").waypoint(function(){
        $(".activity").addClass("animate__animated animate__fadeInRight")
    }, {offset: "80%"})
})