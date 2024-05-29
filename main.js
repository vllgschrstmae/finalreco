// script for home.html
var searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            var searchInput = document.getElementById("searchInput").value;

            // Construct search query URLs for each website
            var shopeeURL = "https://shopee.ph/search?keyword=" + encodeURIComponent(searchInput);
            var lazadaURL = "https://www.lazada.com.ph/catalog/?q=" + encodeURIComponent(searchInput);
            var temuURL = "https://www.temu.com/ph/search?query=" + encodeURIComponent(searchInput);
            var aliexpressURL = "https://www.aliexpress.com/wholesale?SearchText=" + encodeURIComponent(searchInput);

            // Open search results in new tabs
            window.open(shopeeURL, '_blank');
            window.open(lazadaURL, '_blank');
            window.open(temuURL, '_blank');
            window.open(aliexpressURL, '_blank');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('shopSelect').addEventListener('change', function () {
        var searchInput = document.getElementById('searchInput');
        searchInput.disabled = false; // Enable search input when shop is selected
        searchInput.focus(); // Focus on search input
    });
});




// script for results.html
document.addEventListener("DOMContentLoaded", function () {
    var searchnav = document.querySelector(".searchnav");
    if (searchnav) {
        searchnav.addEventListener("click", function () {
            document.querySelector("body").classList.toggle("active");
        });
    }

    function openNav() {
        document.getElementById("mynavsidebar").style.width = "250px"; // Adjust the width as needed
        document.getElementById("main").style.marginRight = "250px"; // Adjust the margin as needed
    }

    function closeNav() {
        document.getElementById("mynavsidebar").style.width = "0"; // Close the sidebar by setting width to 0
        document.getElementById("main").style.marginRight = "0"; // Reset the margin of the main content
    }

    
    // Assign the functions to the global scope
    window.openNav = openNav;
    window.closeNav = closeNav;

    // Fetch URL parameters and update the search results
    const urlParams = new URLSearchParams(window.location.search);
    const rating = urlParams.get('rating');
    const location = urlParams.get('location');
    const minPrice = urlParams.get('min_price');
    const maxPrice = urlParams.get('max_price');
    const priceRange = urlParams.get('price_range');

    console.log('Filters:', { rating, location, minPrice, maxPrice, priceRange });

    var searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var searchInput = document.getElementById("searchInput").value;

            var shopeeURL = "https://shopee.ph/search?keyword=" + encodeURIComponent(searchInput);
            var lazadaURL = "https://www.lazada.com.ph/catalog/?q=" + encodeURIComponent(searchInput);
            var temuURL = "https://www.temu.com/ph/search?query=" + encodeURIComponent(searchInput);
            var aliexpressURL = "https://www.aliexpress.com/wholesale?SearchText=" + encodeURIComponent(searchInput);

            window.open(shopeeURL, '_blank');
            window.open(lazadaURL, '_blank');
            window.open(temuURL, '_blank');
            window.open(aliexpressURL, '_blank');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const filterButton = document.getElementById('filter-button');
    const filterBar = document.getElementById('myfilterbar');

    filterButton.addEventListener('click', function () {
        filterBar.style.display = filterBar.style.display === 'none' ? 'block' : 'none';
    });
});

//sidebar

