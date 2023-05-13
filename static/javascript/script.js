const carousel_items=document.querySelectorAll('.carousel-item');
const prevBut=document.querySelector('.previos-button');
const nextBut=document.querySelector('.next-button');
let currentSlide=0;
function showSlide(index){
    carousel_items.forEach(item=>item.classList.remove('active'));
    carousel_items[index].classList.add('active');
}
function nextSlide(){
    if(currentSlide===carousel_items.length-1){
        currentSlide=0;
    }
    else {
        currentSlide++;
    }
    showSlide(currentSlide);
}
function prevSlide(){
    if(currentSlide===0){
        currentSlide=carousel_items.length-1;
    }
    else {
        currentSlide--;
    }
    showSlide(currentSlide);
}
showSlide(currentSlide);
prevBut.onclick=prevSlide;
nextBut.onclick=nextSlide;
const card_array=[
    {
        title:'flight booking',
        image_path: 'section-three/card-1.jpg',
        card_text: 'Lorem ipsum dolor m quod soluta maxime itaque? Assumenda eaque animi recusandae hic unde commodi fugit exercitationem quis!'
    },
    {
        title:'hotel and resort booking',
        image_path: 'section-three/card-2.jpg',
        card_text: 'Lorem ipsum dolor m quod soluta maxime itaque? Assumenda eaque animi recusandae hic unde commodi fugit exercitationem quis!'
    },
    {
        title:'family trip planner',
        image_path: 'section-three/card-3.jpg',
        card_text: 'Lorem ipsum dolor m quod soluta maxime itaque? Assumenda eaque animi recusandae hic unde commodi fugit exercitationem quis!'
    },
    {
        title:'cruise tour',
        image_path: 'section-three/card-4.jpg',
        card_text: 'Lorem ipsum dolor m quod soluta maxime itaque? Assumenda eaque animi recusandae hic unde commodi fugit exercitationem quis!'
    },
    {
        title:'fire camp',
        image_path: 'section-three/card-5.jpg',
        card_text: 'Lorem ipsum dolor m quod soluta maxime itaque? Assumenda eaque animi recusandae hic unde commodi fugit exercitationem quis!'
    },
    {
        title:'comfortable holidays ',
        image_path: 'section-three/card-6.jpg',
        card_text: 'Lorem ipsum dolor m quod soluta maxime itaque? Assumenda eaque animi recusandae hic unde commodi fugit exercitationem quis!'
    }
]
const card_container=document.querySelector('.travel-cards');
function renderItems(array,location){
    array.forEach(item=>{
        const cardWrapper=document.createElement('div');
        const cardImage=document.createElement('img');
        cardImage.setAttribute('src',item.image_path);
        const cardTitle=document.createElement('h3');
        cardTitle.textContent=item.title;
        const cardDescription=document.createElement('p');
        cardDescription.textContent=item.card_text;
        cardWrapper.append(cardImage,cardTitle,cardDescription);
        location.append(cardWrapper);
    })
}
renderItems(card_array,card_container);
const burgerMenu=document.querySelector('header > img');
const sectionArray=document.querySelectorAll('section');
const navLinks=document.querySelector('header ul');
burgerMenu.onclick=function(){
    navLinks.classList.toggle('nav-768');
    const navInfo=navLinks.getBoundingClientRect();
    const navHeight=navInfo.height;
    if(navHeight >0){
        sectionArray[1].style.marginTop=navHeight+'px';
    }
    else{
        sectionArray[1].style.marginTop='0px';
    }
}
   
