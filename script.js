function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goToTopBtn").style.display = "block";
    } else {
      document.getElementById("goToTopBtn").style.display = "none";
    }
  }

  $(document).ready(function () {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });

    window.onscroll = function () { scrollFunction() };
  });

  window.onscroll = function () { scrollFunction() };

  function goToTop() {
    const scrollToTop = () => {
      const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    };

    scrollToTop();
  }