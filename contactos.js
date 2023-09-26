const listaDeContactos = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      telefono: '3201569874',
      ubicacion: {
        ciudad: 'Ciudad Armenia',
        direccion: 'Calle 123 - 32 25'
      }
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      telefono: '3154251845',
      ubicacion: {
        ciudad: 'Ciudad Bogota',
        direccion: 'Avenida Ciudad de Cali con Calle 139'
      }
    },
    {
      id: 3,
      nombre: 'Yolanda',
      apellido: 'Gonzalez',
      telefono: '3192254518',
      ubicacion: {
        ciudad: 'Ciudad Bogota',
        direccion: 'Avenida 68 -16 22'
      }
    },
  {
    id: 4,
    nombre: 'Ramiro',
    apellido: 'Diaz',
    telefono: '3217792474',
    ubicacion: {
      ciudad: 'Ciudad Medellin',
      direccion: 'El Poblado'
    }
  },
  ];
  
  function agregarContacto(nuevoContacto) {
    listaDeContactos.push(nuevoContacto);
  }
  
  function imprimirContactos() {
    listaDeContactos.forEach(contacto => {
      console.log(`ID: ${contacto.id}`);
      console.log(`Nombre: ${contacto.nombre}`);
      console.log(`Apellido: ${contacto.apellido}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      console.log(`Ubicación - Ciudad: ${contacto.ubicacion.ciudad}`);
      console.log(`Ubicación - Dirección: ${contacto.ubicacion.direccion}`);
      console.log('---');
    });
  }