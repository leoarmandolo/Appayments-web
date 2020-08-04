window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.header-img-izquierda', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
  });

  sr.reveal('.header-img-derecha', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.googleplay', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.appstore', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.Frase', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.info1-img-izquierda', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.info1-texto-derecha', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.titulo-beneficio', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.beneficios-img', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.Beneficios-icon', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.Beneficios-icon2', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.equipoh1', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.ceo', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.webmaster', {
    duration: 3000,
    origin: 'bottom',
    distance: '300px'
  });

  sr.reveal('.diseñadora', {
    duration: 3000,
    origin: '-right',
    distance: '300px'
  });

  sr.reveal('.Frase2', {
    duration: 3000,
    origin: 'right',
    distance: '-300px'
  });

  sr.reveal('.formulario', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.contactanos', {
    duration: 3000,
    origin: 'right',
    distance: '300px'
  });

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });




