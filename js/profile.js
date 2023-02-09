const scroll=()=>{
    let scrollTop = window.pageYOffset;
    let offset1 = scrollTop - document.querySelector('#page1').offsetTop;
    if(scrollTop>=document.querySelector('#page1').offsetTop){
        document.querySelector('.main_info').style.left=`-${offset1}px`;
    }
    // let offset2 = scrollTop - document.querySelector('#page2').offsetTop;
    // console.log(scrollTop, offset2);
    // if(scrollTop>=document.querySelector('#page2').offsetTop){
    //     document.querySelector('.main_info').style.left=`-${offset2}px`;
    // }
}
window.addEventListener('scroll',()=>(
    scroll()
))