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
        document.querySelector('#page5').style.left=`+${offset2}px`;
    }

    // document.querySelector('#portfolio').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     let portfolioS = document.querySelector('#portfolio-s').offsetTop;
    //     window.scrollTo({
    //         top: portfolioS,
    //         behavior: 'smooth'
    //     });
    //     console.log('#portfolio');
    // });


    const portfolio = document.querySelector("#portfolio");
    portfolio.addEventListener("click", function(event) {
        event.preventDefault();
        const portfolioS = document.querySelector("#portfolio-s");
        portfolioS.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });



    
}
window.addEventListener('scroll',()=>(
    scroll()
))

// document.querySelector('#portfolio').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('#portfolio-s').scrollIntoView({ 
//     behavior: 'smooth' 
//     });
//     console.log('#portfolio')
// });



//-------------------------------contact GNB 클릭시 토글 페이지 보이기----------
$(function(){
    $('.contact').on('click', function(){
        $('.con-txt, .con-bg').toggleClass('on');
        $('.con-bg').fadeToggle(400)
    });

    $('.con-bg').on('click', function(){
        $('.con-txt, .con-bg').removeClass('on');
        $('.con-bg').fadeOut(400)
    });
});

