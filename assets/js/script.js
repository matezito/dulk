$(document).ready(function () {
  const options = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  $(".cast-carousel").slick(options);
  $(".shop-products").slick(options);

  $(document).ready(function() {
    const cart = JSON.parse(localStorage.getItem("hulk-cart")).length;
    console.log(cart)
    if(cart > 0) {
      $(
        "#cart-icon"
      ).html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> <span class="badge text-bg-secondary" id="cart-count">${cart}</span>
    </svg>`)
    }
  })

  $(document).on("click", ".buy-product", function (e) {
    e.preventDefault();
    const price = $(this).data("price");
    const product = $(this).data("product");
    const products = [
      {
        product: product,
        price: price,
      },
    ];

    $(
      "#cart-icon"
    ).html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> <span class="badge text-bg-secondary" id="cart-count"></span>
  </svg>`);

  Swal.fire({
    title: 'Thank you!',
    text: `The product ${product} was added.`,
    icon: 'success',
    confirmButtonText: 'Cool'
  })

    let cart = localStorage.getItem("hulk-cart");
    if (cart == null) {
      localStorage.setItem("hulk-cart", JSON.stringify(products));
      $('#cart-count').text(1);
      return;
    }

    const added = JSON.parse(localStorage.getItem("hulk-cart"));

    const carProducts = [
      ...added,
      {
        product: product,
        price: price,
      },
    ];
    
    localStorage.setItem("hulk-cart", JSON.stringify(carProducts));

    const items = JSON.parse(localStorage.getItem("hulk-cart"));
    $('#cart-count').text(items.length)
  });
});
