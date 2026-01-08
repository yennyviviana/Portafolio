
    function adjustPortfolioItems() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            const itemWidth = item.clientWidth;
            item.style.height = itemWidth + 'px'; // Hace que la altura sea igual al ancho para crear cuadros
        });
    }

    // Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
    window.addEventListener('load', adjustPortfolioItems);
    window.addEventListener('resize', adjustPortfolioItems);


    // JavaScript para el desplazamiento suave
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


//Profesiones automaticamente

  document.addEventListener('DOMContentLoaded', function () {
    // Array  profesiones
    let profesiones = ['Bibiana Caicedo','Anaista', 'Developer', 'Engineering'];

   
    function cambiarNombreYProfesion() {
        var nombreElemento = document.getElementById('nombre');
        var profesionElemento = document.getElementById('profesion');

        // Cambia la profesión
        let profesionActual = profesionElemento.textContent;
        let nuevaProfesion = profesiones[(profesiones.indexOf(profesionActual) + 1) % profesiones.length];
        profesionElemento.textContent = nuevaProfesion;
    }

    // Cambia dinámicamente cada 2 segundos
    setInterval(cambiarNombreYProfesion, 3000);

    // Ejecutar la función una vez después de cargar la página
    cambiarNombreYProfesion();
});

// validar contacto....
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      form.submit();
    }
  });

  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessage = '';

    if (!name) {
      errorMessage += 'El campo nombre es obligatorio.\n';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      errorMessage += 'Ingrese un correo electrónico válido.\n';
      isValid = false;
    }

    if (message.length < 10) {
      errorMessage += 'El mensaje debe tener al menos 10 caracteres.\n';
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
    }

    return isValid;
  }
});



// Seleccionamos todos los inputs de rango
const skillInputs = document.querySelectorAll('.skill-input');

skillInputs.forEach(input => {
    // Obtenemos elementos relacionados al rango
    const skillValue = input.nextElementSibling;
    const progressBar = input.previousElementSibling.querySelector('.skill-progress');

    // Escuchamos el evento de entrada
    input.addEventListener('input', () => {
        const percentage = input.value;

        // Actualizamos el valor de porcentaje y el ancho de la barra
        skillValue.textContent = `${percentage}%`;
        progressBar.style.width = `${percentage}%`;
    });
});



    document.addEventListener('DOMContentLoaded', function() {
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            setTimeout(function() {
                successMessage.classList.add('show');
            }, 100); // Se muestra después de 100ms
        }
    });


    document.addEventListener('DOMContentLoaded', function () {

  // Array de tecnologías
  const tecnologias = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'SQL',
    'Node.js'
  ];

  const tecnologiaElemento = document.getElementById('tecnologia');
  let index = 0;

  function cambiarTecnologia() {
    tecnologiaElemento.textContent = tecnologias[index];
    index = (index + 1) % tecnologias.length;
  }

  // Cambia cada 2 segundos
  setInterval(cambiarTecnologia, 2000);

  // Ejecutar al cargar
  cambiarTecnologia();
});



