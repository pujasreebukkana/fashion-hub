
    const products = [
      {
        id: 1,
        name: "Casual T-Shirt",
        price: 499,
        image: "https://www.teez.in/cdn/shop/products/Link-Data-Women-T-Shirt-4.jpg?v=1583558774"
      },
      {
        id: 2,
        name: "Blue Jeans",
        price: 999,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 3,
        name: "Running Shoes",
        price: 1499,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyo3_K3mtDiQaoYhJcMzaIZzwlas0XrWN1vqk0IyWvEvro8RCU-KPR2uGyOjQ0LvefTw963_JjQumQhTDjE1SIXnx5ACVi0LQhuZfkltN5OaU6kYF3L5hG1A"
      },
      {
        id: 4,
        name: "hand bag",
        price: 799,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaRER-zHFxcS6bxoQoGKFiglX6aAjTzruCwZ_UzpBwAQ0j_QZem6wxl8vfEBQRMK6bBBmPFfF94uTEgm5U-Fq1B5Mz6V83IPdwYTqKsIawZwUZwQR4rJGTkg"
        } , 
      {    
        id: 5,
        name: "Analog Watch",
        price: 1999,
        image: "https://sylvi.in/cdn/shop/collections/analog_watch_For_Men.jpg?v=1715685842"
        },
      {
        id: 6,
        name: "Wireless Headphones",
        price: 1199,
        image: "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017346208_437Wx649H_202304251122161.jpeg"
      },
    ];

    let cart = [];

    const productGrid = document.getElementById('product-grid');
    const cartCount = document.getElementById('cart-count');
    const cartBtn = document.getElementById('cart-btn');
    const cartPopup = document.getElementById('cart-popup');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function displayProducts() {
      products.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}" width="150">
          <h3>${prod.name}</h3>
          <p>₹${prod.price}</p>
          <button onclick="addToCart(${prod.id})">Add to Cart</button>
        `;
        productGrid.appendChild(div);
      });
    }

    function addToCart(id) {
      const product = products.find(p => p.id === id);
      cart.push(product);
      updateCartCount();
    }

    function updateCartCount() {
      cartCount.textContent = cart.length;
    }

    cartBtn.addEventListener('click', () => {
      cartItems.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${item.name} - ₹${item.price}
          <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
      });

      cartTotal.textContent = total;
      cartPopup.style.display = 'block';
    });

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartCount();
      cartBtn.click(); 
    }

    function closeCart() {
      cartPopup.style.display = 'none';
    }

    displayProducts();

