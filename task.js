// const accordionBtns = document.querySelectorAll(".accordion");

// accordionBtns.forEach((accordion) => {
//   accordion.onclick = function () {
//     this.classList.toggle("is-open");

//     let content = this.nextElementSibling;
//     console.log(content);

//     if (content.style.maxHeight) {
//       //this is if the accordion is open
//       content.style.maxHeight = null;
//     } else {
//       //if the accordion is currently closed
//       content.style.maxHeight = content.scrollHeight + "px";
//       console.log(content.style.maxHeight);
//     }
//   };
// });





const image = [ "Luke Skywalker 2.jpeg", 
                "Images/C - 3PO.jpeg", 
                "Images/R2 - D2.jpeg",
                "Images/Darth Vader.webp",
                "Images/LIEA ORGANA.jpeg",
                "Images/Owen Lars.jpeg",
                "Images/Beru Lars 4.jpeg",
                "Images/R5 -D4 5.webp",
                "Images/BIGGS DARKLIGHTER 2.webp",
                "Kenobi 2.jpeg"
]

fetch('https://swapi.dev/api/people')
  .then((response) => response.json())
  .then((data) => {
      let results = data.results     
         console.log(results)
         let grandMother = document.querySelector('.grand-mother-container')
         let str = ""
         results.forEach((element, index) => {
          

          let motherContainer = `
          <section class="mother-container">

          <div class="container"> 
              <img class="image-container" src="images/${image[i]}">
               
               
          </div> 
          <div>
                  
              <button class="accordion">${element.name}</button>
              <div class="accordion-content" >
                <p> Height: ${element.height}  //   Gender: ${element.gender}</p>  
               
              
              </div>
              </div> 
          </section>
          `


         
          str += motherContainer;
         });
         grandMother.innerHTML = str;
       
         
  })



// function main() {
//   fetch('https://swapi.dev/api/people')
//   .then((response) => response.json())
//   .then((data) => {
//       let results = data.results     
//          console.log(results)        
//          let container =document.querySelector(".grand-mother-container")
//          console.log(container);
//       let htmlStr = ""       
//        for (let i = 0; i < results.length; i++) {
//           let object = results[i]
//           let url = "https://whatnerd.com/wp-content/uploads/2021/10/coolest-star-wars-characters-ahsoka-tano-featured-500x250.jpg"           
//            let htmlEl = `<img src=${url} alt="avatar" height="150" width="150">              
//              <button class="accordion">${i + 1} ${object.name}'s Details</button> 
//             <div class="panel">                    
//             <p>Name: ${object.name}</p>                  
//             <p>Gender: ${object.gender}</p>            
//             <p>Height: ${object.height} ft</p>              
//               </div>`          
              
//               htmlStr += htmlEl;
//       }
//       container.innerHTML = htmlStr;
//       let acc = document.getElementsByClassName("accordion");
//       console.log(acc)

// for(let i = 0; i < acc.length; i++) {
// acc[i].addEventListener("click", function() {
//   /* Toggle between adding and removing the "active" class,   
//    to highlight the button that controls the panel */    
  
//   this.classList.toggle("active");
//   /* Toggle between hiding and showing the active panel */    
//   let panel = this.nextElementSibling;
//   if (panel.style.display === "block") {
//     panel.style.display = "none";
//   } else {
//     panel.style.display = "block";
//   }
// });
// }
//   });
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






/* <section class="mother-container">

<div class="container"> 
    <img class="image-container">
    <!-- <img src="/Images/R (2).jpeg" width="300" height="400"> </img> -->

</div> 
<div>
        
<button class="accordion">Website Design and Development</button>
<div class="accordion-content">
  <p> Yoda</p>  
  <p> Yoda</p>
  <p> Yoda</p>

</div>
</div> 
</section> */


