
document.addEventListener('DOMContentLoaded', async()=>{
    const container = document.getElementById('menu-container');

    try{
        const response = await fetch('http://localhost:5500/menu1');
        const dishes = await response.json();
        console.log(dishes);

        dishes.forEach(item =>{
            const card = document.createElement('div');
            card.className = 'container card_container col-2 shadow-lg m-5 rounded py-3';

            card.innerHTML = `
            <img src='${item.url}' alt="" width="100%" height="140px">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="cart-text">${item.price}</p>
                        <a href="" class="btn btn-outline-success">Add To Cart</a>
                    </div>
            
            `;


            container.appendChild(card );
        });
    }

    catch (error){
        console.error('fail',error);
    }
});