// shopee API
async function fetchShopeeData(query) {
    const url = 'https://shopeeapi2.p.rapidapi.com/id/search?q=Keripik%20Kentang&p=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413650da9msh163bf6c5104d8b8p1e327ejsn231b7ecf858e',
            'X-RapidAPI-Host': 'shopeeapi2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function fetchShopeeProductDetails(productId) {
    const url = 'https://shopeeapi2.p.rapidapi.com/id/Min-order-2pcs-Kentang-Mustofa-100g-Kering-Kentang-Kripik-Kentang-Kentang-Garing-i.179967476.7583210867';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413650da9msh163bf6c5104d8b8p1e327ejsn231b7ecf858e',
            'X-RapidAPI-Host': 'shopeeapi2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// lazada
async function fetchLazadaData(query) {
    const url = 'https://lazada-api.p.rapidapi.com/lazada/search/items?keywords=t%20shirt&site=%3CREQUIRED%3E&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413650da9msh163bf6c5104d8b8p1e327ejsn231b7ecf858e',
            'X-RapidAPI-Host': 'lazada-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
async function fetchLazadaProductDetails(productId) {
    const url = 'https://lazada-api.p.rapidapi.com/lazada/item_detail?item_id=2430026477&site=%3CREQUIRED%3E';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413650da9msh163bf6c5104d8b8p1e327ejsn231b7ecf858e',
            'X-RapidAPI-Host': 'lazada-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

//temu
async function fetchTemuData(query) {
    const url = 'https://temu-com-shopping-api-realtime-api-scrapper-from-temu-com.p.rapidapi.com/search?keyword=shoes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413650da9msh163bf6c5104d8b8p1e327ejsn231b7ecf858e',
            'X-RapidAPI-Host': 'temu-com-shopping-api-realtime-api-scrapper-from-temu-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
async function fetchTemuProductDetails(productId) {
    const url = 'https://temu-com-shopping-api-realtime-api-scrapper-from-temu-com.p.rapidapi.com/details?goodsId=601099557952370';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413650da9msh163bf6c5104d8b8p1e327ejsn231b7ecf858e',
            'X-RapidAPI-Host': 'temu-com-shopping-api-realtime-api-scrapper-from-temu-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// to display results
async function displayResults(shop, query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    let items;
    switch (shop) {
        case 'shopee':
            items = await fetchShopeeData(query);
            break;
        case 'lazada':
            items = await fetchLazadaData(query);
            break;
        case 'temu':
            items = await fetchTemuData(query);
            break;
    }

    // Apply filters (location, price, rating)
    const locationFilter = document.getElementById('location-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const ratingFilter = document.getElementById('rating-filter').value;

    const filteredItems = filterResults(items, locationFilter, priceFilter, ratingFilter);

    // Display filtered results
    if (filteredItems) {
        filteredItems.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const productImg = document.createElement('img');
            productImg.src = item.image; // Adjust based on API response

            const productTitle = document.createElement('div');
            productTitle.classList.add('product-title');
            productTitle.innerText = item.name; // Adjust based on API response

            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.innerText = `₱${item.price / 100}`; // Adjust based on API response

            productElement.appendChild(productImg);
            productElement.appendChild(productTitle);
            productElement.appendChild(productPrice);

            productElement.addEventListener('click', async () => {
                const productDetails = await fetchShopeeProductDetails(item.id);
                displayProductDetails(productDetails, shop);
            });

            resultsContainer.appendChild(productElement);
        });
    }
}

function displayProductDetails(product, shop) {
    document.getElementById('modal-product-img').src = product.image;
    document.getElementById('modal-product-title').innerText = product.name;
    document.getElementById('modal-product-price').innerText = `Price: ₱${product.price / 100}`;
    document.getElementById('product-modal').style.display = 'block';

    document.getElementById('add-to-cart-button').onclick = () => {
        document.getElementById('thank-you-message').style.display = 'block';
        setTimeout(() => {
            switch (shop) {
                case 'shopee':
                    window.location.href = `https://shopee.com.ph/product/${product.id}`; // Adjust URL based on Shopee product page
                    break;
                case 'lazada':
                    window.location.href = `https://www.lazada.com.ph/products/${product.id}`; // Adjust URL based on Lazada product page
                    break;
                case 'temu':
                    window.location.href = `https://temu.com/product/${product.id}`; // Adjust URL based on Temu product page
                    break;
            }
        }, 2000);
    };
}

// Close the modal when the user clicks the close button
document.getElementsByClassName('close')[0].addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});

// Close the thank you message
document.getElementsByClassName('close')[1].addEventListener('click', () => {
    document.getElementById('thank-you-message').style.display = 'none';
});
