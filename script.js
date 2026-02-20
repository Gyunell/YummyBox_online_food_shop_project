document.addEventListener('DOMContentLoaded', function() {
    console.log("Скрипт загружен и видит страницу!");

    // === 1. МОБИЛЬНОЕ МЕНЮ ===
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('open');
            menuIcon.classList.toggle('open'); 
        });
    }

    // === 2. ФОРМА КОНТАКТОВ (с проверкой на наличие) ===
    var form = document.getElementById("my-form");
    
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            var data = new FormData(event.target);
            
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    form.innerHTML = "<h3>Thanks! Your message has been sent.</h3>";
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your form");
            });
        });
    }

    // === 3. ЛОГИКА КОРЗИНЫ ===
    let cart = JSON.parse(localStorage.getItem('yummy_cart')) || [];

    // Добавление товара
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('buy-button')) {
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            
            if (name && price) {
                cart.push({ name, price });
                updateCart();
                
                const sidebar = document.getElementById('cart-sidebar');
                if (sidebar) sidebar.classList.add('open');
            }
        }
    });

    function updateCart() {
        localStorage.setItem('yummy_cart', JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        const itemsContainer = document.getElementById('cart-items');
        const totalElement = document.getElementById('cart-total');
        
        if (!itemsContainer || !totalElement) return;

        itemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            itemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="remove-item" onclick="removeItem(${index})">🗑</button>
                </div>
            `;
        });
        totalElement.innerText = total.toFixed(2);
    }

    // Удаление товара (делаем функцию глобальной для onclick)
    window.removeItem = function(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Открытие/Закрытие
    const cartIcon = document.querySelector('#cart-icon'); 
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.querySelector('.close-cart');

    if (cartIcon && cartSidebar) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('open');
        });
    }

    if (closeCart && cartSidebar) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
        });
    }

    // Заказ в WhatsApp
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) return alert("Cart is empty!");
            
            let msg = "Hello! I want to order from YummyBox:%0A";
            cart.forEach((item, i) => msg += `${i+1}. ${item.name} ($${item.price})%0A`);
            window.open(`https://wa.me/994507969238?text=${msg}`, '_blank');
        });
    }

    // Запуск при загрузке
    renderCart();
});