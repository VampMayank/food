
document.addEventListener('DOMContentLoaded', async()=>{
    const container = document.getElementById('menu-container');

    try{
        const response = await fetch('http://localhost:5500/menu1');
        const dishes = await response.json();
        console.log(dishes);

        dishes.forEach(item =>{
            const card = document.createElement('div');
            card.className = 'container bg-light d-flex align-items-center py-2';

            card.innerHTML = `
            <p>${item.name}</p>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <p>${item.url}</p>
            `;


            container.appendChild(card );
        });
    }

    catch (error){
        console.error('fail',error);
    }
});