const productInfo = [
  {
    id: 1,
    category: 'Vegetable',
    imgSrc: './assets/images/product-photo-1.png',
    title: 'Calabrese Broccoli',
    price: '$20.00',
    discountPrice: '$13.00',
    rating: 4.7
  },
  {
    id: 2,
    category: 'Fresh',
    imgSrc: './assets/images/product-photo-2.png',
    title: 'Fresh Banana Fruits',
    price: '$20.00',
    discountPrice: '$14.00',
    rating: 5,
  },
  {
    id: 3,
    category: 'Millets',
    imgSrc: './assets/images/product-photo-3.png',
    title: 'White Nuts',
    price: '$20.00',
    discountPrice: '$15.00',
    rating: 4.5,
  },
  {
    id: 4,
    category: 'Vegetable',
    imgSrc: './assets/images/product-photo-4.png',
    title: 'Vegan Red Tomato',
    price: '$20.00',
    discountPrice: '$17.00',
    rating: 4,
  },
  {
    id: 5,
    category: 'Health',
    imgSrc: './assets/images/product-photo-5.png',
    title: 'Mung Bean',
    price: '$20.00',
    discountPrice: '$11.00',
    rating: 3.3,
  },
  {
    id: 6,
    category: 'Nuts',
    imgSrc: './assets/images/product-photo-6.png',
    title: 'Brown Hazelnut',
    price: '$20.00',
    discountPrice: '$12.00',
    rating: 4.6,
  },
  {
    id: 7,
    category: 'Fresh',
    imgSrc: './assets/images/product-photo-7.png',
    title: 'Eggs',
    price: '$20.00',
    discountPrice: '$17.00',
    rating: 4.3,
  },
  {
    id: 8,
    category: 'Fresh',
    imgSrc: './assets/images/product-photo-8.png',
    title: 'Zelco Suji Elaichi Rusk',
    price: '$20.00',
    discountPrice: '$15.00',
    rating: 4.7,
  },
  {
    id: 9,
    category: 'Fruit',
    imgSrc: './assets/images/product-photo-9.png',
    title: 'Organic Apples',
    price: '$25.00',
    discountPrice: '$20.00',
    rating: 4.9,
  },
  {
    id: 10,
    category: 'Dairy',
    imgSrc: './assets/images/product-photo-10.png',
    title: 'Greek Yogurt',
    price: '$15.00',
    discountPrice: '$10.00',
    rating: 4.8,
  },
  {
    id: 11,
    category: 'Vegetable',
    imgSrc: './assets/images/product-photo-11.png',
    title: 'Fresh Spinach',
    price: '$18.00',
    discountPrice: '$12.00',
    rating: 4.6,
  },
  {
    id: 12,
    category: 'Grains',
    imgSrc: './assets/images/product-photo-12.png',
    title: 'Brown Rice',
    price: '$22.00',
    discountPrice: '$16.00',
    rating: 4.4,
  },
  {
    id: 13,
    category: 'Herbs',
    imgSrc: './assets/images/product-photo-13.png',
    title: 'Fresh Basil',
    price: '$10.00',
    discountPrice: '$8.00',
    rating: 4.7,
  },
  {
    id: 14,
    category: 'Snack',
    imgSrc: './assets/images/product-photo-14.png',
    title: 'Trail Mix',
    price: '$18.00',
    discountPrice: '$14.00',
    rating: 4.5,
  },
  {
    id: 15,
    category: 'Beverage',
    imgSrc: './assets/images/product-photo-15.png',
    title: 'Green Tea',
    price: '$12.00',
    discountPrice: '$9.00',
    rating: 4.8,
  },
  {
    id: 16,
    category: 'Frozen',
    imgSrc: './assets/images/product-photo-16.png',
    title: 'Frozen Berries',
    price: '$15.00',
    discountPrice: '$11.00',
    rating: 4.6,
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const mainProductContainer = document.querySelector('.sec-4-cards');
  const anotherProductContainer = document.querySelector('.sec-6-cards');

  function createProductCard(product, classOfSection) {
    const activeRatingWidth = (product.rating * 100) / 5;
    return `
      <div class="sec-${classOfSection}-card product-card" data-product-id="${product.id}">
        <p class="badge">${product.category}</p>
        <div class="photo">
          <img src="${product.imgSrc}">
        </div>
        <p class="title">${product.title}</p>
        <div class="info df align-e justify-b">
          <p class="price">
            <span class="full">${product.price}</span>
            <span class="discount">${product.discountPrice}</span>
          </p>
          <div class="rating">
            <span class="default">★★★★★</span>
            <span class="active" style="width: ${activeRatingWidth}%">★★★★★</span>
          </div>
        </div>
        <a href="#" class="buy">Add to cart</a>
      </div>
    `;
  }

  function renderProducts(productContainer, products, classOfSection) {
    products.forEach(product => {
      const productCard = createProductCard(product, classOfSection);

      productContainer.innerHTML += productCard;
    });
  }

  renderProducts(mainProductContainer, productInfo, 4); // Render all products in the main section with class sec-4
  renderProducts(anotherProductContainer, productInfo.slice(5, 9), 6); // Render a subset of products in another section with class sec-6 with id 6-9

  // Mobile menu logic
  const burgerBtn = document.querySelector('header button.burger');
  const burgerBtnIcons = document.querySelectorAll('header button.burger img');

  // Toggle mobile menu visibility and burger button icons
  burgerBtn.addEventListener('click', function () {
    burgerBtnIcons.forEach((icon) => {
      icon.classList.toggle('hidden');
    });

    document.querySelector('header .mobile-menu .nav').classList.toggle('visible');
  })

  const searchBtn = document.querySelector('header button.search-btn');

  searchBtn.addEventListener('click', function () {
    document.querySelector('header .mobile-menu .features .search').classList.toggle('expanded');
  })

  // Initialize Glide.js carousel
  new Glide('.sec5-cards', {
    type: 'carousel',
    startAt: 0,
    perView: 1
  }).mount();

  // Load more cards logic
  const loadMoreProductCards = document.getElementById('load-more-cards');
  const productCards = document.querySelectorAll('.sec-4-card');
  let visibleCards = getVisibleCardValue();
  let activeVisibleCards = visibleCards;
  let cardToOpen = visibleCards / 2;

  function getVisibleCardValue() {
    return Array.from(productCards).filter(card => getComputedStyle(card).display !== 'none').length
  }

  function debounce(func, wait = 100) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    };
  }

  function showCards() {
    const remainingCards = productCards.length - activeVisibleCards;
    const cardsToShow = Math.min(cardToOpen, remainingCards);

    for (let i = activeVisibleCards; i < activeVisibleCards + cardsToShow && i < productCards.length; i++) {
      productCards[i].style.display = 'block';
    }

    activeVisibleCards += cardsToShow;

    if (activeVisibleCards >= productCards.length) {
      loadMoreProductCards.querySelector('span').textContent = 'Load Less';
    }
  }

  // Function to hide cards and scroll back to the section
  function hideCards() {
    activeVisibleCards = visibleCards;

    for (let i = productCards.length - 1; i >= visibleCards; i--) {
      productCards[i].style.display = 'none';
    }

    loadMoreProductCards.querySelector('span').textContent = 'Load More';

    const offset = 60;
    const section = document.querySelector('.sec-4');
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition + offset,
      behavior: 'smooth'
    });
  }

  // Add resize event listener with debounce to recalculate visible cards
  window.addEventListener('resize', debounce(() => {
    visibleCards = getVisibleCardValue();
    activeVisibleCards = visibleCards;
    cardToOpen = visibleCards / 2;
  }, 200));

  // Add click event listener to the load more button
  loadMoreProductCards.addEventListener('click', function () {
    if (activeVisibleCards < productCards.length) {
      showCards();
    } else {
      hideCards();
    }
  });

  // Modal logic
  const btnIdsToOpenModal = ['sec-8-card-1-btn', 'sec-8-card-2-btn', 'cart-modal-btn']; // Add IDs of buttons that should open modals
  const generalModalWrapper = document.querySelector('.modals-wrapper');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');

  btnIdsToOpenModal.forEach((btnId) => {
    // Get the button element and corresponding modal element
    const btnEl = document.getElementById(btnId);
    const modalId = btnEl.getAttribute('data-modal-id');
    const modalEl = document.getElementById(modalId);

    // Add click event listener to the button to open the modal
    btnEl.addEventListener('click', function () {
      generalModalWrapper.classList.add('visible');
      modalEl.classList.add('visible');
      document.querySelector('body').classList.add('overflow');

      if (modalId === 'cart-modal') {
        displaySelectedProducts();
      }
    });
  })

  // Add click event listeners to all close buttons to close the modal
  closeModalBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', function () {
      generalModalWrapper.classList.remove('visible');
      this.parentElement.classList.remove('visible');
      document.querySelector('body').classList.remove('overflow');
    })
  });


  function isEmailValid(value) {
    const emailValidateRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    return emailValidateRegExp.test(value);
  }


  (function () {
    emailjs.init({
      publicKey: "g3a8K7C6xKrDLKvqj",
    });
  })();

  const formBtn = document.getElementById('form-submit');
  const emailField = document.getElementById('email-input');

  const notifier = new AWN({
    position: 'bottom-right',
    maxNotifications: 3
  });

  formBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const currentEmail = emailField.value;

    if (isEmailValid(currentEmail)) {
      emailjs.send("service_473vmpj", "template_1wsqmkp", {
        email: currentEmail,
        name: "Guest",
        message: "User have left email: " + currentEmail
      })
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          if (typeof notifier !== 'undefined') {
            notifier.success('Email sent successfully!');
          }
          emailField.value = '';
        }, function (error) {
          console.log('FAILED...', error);
          alert('Error sending email: ' + JSON.stringify(error));
        });

      const templateParams = {
        user_email: currentEmail,
        name: "organic.food2500",
        message: "Thank you for subscribing!"
      };
      
      emailjs.send("service_473vmpj", "template_f0fbiw9", templateParams)
        .then(() => {
          notifier.success('Thank you! Please check your mail.');
          emailField.value = '';
        })
        .catch((err) => {
          console.error('Упс:', err);
        });

    } else {
      if (typeof notifier !== 'undefined') {
        notifier.alert('Please type correct email address!');
      } else {
        alert('Please type correct email address!');
      }
    }
  });

  // Cart logic
  let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  const allBuyButtons = document.querySelectorAll('.product-card .buy');

  // Function to update cart value indicators and button states
  function updateCartValueIndicators() {
    const allSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const cartCountElement = document.querySelector('header .features .cart p span');
    cartCountElement.textContent = allSelectedProducts.length;

    allBuyButtons.forEach(buyBtn => {
      const productId = buyBtn.parentElement.getAttribute('data-product-id');
      buyBtn.classList.toggle('active', allSelectedProducts.includes(productId));
    });
  }

  // Function to handle buy button clicks, toggle product selection, and update localStorage
  function handleBuyButtonClick(event) {
    event.preventDefault();

    const productId = this.parentElement.getAttribute('data-product-id');
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      selectedProducts.push(productId);
    } else {
      selectedProducts = selectedProducts.filter(id => id !== productId);
    }

    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    updateCartValueIndicators();
  }

  // Function to display selected products in the cart modal and add event listeners for removing products from the list
  function displaySelectedProducts() {
    const productList = document.querySelector('#cart-modal ul');
    productList.innerHTML = selectedProducts.map(productId => {
      const productName = getProductNameById(productId);
      // Return the list item HTML with a data attribute for the product ID and a remove button
      return `
        <li data-product-id="${productId}">
          <span>${productName}</span>
          <i class="fa-regular fa-circle-xmark fa-lg" style="color: #274c5b;"></i>
        </li>
      `;
    }).join('');

    // Add click event listeners to the remove buttons to allow removing products from the list
    selectedProducts.forEach(productId => {
      const listItem = productList.querySelector(`li[data-product-id="${productId}"]`);
      listItem.addEventListener('click', () => removeProductFromList(productId));
    });
  }

  // Helper function to get product name by ID from the productInfo array
  function getProductNameById(productId) {
    const product = productInfo.find(p => p.id == productId);
    return product ? product.title : 'Unknown Product';
  }

  // Function to remove a product from the selected products list, update localStorage, and refresh the cart display
  function removeProductFromList(productId) {
    // Remove the product ID from the selectedProducts array
    selectedProducts = selectedProducts.filter(id => id !== productId);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    updateCartValueIndicators();
    displaySelectedProducts();
  }

  // Initial display of selected products in the cart modal and update cart indicators on page load
  updateCartValueIndicators();

  // Add click event listener to the cart modal button to display selected products when the modal is opened
  allBuyButtons.forEach(buyBtn => {
    buyBtn.addEventListener('click', handleBuyButtonClick);
  });
});