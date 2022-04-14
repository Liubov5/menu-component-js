let btnToCart = document.querySelectorAll(".btn-to-cart");
let itemsInCart = document.querySelector(".items-in-cart-wrap");
let totalSummElem = document.querySelector(".total_summ_elem");
let itemInCart = document.querySelector(".item-in-cart");


let items = [{id:1, name: "French Fries with Ketchup", price: 2.23, image:"images/plate__french-fries.png"}, {id:2, name: "Salmon and Vegetables", price: 5.12, image:"images/plate__salmon-vegetables.png"}, {id:3, name: "Spaghetti with Sauce", price: 7.82, image:"images/plate__spaghetti-meat-sauce.png"}, {id:4, name: "Plate ravioli", price: 3.12, image:"images/plate__ravioli.png"}];

let cart = [];

let summ_in_cart = 0;


btnToCart.forEach((btn, index)=>{
    btn.onclick = function(){

        btn.classList.add("bg-dark");
        btn.innerHTML = "<i class='bi bi-cart-check'></i>  Added To Cart";
        btn.disabled = "disabled"
        
        let item = itemInCart.cloneNode(true)
        itemsInCart.appendChild(item);
        item.classList.remove("d-none");

        item.classList.add("animate__animated", "animate__fadeInBottomLeft", "item"+items[index].id, );
        
        let name_elem = item.querySelector(".name");
        name_elem.innerHTML = items[index].name;

        let img_elem = item.querySelector(".image");
        img_elem.src = items[index].image;

        let price_elem = item.querySelector(".price");
        summ_item = items[index].price;
        price_elem.id="item_price"+items[index].id;
        price_elem.innerHTML =summ_item + " $";

        let count_elem = item.querySelector(".count");
        count_elem.id = "item_count"+items[index].id;


        let btn_increase = item.querySelectorAll(".btn2");
        btn_increase[0].id = items[index].id;
        btn_increase[1].id = items[index].id;
            
        summ_in_cart += items[index].price;
        totalSummElem.innerHTML = summ_in_cart;

        

        cart.push({
            id: items[index].id,
            price: summ_item,
            count:1,
            summ: summ_item
        });
 
    }
})

function countable(arg, arg2){
    let id = arg.getAttribute("id");
    console.log(arg, arg2);
    let a = document.getElementById("item_price"+id);
    let b = document.getElementById("item_count"+id);

    cart.forEach((item, index)=>{
        if(item.id == id){
            if(arg2 == 'plus'){
                item.count = item.count + 1;
                let new_summ = item.summ + item.price;
                item.summ = parseFloat(new_summ.toFixed(2));
                summ_in_cart +=item.price;
                summ_in_cart = parseFloat(summ_in_cart.toFixed(2))
                totalSummElem.innerHTML = summ_in_cart;



            }else if(arg2 == 'minus'){
                item.count = item.count - 1;
                let new_summ = item.summ - item.price;
                item.summ = parseFloat(new_summ.toFixed(2));
                summ_in_cart-=item.price;
                summ_in_cart = parseFloat(summ_in_cart.toFixed(2))
                totalSummElem.innerHTML = summ_in_cart;
            }
            a.innerHTML = item.summ+ "$";
            b.innerHTML = item.count;
            
        }
    })

   
}

function total_summ(){

}

/*
1. По нажатию на кнопку в корзине появляется товар: можно увеличить/уменьшить кол-во, высчитывается сумма для товара * кол-во и сумма всей корзины. 
2. Кнопка меняется на товар в корзине
3. можно применить промокод на скидку. 
4. Потом можно сделать с анимацией. 


кнопок столько сколько позиций в меню? Да, каждая позиция - это +1 кнопка.

    itemsInCart.attachShadow({mode:"open"})
    itemsInCart.shadowRoot.appendChild(t.content.cloneNode(true))


    
*/