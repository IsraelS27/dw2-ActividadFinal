//Creamos interfaz 
export interface Hero {
    imagen: string; // Agrega la propiedad imagen para la URL de la imagen
    id: number; 
    name: string;
    color: string; // Agrega la propiedad color
    chip: string; // Agrega la propiedad chip
    sistemaOperativo: string; // Agrega la propiedad sistemaOperativo
    almacenamientoInterno: string; // Agrega la propiedad almacenamientoInterno
    memoriaRAM: string; // Agrega la propiedad memoriaRAM
    tamano: string, //Agrega la propiedad tamano
    peso: string, // Agrega la propiedad peso
    resolucionPantalla: string; // Agrega la propiedad resolucionPantalla
    bateriaMah: string; // Agrega la propiedad bateriaMah
    camaraPrincipal: string; // Agrega la propiedad camaraPrincipal
    camaraFrontal: string; // Agrega la propiedad camaraFrontal
    conectividad: string; // Agrega la propiedad conectividad
  }