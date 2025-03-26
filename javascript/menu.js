
document.addEventListener('DOMContentLoaded', async()=>{
    const container = document.getElementById('menu-container');

    try{
        const response = await fetch('http://localhost:5500/menu1');
        const dishes = await response.json();
        console.log(dishes);

        dishes.forEach(item =>{
            const card = document.createElement('div');
            card.className = ' card_container col-2 shadow-lg m-5 rounded py-3';

            card.innerHTML = `
            <img src='${item.url}' alt="" height="140px">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="cart-text">${item.price}</p>
                        <button class="add-to-cart">Add to cart </button>
                    </div>
            
            `;


            container.appendChild(card );

            const addButton = card.querySelector('.add-to-cart');
            addButton.addEventListener('click', () => {
                // const cartItem = {
                //     name: item.name,
                //     price: item.price
                // };
                
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                
                let found = false;
                for (let i=0;i<cart.length;i++){
                    if(cart[i].name === item.name){
                        cart[i].quantity++;
                        found = true;
                        break;
                    }
                }
            
                if(!found){
                    cart.push({name: item.name, price: item.price, quantity:1});
                }
                // cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`Added ${item.name} to cart`);
            });

        });
    }

    catch (error){
        console.error('fail',error);
    }
});