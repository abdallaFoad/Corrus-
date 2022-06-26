/*Start first-header */

/*StartArrow Go To Top */
let arrow = document.querySelector('#scroll-up');
window.onscroll = () => {
  window.scrollY >= 800 ? arrow.style.cssText = 'display:flex;' : arrow.style.cssText = 'display:none;';
}
arrow.onclick = () => this.scrollTo(0, 0);
/*End Arrow Go To Top */
/*start hide first header */
let firstHeader = document.querySelector('.first-header');
let box = document.querySelector('.first-header .boxs');
let mainHide = document.querySelector('.arrow-top');
let hideHeader = document.querySelector('.arrow-top .up');
let showHeader = document.querySelector('.arrow-top .down');
hideHeader.onclick = function () {
  firstHeader.style.cssText = 'height:0; transition: all .5s';
  box.style.cssText = 'display:none';
  this.style.cssText = 'display:none';
  showHeader.style.cssText = 'display:block';
}
showHeader.onclick = function () {
  firstHeader.style.cssText = 'height:70px; transition: all .5s';
  box.style.cssText = 'display:flex';
  this.style.cssText = 'display:none';
  hideHeader.style.cssText = 'display:block';
}

mainHide.onmouseenter = () => {
  let div = document.createElement('div');
  div.className = 'hide-panel';
    let createText = document.createTextNode('Hide Panel');
    div.appendChild(createText);
    div.style.cssText = 'position:absolute; top:70px;right:3px; background-color:#1C2B36; color:white; z-index:22; padding:10px 2px; width:100px; text-align:center; text-transform:capitalize;border:1px solid #ddd'
    mainHide.appendChild(div);
}
mainHide.onmouseleave =  () => {mainHide.lastChild.remove('hide-panel')}

let shopping = document.querySelector('.shop .shopping');
shopping.onmouseenter = () => {
  let div = document.createElement('div');
    let createText = document.createTextNode('Cart');
    div.appendChild(createText);
    div.style.cssText = 'position:absolute; top:70px; background-color:#1C2B36; color:white; z-index:22; padding:10px; width:fit-content; text-align:center; text-transform:capitalize;border:1px solid #ddd; font-size:15px; font-weight:normal'
    shopping.appendChild(div);
}
shopping.onmouseleave =  () => {shopping.lastChild.remove('hide-panel')}
/*end hide first header */
/*start type of media */
let screens = Array.from(document.querySelectorAll('.screens > div'));

screens.forEach((screen) => {
  screen.onmouseenter = function () {
    let div = document.createElement('div');
    div.id = screen.classList;
    let createText = document.createTextNode(screen.className);
    div.appendChild(createText);
    div.style.cssText = 'position:absolute; top:70px; background-color:#1C2B36; color:white; z-index:22; padding:10px; width:80px; text-align:center; text-transform:capitalize;border:1px solid #ddd'
    screen.appendChild(div);
  }
  screen.onmouseleave = function () {
    screen.removeChild(this.childNodes[3]);
  }
});

/*end type of media */
/*End first-header */

/*Start last-header */
let bars = document.querySelector('.bars');
let mainNav = document.querySelector('.main-nav');
let liNav = document.querySelectorAll('.main-nav > li');
let aLink = document.querySelectorAll('.main-nav > li > a');
bars.onclick = function () {
  
  mainNav.style.cssText = 'display:flex; z-index:44; flex-direction:column; width:100%; position:absolute; top:100px; left:0; justify-content:space-between'
  liNav.forEach((li) => {
    li.style.cssText = 'display:flex; justify-content:space-between; width:100%; border-bottom: 1px solid #4A92A0';
  });
  aLink.forEach((a) => {
    a.style.cssText = 'color:white'
  })
  mainNav.classList.toggle('show');
}
/*End last-header */

/*Start Slider */
let allImages = Array.from(document.querySelectorAll('.slider .images img'));
let lengthImgs = allImages.length;
let leftButton = document.querySelector('.slider .left');
let rightButton = document.querySelector('.slider .right');
let pagination = document.querySelector('.slider .pagination');
let startSlider = 1;


leftButton.onclick = leftFunc;
rightButton.onclick = rightFunc;

function leftFunc() {
  if (leftButton.classList.contains('disabled')) {
    return false;
  } else {
    startSlider--;
    checker();
  }
}
function rightFunc() {
  if (rightButton.classList.contains('disabled')) {
    return false;
  } else {
    startSlider++;
    checker();
  }
}

let paginationUl = document.createElement('ul');
paginationUl.id = 'paginationUl';

for (let i = 0; i < lengthImgs; i++){
  let paginationLi = document.createElement('li');
  paginationLi.setAttribute('class', i);
  paginationUl.appendChild(paginationLi);
}
pagination.appendChild(paginationUl);
let arrLi = Array.from(document.querySelectorAll('#paginationUl li'));

for (let i = 0; i < arrLi.length; i++) {
  arrLi[i].onclick = function () {
    removeFunc();
    arrLi[i].classList.add('active');
    allImages[i].classList.add('active');
  }

  checker();
  //Checker Function
  function checker() {
    removeFunc();
    allImages[startSlider - 1].classList.add('active');
    arrLi[startSlider - 1].classList.add('active');

    if (startSlider == 1) {
      leftButton.classList.add('disabled');
    } else {
      leftButton.classList.remove('disabled');
    }

    if (startSlider == lengthImgs) {
      rightButton.classList.add('disabled');
    } else {
      rightButton.classList.remove('disabled');
    }
  }

  function removeFunc() {
    arrLi.forEach((li) => {
      li.classList.remove('active');
    });
    allImages.forEach((img) => {
      img.classList.remove('active');
    });
  }
}
/*End Slider */

