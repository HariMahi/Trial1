"use strict"

function products(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','Objectsfile.json',true); 

    xhr.onload = function(){
        let prodClass=document.getElementsByClassName('products')[0];
        let prodImage=document.getElementsByClassName('product-image')[0];
        let prodContent=document.getElementsByClassName('product-content')[0];
        if(this.status==200){
            var productsList = JSON.parse(this.responseText);
        //    var pro=productsList.slice(0,1);
        
          
            for(let product of productsList){

                let productDiv=document.createElement('div');
                let productDivInner=document.createElement('div');
                let proImageDiv=document.createElement('div');
                let proContentDiv=document.createElement('div');

                let prodClass=document.createAttribute('class');
                let prodDivInnerClass=document.createAttribute('class');
                let prodImage=document.createAttribute('class');
                let prodContent=document.createAttribute('class');

                prodClass.value="products";
                prodImage.value="product-image";
                prodContent.value="product-content";
                prodDivInnerClass.value="products-inner"


                productDiv.setAttributeNode(prodClass);
                proImageDiv.setAttributeNode(prodImage);
                proContentDiv.setAttributeNode(prodContent);
                productDivInner.setAttributeNode(prodDivInnerClass);

                let mainn=document.getElementsByClassName("main-content")[0];
                mainn.appendChild(productDiv);
                productDiv.appendChild(productDivInner)
                productDivInner.appendChild(proImageDiv);
                productDivInner.appendChild(proContentDiv);

                
                proImageDiv.innerHTML=`<img id="image" src="pictures/${product.filename}" width="200" height="200">`
                proContentDiv.innerHTML=`<div id="title">${product.title}</div>
                <div id="desc"><p>${product.description}</p></div>
                <div class="rate-price">
                <div id="rating">Rating :<strong> ${product.rating}</strong></div>
                <div id="price">Price : Rs <strong>${product.price}</strong></div>
                </div>
               
                <div class="btn">
                <img id="heart" src="pictures/iconmonstr-heart-thin.svg"/>
                <button class="btn-add"> Add To Card </button>
                <div id="add">+</div>
                <div id="remove">-</div>
                </div>`; 

                

            } 
        

            let buttn=document.getElementsByTagName('button');
            
        }
    }
    xhr.send();
} 

products();
