var cart=JSON.parse(localStorage.getItem("cartdata"))
console.log(cart)

function yoo(cart){
    cart.map(function(ele){
        let div=document.createElement("div")
    
        let image=document.createElement("img")
        image.src=ele.image1

        let pr=document.createElement("p")
        pr.innerText=ele.price
    
        div.append(image,pr)
    
        console.log(div)
        document.getElementById("cartdata").append(div)
    })
}



yoo(cart)