/*Start Corporation */
let readMore = Array.from(document.querySelectorAll('.corporation .box .read-more'));
let paraCorporation = Array.from(document.querySelectorAll('.corporation .box > h1'));
console.log(paraCorporation)

readMore.forEach((read) => {
  read.onmouseenter = function () {
    let div = document.createElement('div');
    div.className = 'caption';
    let text = document.createTextNode(this.parentElement.childNodes[3].textContent);
    div.appendChild(text);
    read.appendChild(div);
  }
  read.onmouseleave = function () {
    read.removeChild(this.lastChild);
  }
});

/*End Corporation */

/*Start Details */
let theBoxs = Array.from(document.querySelectorAll('.details .boxs .box'));
let changeContent = Array.from(document.querySelectorAll('.console h2'));

  
changeContent.forEach((e) => {
  //Function Change Content.
  e.onclick = function () {
    theBoxs.forEach((box) => {
      if (e.textContent == box.childNodes[3].childNodes[1].textContent) {
        removeActive();
        box.classList.add('active');
        e.classList.add('active');
      }
    });
  }
});

function removeActive() {
  theBoxs.forEach((e) => {
    e.classList.remove('active');
  });
  changeContent.forEach((e) => {
    e.classList.remove('active');
  });
}

/*End Details */

/*Start News And Services */
let caption = Array.from(document.querySelectorAll('.news-services .all-boxs .box .caption'));
let capLength = caption.length;
console.log(capLength)
let theContent = Array.from(document.querySelectorAll('.news-services .all-boxs .box .content'));

let negativeI = Array.from(document.querySelectorAll('.news-services .all-boxs .box .caption .minus'));

let plus = Array.from(document.querySelectorAll('.news-services .all-boxs .box .caption .plus'));
console.log(negativeI)

caption.forEach((cap) => {
  caption[0].childNodes[5].style.display = 'block';
  caption[0].childNodes[3].style.display = 'none';



  cap.onclick = function () {
    reActive();
    this.nextElementSibling.classList.add('active');
   
    if (this.nextElementSibling.classList.contains('active')) {
      plus.forEach((p) => {
        cap.childNodes[3].style.display = 'none';
        p.style.display = 'block';
      });

      negativeI.forEach((n) => {
        cap.childNodes[5].style.display = 'block';
        n.style.display = 'none';
      })
    }
    
  }

});

function reActive() {
  theContent.forEach((e) => {
    e.classList.remove('active');
  });
}

/*End News And Services */

/*Start Recent Projects */
let projects = Array.from(document.querySelectorAll('.recent-projects .boxs .box'));
let leftArrow = document.querySelector('.recent-projects .arrows .left');
let rightArrow = document.querySelector('.recent-projects .arrows .right');
let sSlider = 1;

leftArrow.onclick = leftAr;
rightArrow.onclick = rightAr;
function leftAr() {
  if (leftArrow.classList.contains('disabled')) {
    return false;
  } else {
    sSlider--;
    funCheck();
  }
}
function rightAr() {
   if (rightArrow.classList.contains('disabled')) {
    return false;
  } else {
    sSlider++;
    funCheck();
  }
}
funCheck();
function funCheck() {
  clearActive();
  projects[sSlider - 1].classList.add('active');
  if (sSlider == 1) {
      leftArrow.classList.add('disabled');
    } else {
      leftArrow.classList.remove('disabled');
    }

    if (sSlider == projects.length) {
      rightArrow.classList.add('disabled');
    } else {
      rightArrow.classList.remove('disabled');
    }
}
function clearActive() {
  projects.forEach((project) => {
    project.classList.remove('active');
  });
}
console.log(rightArrow)
/*End Recent Projects */

/*Start Testimonials */
let testimonialsContainer = document.querySelector('.testimonials .container');
let testimonialsBox = Array.from(document.querySelectorAll('.testimonials .boxs .box'));
let goLeft = document.querySelector('.testimonials  .container > .left');
let goRight = document.querySelector('.testimonials  .container > .right');
let goStart = 1;
console.log(testimonialsContainer);

goLeft.onclick = clickLeft;
goRight.onclick = clickRight;

function clickLeft() {
  if (goLeft.classList.contains('disabled')) {
    return false;
  } else {
    goStart--;
    testCheck();
  }
}
function clickRight() {
  if (goRight.classList.contains('disabled')) {
    return false;
  } else {
    goStart++;
    testCheck();
  }
}

let dotes = document.createElement('div');
dotes.className = 'dotes';
for (let i = 0; i < testimonialsBox.length; i++){
  let span = document.createElement('span');
  dotes.appendChild(span);
}
testimonialsContainer.appendChild(dotes);
let spansDotes = Array.from(document.querySelectorAll('.testimonials .container .dotes span'));

for (let i = 0; i < spansDotes.length; i++){
  spansDotes[i].onclick = function () {
    removeTheActive();
    spansDotes[i].classList.add('active');
    testimonialsBox[i].classList.add('active');
  }
}

testCheck();
  //Checker Function
  function testCheck() {
    removeTheActive();
    testimonialsBox[goStart - 1].classList.add('active');
    spansDotes[goStart - 1].classList.add('active');

    if (goStart == 1) {
      goLeft.classList.add('disabled');
    } else {
      goLeft.classList.remove('disabled');
    }

    if (goStart == testimonialsBox.length) {
      goRight.classList.add('disabled');
    } else {
      goRight.classList.remove('disabled');
    }
  }

function removeTheActive() {
  testimonialsBox.forEach((test) => {
    test.classList.remove('active');
  });
  spansDotes.forEach((span) => {
    span.classList.remove('active');
  });
}
/*End Testimonials */