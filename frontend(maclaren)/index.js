//toggle menu button
function toggleMN(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

//background video
function changevideo(name){
    const bgvideos = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');
    const articles = document.querySelectorAll('.article');
    const enquire = document.querySelectorAll('.enq');

    bgvideos.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });
    
    models.forEach(tex =>{
        tex.classList.remove('active');
        if(tex.classList.contains(name)){
            tex.classList.add('active');
        }
    });

    trailers.forEach(clip =>{
        clip.classList.remove('active');
        if(clip.classList.contains(name)){
            clip.classList.add('active');
        }
    });
    articles.forEach(sen =>{
        sen.classList.remove('active');
        if(sen.classList.contains(name)){
            sen.classList.add('active');
        }
    });
    enquire.forEach(enq =>{
        enq.classList.remove('active');
        if(enq.classList.contains(name)){
            enq.classList.add('active');
        }
    });
}

