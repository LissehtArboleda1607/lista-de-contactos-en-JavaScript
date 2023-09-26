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
            ciudad: 'Ciudad Bogotá',
            direccion: 'Avenida Ciudad de Cali con Calle 139'
        }
    },
    {
        id: 3,
        nombre: 'Yolanda',
        apellido: 'González',
        telefono: '3192254518',
        ubicacion: {
            ciudad: 'Ciudad Bogotá',
            direccion: 'Avenida 68 -16 22'
        }
    },
    {
        id: 4,
        nombre: 'Ramiro',
        apellido: 'Díaz',
        telefono: '3217792474',
        ubicacion: {
            ciudad: 'Ciudad Medellín',
            direccion: 'El Poblado'
        }
    }
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

function actualizarContacto(id, nuevosDatos) {
    const contacto = listaDeContactos.find(contacto => contacto.id === id);
    if (contacto) {
        contacto.nombre = nuevosDatos.nombre;
        contacto.apellido = nuevosDatos.apellido;
        contacto.telefono = nuevosDatos.telefono;
        contacto.ubicacion.ciudad = nuevosDatos.ciudad;
        contacto.ubicacion.direccion = nuevosDatos.direccion;
    }
}

function eliminarContacto(id) {
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
        listaDeContactos.splice(indice, 1);
    }
}

const idAEliminar = 2; 
eliminarContacto(idAEliminar);
imprimirContactos(); 

const nuevoContacto = {
    id: listaDeContactos.length + 1,
    nombre: 'NuevoNombre',
    apellido: 'NuevoApellido',
    telefono: 'NuevoTelefono',
    ubicacion: {
        ciudad: 'NuevaCiudad',
        direccion: 'NuevaDirección'
    }
};
agregarContacto(nuevoContacto);
imprimirContactos();