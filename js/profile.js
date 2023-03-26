// -----------------------------첫번째 페이지 가로 스크롤-----------------------
const scroll=()=>{
    let scrollTop = window.pageYOffset;
    let offset1 = scrollTop - document.querySelector('#page1').offsetTop;
    if(scrollTop>=document.querySelector('#page1').offsetTop){
        document.querySelector('.main_info').style.left=`-${offset1}px`;
    }


// ----------------------------마지막 페이지 가로 스크롤------------------------

    let offset2 = scrollTop - document.querySelector('#page5').offsetTop;
    console.log(scrollTop, offset2);
    if(scrollTop>=document.querySelector('#page5').offsetTop){
        document.querySelector('#last_wrapper').style.left=`+${offset2}px`;
    }


}
window.addEventListener('scroll',()=>(
    scroll()
))


// intro 버튼 클릭시 이동 ----------------------------------

const intro = document.querySelector("#intro");
let introClicked = false;

intro.addEventListener("click", function(event) {
event.preventDefault();
introClicked = true;
window.scrollTo({
top: document.querySelector("#page1").offsetTop + 100 * window.innerWidth / 100,
left: 0,
behavior: 'smooth'
});
});


// ---------------------포트폴리오 버튼 클릭시 이동 및 사이즈 조절--------------

const portfolio = document.querySelector("#portfolio");
let portfolioClicked = false;

portfolio.addEventListener("click", function(event) {
event.preventDefault();
portfolioClicked = true;
window.scrollTo({
top: document.querySelector("#page1").offsetTop + 300 * window.innerWidth / 100,
left: 0,
behavior: 'smooth'
});
});


//-------------------------------contact GNB 클릭시 토글 페이지 보이기----------
$(function(){
    $('.contact').on('click', function(){
        $('.con-txt, .con-bg').toggleClass('on');
        $('.con-bg').fadeToggle(400)
    });

    $('.con-txt').on('click', function(){
        $('.con-txt, .con-bg').removeClass('on');
        $('.con-bg').fadeOut(400)
    });
});


// ------------------------page1 -2 intro page expending card----------------

const introCard = 'active';
const cardImg = document.querySelectorAll('.expending_card');

cardImg[0].classList.add(introCard);

function removeintroCard() {
    const elm = document.querySelector(`.${introCard}`)
    if (elm) {
        elm.classList.remove(introCard);
    }
}

function addClass($event) {
    $event.stopPropagation();
    removeintroCard();
    const target = $event.currentTarget;
    target.classList.add(introCard);
}

cardImg.forEach(image => {
    image.addEventListener('click', addClass);
})



// -------------- 포트폴리오 팝업 띄우기 ----------

$(function(){
    $('.po5, .popup0').on('click', function(){
        $('.popup0').toggleClass('on');
        $('.popup0').fadeToggle(400)
    });
    $('.po6, .popup1').on('click', function(){
        $('.popup1').toggleClass('on');
        $('.popup1').fadeToggle(400)
    });
    $('.po7, .popup2').on('click', function(){
        $('.popup2').toggleClass('on');
        $('.popup2').fadeToggle(400)
    });
    $('.po8, .popup3').on('click', function(){
        $('.popup3').toggleClass('on');
        $('.popup3').fadeToggle(400)
    });


// -------------- 카드요소 색상 띄우기 ----------
let Hidden1Shown = false;

$('.hidden1').hide();

$('.move2, .move3, .card2, .card3').on('click', function(){
    if (!Hidden1Shown) {
        $('.hidden1').fadeIn(400);
        Hidden1Shown = true;
    }
});

$('.hidden1, .card1').on('click', function(){
    $('.hidden1').fadeOut(400);
    Hidden1Shown = false;
});


let Hidden2Shown = false;

$('.move1, .move3, .card1, .card3').on('click', function(){
    if (!Hidden2Shown) {
    $('.hidden2').fadeIn(400);
    Hidden2Shown = true;
    }
});

$('.hidden2, .card2').on('click', function(){
    $('.hidden2').fadeOut(400);
    Hidden2Shown = false;
});

let Hidden3Shown = false;

$('.move1, .move2, .card1, .card2').on('click', function(){
    if (!Hidden3Shown) {
    $('.hidden3').fadeIn(400);
    Hidden3Shown = true;
    }
});

$('.hidden3, .card3').on('click', function(){
    $('.hidden3').fadeOut(400);
    Hidden3Shown = false;
});





});