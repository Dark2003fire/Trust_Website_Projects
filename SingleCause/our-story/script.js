let slider = tns({

     container:".my-slider",
     "slideBy":1,
     "speed":400,
     "nav":false,
     autoplay:true,
     controls:false,
     autoplaybuttonOutput:false,
     responsive:{
          1600:{
               items:4,
               gutter:20
          },
          1024:{
               items:3,
               gutter:20
          },
          768:{
               items:2,
               gutter:20
          },
          480:{
               items:1,
               
          },

          /*
          1024:{
               items:7,
               gutter:20
          },
          768:{
               items:6,
               gutter:20
          },
          768:{
               items:5,
               gutter:20
          },
          480:{
               items:4,
               gutter:20

          },
          360:{
               items:3,
               gutter:20
          },
          360:{
               items:2,
               gutter:20

          },
          240:{
               items:1,
               gutter:20

          },
          */ 
         


     }
})