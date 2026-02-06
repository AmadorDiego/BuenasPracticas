// Se eliminó código comentado, la mejor práctica es hacerlo

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// Eliminé variables de conexión debido a su inuso

// Eliminé configuración del sistema. El usuario final no debería saber esto

// Eliminé mensajes de consola debido a que se presta a ataques maliciosos, además de que usaba variables que se eliminaron previamente

// Función principal de inicialización
function inicializar() {
  // Se eliminaron mensajes de consola debido a que se expone información sensible, además de que usaba variables que se eliminaron previamente

  // Event listener para el formulario
  document
    .getElementById("registroForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      guardarRegistro();
    });

  // Se eliminaron mensajes de consola, no debería notificar esto al usuario final
}

// Función para guardar un registro
function guardarRegistro() {
  // Se eliminaron mensajes de consola, no debería notificar esto al usuario final

  // Obtener valores del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido1 = document.getElementById("apellido1").value;
  var apellido2 = document.getElementById("apellido2").value;
  var telefono = document.getElementById("telefono").value;
  var curp = document.getElementById("curp").value;
  var email = document.getElementById("email").value;

  // Se eliminaron mensajes de consola, no debería notificar esto al usuario final

  if (nombre == "") {
    // Se refactorizó mensaje de error debido a la exposición de datos sobre el modelado de datos, solo se debería mostrar el mensaje "Campo 'nombre' vacio"
    alert("Campo 'nombre' vacío.");
    return;
  }

  if (apellido1 == "") {
    alert("Campo 'primer apellido' vacío.");
    return;
  }

  if (apellido2 == "") {
    alert("Campo 'segundo apellido' vacío.");
    return;
  }

  if (curp == "") {
    alert("Campo 'curp' vacío.");
    return;
  }

  if (email == "") {
    alert("Campo 'email' vacío.");
    return;
  }

  // Se eliminó código comentado, la mejor práctica es hacerlo

  // Crear objeto de registro
  var nuevoRegistro = {
    id: contador++,
    nombre: nombre,
    apellido1: apellido1,
    apellido2: apellido2,
    nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
    telefono: telefono,
    curp: curp,
    email: email,
    fechaRegistro: new Date().toISOString(),
    // Se eliminaron atributos que contienen información sensible e información del servidor
  };

  // Se eliminaron mensajes de consola, no debería notificar esto al usuario final

  // Agregar al arreglo global
  registros.push(nuevoRegistro);

  // Se eliminaron mensajes de consola, no debería notificar esto al usuario final

  // Mostrar en tabla
  agregarFilaTabla(nuevoRegistro);

  // Limpiar formulario
  document.getElementById("registroForm").reset();

  // Se eliminaron mensajes de consola, no debería notificar esto al usuario final

  // Se eliminó simulación de envío a servidor (hardcoded URL)
}

// Se refactorizó la
// Función para agregar fila a la tabla reconstruida
function agregarFilaTabla(registro) {
  var tbody = document.getElementById("tablaRegistros");

  var nuevaFila = document.createElement("tr");
  var datos = [
    registro.nombreCompleto,
    registro.telefono,
    registro.curp,
    registro.email,
  ];

  datos.forEach((dato) => {
    var celda = document.createElement("td");
    celda.textContent = dato;
    nuevaFila.appendChild(celda);
  });

  tbody.appendChild(nuevaFila);
}

// Se eliminó Función que simula envío a servidor, no considero que sea necesario.

// Se eliminó código comentado, la mejor práctica es hacerlo

// Se eliminó función de diagnóstico ya que expone información del sistema
// Por consiguiente, no se puede ejecutar la función, por lo que se elimina cualquier uso de esta

// Se eliminó código comentado, la mejor práctica es hacerlo

// Se eliminó variable global adicional porque no se usa

// Se eliminaron mensajes de consola y el eventListener, no debería notificar esto al usuario final. Datos sensibles

// Se eliminó código comentado, la mejor práctica es hacerlo

// Se eliminaron mensajes de consola, no debería notificar esto al usuario final
inicializar();
