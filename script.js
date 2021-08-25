$(() => {
    let nav = $(".nav");
    let hambuger = $(".fa-bars");
    let itemsA = $(".items a");
    let p = $(".items p");
    let barsCont = $(".bars");
    barsCont.click(() => {
        nav.toggleClass("navExtend")
        if(itemsA.width() ==18) {
            itemsA.css({"width":"90%"})
            setTimeout(() => {
                p.css({"opacity":1,"transform":"translateX(0)"});
                $("input").css({"display":"flex"})
                hambuger.attr("class","fas fa-times")
           
            }, 300);
            hambuger.css({
                "transform":"translateX(100%)","transition":"500ms ease-in-out",
            })
        }else {
            itemsA.css({"width":"60%"})
            p.css({"opacity":0,"transform":"translateX(-50%)"})
            $("input").css({"display":"none"})
            hambuger.attr("class","fas fa-bars")
            hambuger.css({"transform":"translateX(0%)"})
            


        }
        
            
     
     
    })
})