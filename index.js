const centerdiv = document.getElementById("centerdiv");

async function getpicture(){
         const jsondata = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=20");
                const jsdata = await jsondata.json();
                
                jsdata.map( (val) =>{
                    key = val.id;
                    let img = document.createElement("img");
                    // img.src = val.url;
                    img.src = `https://picsum.photos/200/300?random=${val.id}`;
                    centerdiv.appendChild(img);
                    console.log(val.url);
                })
        
                }
  getpicture();
       