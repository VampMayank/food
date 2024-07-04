
document.addEventListener('DOMContentLoaded', async()=>{
    const container = document.getElementById('cart-container');

    try{
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(cart);

        cart.forEach(item =>{
            const card = document.createElement('div');
            card.className = 'd-flex justify-content-between border shadow-lg mb-3 p-3 align-items-center ';

            card.innerHTML = `
            <h5>${item.name}</h5>
            <div class="text-center">
            <p class="fw-bold">${item.price}</p>
            <div class="d-flex">
            <button class="btn bg-light btn-outline-dark">-</button>
            <p class="d-flex justify-content-center align-items-center my-1 mx- bg-light px-3 border border-black rounded">${item.quantity}</p>
            <button class="btn bg-light btn-outline-dark">+</button>
            </div>
            </div>
            <p>$${(item.quantity*item.price).toFixed(2)}</p>

            `;


            container.appendChild(card );
        });
    }

    catch (error){
        console.error('fail',error);
    }
});

function priceofeach(price, quant){
    return price*quant
}