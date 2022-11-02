items = [{name: "sintlucas", price: 1324030, stock: 4, incard: 0}, 
{name: "frits_philips_lyceum", price: 320210, stock: 7, incard: 0}, 
{name: "sint_antonius_abt", price: 24703, stock: 0, incard: 0}, 
{name: "Heerlen_Bernardinus_college", price:320440, stock:4, incard: 0}, 
{name: "grootsius_college", price: 4305, stock:20, incard: 0},
{name: "augustinianum_college", price: 2483020, stock:1, incard: 0},
{name: "herle_college", price: 232, stock:69, incard: 0},
{name: "grookey", price: 2, stock: 232, incard: 0}];
card = []
oldCard = []
cardOn = false

function getPrice(int){
    StringPrice = ""
    int = int.toString().split('').reverse().join('').replaceAll(".", ",")
    if (int.includes(",")){
        start = false
    }
    else{
        start = true
    }
    for (let count = 0; count < int.length; count++) {
        
        if (start){
            StringPrice = StringPrice + int[count]
            if ((count+1) % 3 === 0 && !(count+1 === int.length)){
                StringPrice = StringPrice + "."
            }
        }
        else{
            if (int[count] === ","){
                StringPrice = StringPrice + int[count]
                start = true
            }
            else{
                StringPrice = StringPrice + int[count]
            }
        }
    }
    return StringPrice.split('').reverse().join('')
}

function updateReciept(){
    try{
        document.getElementById("receiptHolder").remove()
    }
    catch{
        //pass
    }
    src = document.getElementById("cardHolder")
    div = document.createElement("div");
    receipt = document.createElement("div");
    subTotal = document.createElement("div");
    subTotalPrice = document.createElement("p")
    subTotalName = document.createElement("p")
    tax = document.createElement("div")
    taxName = document.createElement("p")
    taxAmmount = document.createElement("p")
    total = document.createElement("div")
    totalName = document.createElement("P")
    totalPriceP = document.createElement("P")
    totalRemoveButton = document.createElement("button")
    totalContainerPrice = document.createElement("div")
    totalPrice = 0
    
    card.forEach((element, index) => {
        containter = document.createElement("div")
        containerPrice = document.createElement("div")
        nameC = document.createElement("p")
        price = document.createElement("p")
        removeButton = document.createElement("button")

        nameC.className = "noMargin"
        nameC.innerText = `${element.name.replaceAll("_", " ")} (x${element.incard})`
        price.className = "noMargin"
        price.innerText = `€ ${getPrice(element.price * element.incard)},-`
        removeButton.className = "remove"
        removeButton.innerText = "-"
        removeButton.style = "margin-left: 5px;"
        removeButton.onclick = function() {
            element.incard -= 1
            element.stock += 1
            if (element.incard <= 0){
                card.splice(index, 1)
            }
            if (cardOn){
                updateReciept()
            }
        }

        totalPrice += element.price * element.incard

        containter.className = "cardItem"
        containerPrice.className = "CardItemPrice"
        
        containerPrice.appendChild(price)
        containerPrice.appendChild(removeButton)
        containter.appendChild(nameC)
        containter.appendChild(containerPrice)
        receipt.appendChild(containter)
        div.style = "width: 30em;"
    });

    

    subTotalName.className = "noMargin"
    subTotalName.innerText = "subTotal"
    subTotalPrice.className = "noMargin"
    subTotalPrice.style = "margin-right: 26px;"
    subTotalPrice.innerText = `€ ${getPrice(totalPrice)},-`
    subTotal.className = "cardItem"
    subTotal.style = "margin-top: 15px;"
    
    subTotal.appendChild(subTotalName)
    subTotal.appendChild(subTotalPrice)
    receipt.appendChild(subTotal)

    taxName.className = "noMargin"
    taxName.innerText = "tax"
    taxAmmount.className = "noMargin"
    taxAmmount.style = "margin-right: 26px;"
    taxAmmount.innerText = "12%"
    tax.className = "cardItem"
    tax.appendChild(taxName)
    tax.appendChild(taxAmmount)
    receipt.appendChild(tax)

    totalRemoveButton.className = "remove"
    totalRemoveButton.innerText = "-"
    totalRemoveButton.style = "margin-left: 5px;"
    totalRemoveButton.onclick = function() {
        card.forEach((element) => {
            element.stock += element.incard
        });
        card = []
    }
    totalContainerPrice.className = "CardItemPrice"
    
    total.className = "cardItem"
    total.style = "margin-top: 10px;"
    totalName.className = "noMargin"
    totalName.innerText = "total"
    totalPriceP.className = "noMargin"
    totalPriceP.innerText = `€ ${getPrice(((totalPrice/100) * 112).toFixed(2))}`
    totalContainerPrice.appendChild(totalPriceP)

    totalContainerPrice.appendChild(totalRemoveButton)
    total.appendChild(totalName)
    total.appendChild(totalContainerPrice)
    receipt.appendChild(total)

    receipt.id = "receipt"
    div.id = "receiptHolder"
    div.appendChild(receipt)
    src.appendChild(div)
    
}

items.forEach(element => {
    var src = document.getElementById("items");
    var div = document.createElement("div");
    var img = document.createElement("img");
    var name = document.createElement("h2")
    var price = document.createElement("p");
    var stock = document.createElement("p");
    var order = document.createElement("button");
    div.id = element.name.replaceAll("_", " ");
    div.className = "item"

    img.src = `img\\${element.name}.jpg`;
    img.alt = `${element.name}.jpg`
    img.className = "img"
    img.id = `img ${element.name.replaceAll("_", " ")}`;

    name.innerText = element.name.replaceAll("_", " ")

    price.innerText = `price: €${getPrice(element.price)},-`
    price.id = `price ${element.name.replaceAll("_", " ")}`
    
    stock.id = `stock ${element.name.replaceAll("_", " ")}`
    stock.innerText = `stock: ${element.stock}`
    if (element.stock <= 0){
        stock.style = "color: red"
    }

    order.innerText = "order"
    order.className = "order"
    order.onclick = function() {
        if (element.stock > 0){
            if (!card.includes(element)){
                card.push(element)
            }
            element.incard += 1
            element.stock -= 1
            if(cardOn){
                updateReciept()
            }
        }
    }

    div.appendChild(img);
    div.appendChild(name)
    div.appendChild(stock)
    div.appendChild(price)
    div.appendChild(order)
    src.appendChild(div);
    console.log()

});

document.getElementById("cardClick").onclick = function() {
    cardOn = !cardOn
    if (cardOn){
        updateReciept()
    }
}

setInterval(function () {
    cardItemCount = 0
    card.forEach(element => {
        cardItemCount += element.incard
    });
    document.getElementById("cardNumber").innerText = cardItemCount
    if (card.length === 0){
        cardOn = false
    }
    items.forEach(element => {
        var stock = document.getElementById(`stock ${element.name.replaceAll("_", " ")}`)
        stock.id = `stock ${element.name.replaceAll("_", " ")}`
        stock.innerText = `stock: ${element.stock}`
        if (element.stock <= 0){
            stock.style = "color: red"
        }
        else{
            stock.style = "color: black"
        }
        
    })
    if (!cardOn){
        try{
            document.getElementById("receiptHolder").remove()
        }
        catch{
            //pass
        }
    }
    oldCard = [].concat(card)
})

