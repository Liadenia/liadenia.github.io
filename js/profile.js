const scroll=()=>{
    let scrollTop = window.pageYOffset;
    let offset1 = scrollTop - document.querySelector('#page1').offsetTop;
    if(scrollTop>=document.querySelector('#page1').offsetTop){
        document.querySelector('.main_info').style.left=`-${offset1}px`;
    }

    let offset2 = scrollTop - document.querySelector('#page5').offsetTop;
    console.log(scrollTop, offset2);
    if(scrollTop>=document.querySelector('#page5').offsetTop){
        document.querySelector('#page5').style.left=`+${offset2}px`;
    }

    


    // document.querySelector('#page5').style.left = `-${100}px`;
    // let offset = scrollTop - document.querySelector('#page5').offsetTop;
    // document.querySelector('#page5').style.left = `-${offset}px`;

}
window.addEventListener('scroll',()=>(
    scroll()
))




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