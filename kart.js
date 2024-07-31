
let products_data=document.querySelector(".product_data");


// fatch api fakestore

 async function api_data(){
    let data= await fetch("https://fakestoreapi.com/products");
    let json_data=await data.json();
    //console.log(json_data);
    json_data.map((val)=>{

        let imgelement=document.createElement('img');
        let titleelement=document.createElement("p");
        let priceelement=document.createElement("p");
        let pricetext=document.createTextNode(val.price);
        priceelement.appendChild(pricetext);
        let titletext=document.createTextNode(val.title);
        titleelement.appendChild(titletext);
        imgelement.setAttribute("src", val.image);
        imgelement.setAttribute("class","products_image");

        products_data.appendChild(imgelement);
        products_data.appendChild(titleelement);
        products_data.appendChild(priceelement);


    })
}


api_data();

