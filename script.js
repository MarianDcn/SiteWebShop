let currentPage = "main";
let isMagazinOnline = true; // Variabilă pentru a urmări dacă suntem pe categoria "Magazin Online"
let currentProduct = null; // Variabilă pentru a stoca produsul curent
let limita = 12;


// Selectează elementul body pentru a adăuga/îndepărta clasa dark-mode
const body = document.body;

// Funcția care comută între dark mode și light mode
function toggleDarkMode() {
    // Verifică dacă modul dark este activ
    if (body.classList.contains("dark-mode")) {
        // Dacă este activ modul dark, comută la light mode
        body.classList.remove("dark-mode");
        document.getElementById("dark-mode-icon").src = "day-and-night.png";  // Schimbă iconița la light mode
    } else {
        // Dacă este activ modul light, comută la dark mode
        body.classList.add("dark-mode");
        document.getElementById("dark-mode-icon").src = "day-and-night.png";  // Schimbă iconița la dark mode (poți folosi o iconiță diferită pentru fiecare mod)
    }
}







window.onload = function() {
    filterProducts("All"); // Afișează toate produsele atunci când se încarcă pagina

    // Adăugăm eveniment pentru căutare pe tasta Enter
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchProducts(); // Executăm căutarea
        }
    });

    // Verificăm istoricul pentru a întoarce utilizatorul la starea corectă
    if (window.history.state && window.history.state.page === "product") {
        openProductPage(window.history.state.product);
    }
};

window.onpopstate = function(event) {
    // Întotdeauna navighează înapoi la pagina principală, indiferent de locația curentă
    returnToMainPage();
};

function searchProducts() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const errorMessageContainer = document.getElementById("error-message");
    const productList = document.getElementById("product-list");

    // Ascunde reclama când se face căutare
    document.getElementById("ad-space").style.display = "none";
    document.getElementById("ad-space-left").style.display = "none";


    // Verificăm dacă termenul de căutare este suficient de lung
    if (query.length < 3) {
        alert("Căutarea trebuie să conțină cel puțin 3 caractere.");
        return;
    }

    // Căutăm produsele care corespund termenului de căutare
    const filteredProducts = products.filter(product => {
        const productNameWords = product.name.toLowerCase().split(" ");
        return productNameWords.some(word => word === query);

    });

    // Dacă nu sunt produse găsite, afișăm mesajul de eroare
    if (filteredProducts.length === 0) {
        document.getElementById("search-input").value = '';
        errorMessageContainer.innerHTML = `<p>Din nefericire produsul "${query}" nu a fost găsit.</p>`;
        errorMessageContainer.style.display = 'block';
        productList.innerHTML = '';
        return;
    } else {
        errorMessageContainer.style.display = 'none';
    }
    document.getElementById("search-input").value = '';

    // Afișăm produsele găsite
    displayProducts(filteredProducts, isMagazinOnline ? null : null);
    }



function openProductPage(product) {
    currentPage = "product";
    currentProduct = product; // Stocăm produsul curent
    const productList = document.getElementById("product-list");
    document.getElementById("ad-space").style.display = "none";
    document.getElementById("ad-space-left").style.display = "none";

    // Ascundem filtrul de preț atunci când suntem pe pagina unui produs
    document.getElementById("price-filter").style.display = "none";

    // Verificăm dacă produsul are arome și creăm dropdown-ul doar dacă există arome
    let flavorDropdown = '';
    if (product.flavors && product.flavors.length > 0) {
        flavorDropdown = `
            <label for="flavor-select">Alege aroma:</label>
            <select id="flavor-select">
                ${product.flavors.map(flavor => {
            return `<option value="${flavor}">${flavor}</option>`;
        }).join('')}
            </select>
        `;
    }

    // Adăugăm câmpul numeric pentru numărul de produse
    const quantityField = `
        <label for="product-quantity" style="margin-left: 10px;">Cantitate:</label>
        <input type="number" id="product-quantity" value="1" min="1" style="width: 50px; margin-left: 5px;text-align: center;">
    `;

    productList.innerHTML = `
    <div class="product-page">
        <div class="product-details">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <p>Preț: ${product.price} RON</p>
                <div style="display: flex; align-items: center;">
                    ${flavorDropdown} <!-- Dropdown-ul pentru arome, dacă există -->
                    ${quantityField} <!-- Câmpul pentru cantitate -->
                </div>
            </div>
        </div>
    </div>
    `;

    // Adăugăm produsul în istoricul browserului
    window.history.pushState({ page: "product", product: product }, product.name, `#${product.name}`);
}


// Modificăm funcția pentru a reveni la pagina principală
function returnToMainPage() {
    currentPage = "main";
    filterProducts("All");
    document.getElementById("search-input").value = ''; // Golește câmpul de căutare
    hideErrorMessage();  // Ascunde mesajul de eroare la întoarcerea pe pagina principală

    // Afișează reclama doar pe pagina principală
    document.getElementById("ad-space").style.display = "block";
    document.getElementById("ad-space-left").style.display = "block";


    // Redirecționăm utilizatorul către pagina principală
    window.location.replace("#"); // Sau folosește `window.location.href = "/"` dacă vrei să încarci complet pagina
}


// Funcția pentru a ascunde mesajul de eroare
function hideErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Funcția pentru a afișa produsele
function displayProducts(productsToDisplay, limit = null) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (limit) {
        productsToDisplay.slice(0, limit).forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Preț: ${product.price} RON</p>
            `;
            // Adăugăm un eveniment de click pentru a deschide pagina produsului
            productCard.onclick = () => openProductPage(product);
            productList.appendChild(productCard);
        });
    } else {
        productsToDisplay.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Preț: ${product.price} RON</p>
            `;
            productCard.onclick = () => openProductPage(product);
            productList.appendChild(productCard);
        });
    }
}

// Funcția de filtrare a produselor
function filterProducts(category) {
    document.getElementById("min-price").value = "";
    document.getElementById("max-price").value = "";

    // Ascundem filtrul de preț dacă suntem pe pagina principală sau pe pagina unui produs
    if (category === "All") {
        document.getElementById("price-filter").style.display = "none";
    } else {
        document.getElementById("price-filter").style.display = "block";
    }

    if (category === "All" || category === "Magazin Online") {
        isMagazinOnline = true;
    } else {
        isMagazinOnline = false;
        document.getElementById("ad-space").style.display = "none";
        document.getElementById("ad-space-left").style.display = "none";

    }

    const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
    filteredByCategory = filteredProducts;

    if (isMagazinOnline) {
        displayProducts(filteredProducts, limita);
    } else {
        displayProducts(filteredProducts);
    }

    const priceFilter = document.getElementById("price-filter");
    if (category !== "All") {
        priceFilter.style.display = "block";
    } else {
        priceFilter.style.display = "none";
    }

    hideErrorMessage();  // Ascunde mesajul de eroare când se schimbă categoria
}

// Afișăm produsele pentru toate categoriile la început
filterProducts("All");
