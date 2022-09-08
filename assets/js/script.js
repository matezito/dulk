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
    const items = localStorage.getItem("hulk-cart");
    if(items != null ){
      const cart = JSON.parse(items).length;
      console.log(cart)
      if(cart > 0) {
        $('#cart-count').text(cart);
        $('#cart-content').html(`<span class="dropdown-item cart-item">Products in cart: ${cart}</span>`);
        $('.empty-cart').removeClass('d-none');
        return
      }
    }
   
    $('#cart-content').html(`<span class="dropdown-item cart-item">Cart is empty</span>`);
    
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


  Swal.fire({
    title: 'Thank you!',
    text: `The product ${product} was added.`,
    icon: 'success',
    confirmButtonText: 'Cool'
  })

    let cart = localStorage.getItem("hulk-cart");
    if (cart == null) {
      localStorage.setItem("hulk-cart", JSON.stringify(products));
      $('#cart-content').html(`<span class="dropdown-item cart-item">Products in cart: 1</span>`);
      $('.empty-cart').removeClass('d-none');
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
    $('#cart-content').html(`<span class="dropdown-item cart-item">Products in cart: ${items.length}</span>`);
  });
  $(document).on('click', '.empty-cart', function() {
    localStorage.removeItem("hulk-cart");
    $('#cart-count').text('');
    $('#cart-content').html(`<span class="dropdown-item cart-item">Cart is empty</span>`);
    $('.empty-cart').addClass('d-none');
  });
});
