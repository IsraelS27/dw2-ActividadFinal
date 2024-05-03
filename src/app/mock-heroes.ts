//Definimos la constante HEROES como un conjunto de 10 héroes y expórtamos


import { Hero } from './hero';

export const HEROES: Hero[] = [
  {
    imagen: 'assets/iphone15.jpg',
    id: 1, 
    name: 'Iphone 15',
    color: 'Rosa, Amarillo, Verde, Negro',
    chip: 'A16 Bionic',
    sistemaOperativo: 'iOS17',
    almacenamientoInterno: '128, 256, 512 GB',
    memoriaRAM: '6 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '171 g',
    resolucionPantalla: 'OLED 6,1 Super Retina XDR 2556 x 1179 px, Hasta 2000 nits, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '48 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G, 5G',
  },
  {
    imagen: 'assets/iphone14.jpg',
    id: 2, 
    name: 'Iphone 14',
    color: 'Lila, Amarillo, Blanco, Negro',
    chip: 'A15 Bionic',
    sistemaOperativo: 'iOS17',
    almacenamientoInterno: '128, 256, 512 GB',
    memoriaRAM: '6 GB',
    tamano: 'Alto: 146,7 mm; Ancho: 71,5 mm; Grosor: 7,8 mm',
    peso: '172 g',
    resolucionPantalla: 'OLED 6,1 Super Retina XDR 2532 x 1170 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '48 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G, 5G',
  },
  {
    imagen: 'assets/iphone13.png',
    id: 3, 
    name: 'Iphone 13',
    color: 'Blanco, Rojo, Verde, Negro',
    chip: 'A16 Bionic',
    sistemaOperativo: 'iOS17',
    almacenamientoInterno: '128, 256, 512 GB',
    memoriaRAM: '6 GB',
    tamano: 'Alto: 146,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '173 g',
    resolucionPantalla: 'OLED 6,1 Super Retina XDR 2556 x 1170 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '48 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G, 5G',
  },
  {
    imagen: 'assets/iphone12.jpg',
    id: 4, 
    name: 'Iphone 12',
    color: 'Azul, Blanco, Rojo, Negro',
    chip: 'A16 Bionic',
    sistemaOperativo: 'iOS17',
    almacenamientoInterno: '128, 256, 512 GB',
    memoriaRAM: '6 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,5 mm; Grosor: 7,8 mm',
    peso: '162 g',
    resolucionPantalla: 'OLED 6,1 Super Retina XDR 2532 x 1170 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '48 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G, 5G',
  },
  {
    imagen: 'assets/iphone11.png',
    id: 5, 
    name: 'Iphone 11',
    color: 'Malva, Blanco, Verde, Negro',
    chip: 'A15 Bionic',
    sistemaOperativo: 'iOS14',
    almacenamientoInterno: '64, 128, 256 GB',
    memoriaRAM: '4 GB',
    tamano: 'Alto: 15,6 mm; Ancho: 7,56 mm; Grosor: 0,8 mm',
    peso: '194 g',
    resolucionPantalla: 'OLED 6,1 Lquid Retina HD 1792 x 828 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '32 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G',
  },
  {
    imagen: 'assets/iphonexr.jpg',
    id: 6, 
    name: 'Iphone XR',
    color: 'Rosa, Amarillo, Verde, Negro',
    chip: 'A14 Bionic',
    sistemaOperativo: 'iOS12',
    almacenamientoInterno: '64, 128, 256 GB',
    memoriaRAM: '4 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '174 g',
    resolucionPantalla: 'OLED 6,1 Liquid Retina HD 2556 x 1170 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '32 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G',
  },
  {
    imagen: 'assets/iphonexs.jpg',
    id: 7, 
    name: 'Iphone Xs',
    color: 'Gold, Black',
    chip: 'A13 Bionic',
    sistemaOperativo: 'iOS12',
    almacenamientoInterno: '128, 256, 512 GB',
    memoriaRAM: '3 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '171 g',
    resolucionPantalla: 'OLED 6,1 Super Retina XDR 2556 x 1179 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '32 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G',
  },
  {
    imagen: 'assets/iphonex.jpg',
    id: 8, 
    name: 'Iphone X',
    color: 'Blanco, Negro',
    chip: 'A11 Bionic',
    sistemaOperativo: 'iOS12',
    almacenamientoInterno: '64, 128, 256 GB',
    memoriaRAM: '3 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '171 g',
    resolucionPantalla: 'OLED 6,1 Super Retina HD 2556 x 1179 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '48 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G',
  },
  {
    imagen: 'assets/iphone8plus.jpg',
    id: 9, 
    name: 'Iphone 8 Plus',
    color: 'Rojo, Gold, Silver, Negro',
    chip: 'A11 Bionic',
    sistemaOperativo: 'iOS10',
    almacenamientoInterno: '32, 64, 128 GB',
    memoriaRAM: '3 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '171 g',
    resolucionPantalla: 'OLED 6,1 Super Retina XDR 2556 x 1170 px, rue Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '32 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G',
  },
  {
    imagen: 'assets/iphone8.jpg',
    id: 10, 
    name: 'Iphone 8',
    color: 'Rojo, Blanco, Negro',
    chip: 'A11 Bionic',
    sistemaOperativo: 'iOS10',
    almacenamientoInterno: '64, 128, 256 GB',
    memoriaRAM: '3 GB',
    tamano: 'Alto: 147,6 mm; Ancho: 71,6 mm; Grosor: 7,8 mm',
    peso: '171 g',
    resolucionPantalla: 'OLED 6,1 Liquid Retina XDR 2556 x 1179 px, True Tone, HDR',
    bateriaMah: 'N.D.',
    camaraPrincipal: '32 MP',
    camaraFrontal: '12 MP',
    conectividad: '3G, 4G, 5G',
  }
];
