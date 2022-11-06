var cart=JSON.parse(localStorage.getItem("cartdata"))
console.log(cart)

function yoo(cart){
    cart.map(function(ele){
        let div=document.createElement("div")
    
        let image=document.createElement("img")
        image.src=ele.image1
    
        div.append(image)
    
        console.log(div)
        document.getElementById("cartdata").append(div)
    })
}


yoo(cart)
