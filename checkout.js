let check=JSON.parse(localStorage.getItem("cartdata"))
console.log(check);

check.map(function(ele){

    // document.getElementById("chec-in")

    var div=document.createElement("div")

    
    let image=document.createElement("img")
    image.src=ele.image1

    let pr=document.createElement("p")
    pr.innerText=ele.price

    div.append(image,pr)

    
    document.getElementById("chec-in").append(div)
})