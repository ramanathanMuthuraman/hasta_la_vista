 var maxX = window.innerWidth,
     maxY = $(window).height();
 var contentWidth = 0;
 var contentHeight = 0;
 var interval;
 $(document).ready(function () {

     contentHeight = $(".content").height();
     contentWidth = $(".content").width();

     $(".content").css({
         top: ((maxY * 0.5) - (contentHeight * 0.5)) + "px",
         left: ((maxX * 0.5) - (contentWidth * 0.5)) + "px",

     })

     animate();

 })


 function animate() {

     var length = 80;

     for (var i = 0; i < 80; i++) {
         switch (i % 4) {
         case 0:
             val = "Vicky"
             break;
         case 1:
             val = "Yash"
             break;
         case 2:
             val = "Yuvi"
             break;
         case 3:
             val = "Nithya"
             break;
         }
         var el = $("<div class='text'></div>").html("We miss you " + val).appendTo("body")

         var scaleTween, subTl;
         subTl = new TimelineLite({
             delay: i * 0.4
         });
         subTl.fromTo($(el), 1, {
             css: {
                 alpha: .6,

                 x: Math.random() * maxX,
                 y: Math.random() * maxY
             },
             ease: Power3.easeInOut
         }, {
             css: {
                 alpha: 0,

                 x: (maxX * 0.5) - (contentWidth * 0.25),
                 y: (maxY * 0.5) - (contentHeight * 0.25)
             },
             ease: Power3.easeInOut,
             onComplete: function () {
                 $(el).css("opacity", 0);
                 contentHeight = $(".content").height();
                 contentWidth = $(".content").width();

                 $(".content").css({
                     top: ((maxY * 0.5) - (contentHeight * 0.5)) + "px",
                     left: ((maxX * 0.5) - (contentWidth * 0.5)) + "px"
                 })
             }
         });


         scaleTween = TweenMax.from($(".content"), 0.8, {
             css: {
                 fontSize: "+=1px"
             },
             ease: Power3.easeInOut
         });
         subTl.insert(scaleTween, 0);

     }
 }