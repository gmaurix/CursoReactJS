const impulsivos = [
  {
    id: 1,
    categoria: "Bombones",
    descripcion: "Bombon Escoces",
    detalle:
      "Crema helada de chocolate y crema americana, con corazón de dulce de leche repostero, cubierto con baño de repostería y crocante de maní.",
    Precio: 430,
    img: "../img/bombon_escoces_caja.jpeg",
    stock: 10,
  },
  {
    id: 2,
    categoria: "Bombones",
    descripcion: "Bombon Crocante",
    detalle: "Crema helada",
    Precio: 340,
    img: "../img/bomboncrocantesolo.png",
    stock: 10,
  },
  {
    id: 3,
    categoria: "Bombones",
    descripcion: "Bombon Suizo",
    detalle: "Crema helada",
    Precio: 380,
    img: "../img/bombom_suizo_caja.jpeg",
    stock: 20,
  },
  {
    id: 4,
    categoria: "Bombones",
    descripcion: "Bombon Vainilla Split",
    detalle: "Crema helada",
    Precio: 340,
    img: "../img/bombonvainilla.png",
    stock: 10,
  },
  {
    id: 5,
    categoria: "Postres",
    descripcion: "Cassata",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/casatta.png",
    stock: 20,
  },
  {
    id: 6,
    categoria: "Postres",
    descripcion: "Almendrado",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/almendrado.png",
    stock: 20,
  },
  {
    id: 7,
    categoria: "Postres",
    descripcion: "Delicia",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/delicia.png",
    stock: 20,
  },
  {
    id: 8,
    categoria: "Postres",
    descripcion: "Crocantino",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/crocantino.png",
    stock: 20,
  },
  {
    id: 9,
    categoria: "Palitos",
    descripcion: "Palito Bombon",
    detalle: "Crema helada",
    Precio: 500,
    img: "../img/palito_bombon.jpeg",
    stock: 20,
  },
  {
    id: 10,
    categoria: "Palitos",
    descripcion: "Palito Frutal Frutilla",
    detalle: "Crema helada",
    Precio: 300,
    img: "../img/palito_frutal_frutilla.png",
    stock: 20,
  },
  {
    id: 11,
    categoria: "Palitos",
    descripcion: "Palito Frutal Limon",
    detalle: "Crema helada",
    Precio: 300,
    img: "../img/palitolimon.png",
    stock: 20,
  },
  {
    id: 12,
    categoria: "Palitos",
    descripcion: "Palito Frutal Naranja",
    detalle: "Crema helada",
    Precio: 300,
    img: "../img/palitonaranja.png",
    stock: 20,
  },
  {
    id: 13,
    categoria: "Palitos",
    descripcion: "Palito Pico Dulce",
    detalle: "Crema helada",
    Precio: 300,
    img: "../img/picodulce__1.png",
    stock: 20,
  },
  {
    id: 14,
    categoria: "Tortas",
    descripcion: "Torta Grido",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/torta_grido.png",
    stock: 6,
  },
  {
    id: 15,
    categoria: "Tortas",
    descripcion: "Torta Milka",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/torta_milka.jpg",
    stock: 20,
  },
  {
    id: 16,
    categoria: "Tortas",
    descripcion: "Torta Oreo",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/torta_oreo.png",
    stock: 20,
  },
  {
    id: 17,
    categoria: "Familiar",
    descripcion: "Familiar Nº1",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/familiar_n1.png",
    stock: 20,
  },
  {
    id: 18,
    categoria: "Familiar",
    descripcion: "Familiar Nº2",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/familiar_n2.png",
    stock: 20,
  },
  {
    id: 19,
    categoria: "Familiar",
    descripcion: "Familiar Nº3",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/familiar_n3.png",
    stock: 20,
  },
  {
    id: 20,
    categoria: "Familiar",
    descripcion: "Familiar Nº4",
    detalle: "Crema helada",
    Precio: 580,
    img: "../img/familiar_n4.png",
    stock: 20,
  },
  {
    id: 21,
    categoria: "Tentaciones",
    descripcion: "Tentación Granizado",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentaciongranizado.png",
    stock: 5,
  },
  {
    id: 22,
    categoria: "Tentaciones",
    descripcion: "Tentación Chocolate",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacionchocolate.png",
    stock: 5,
  },
  {
    id: 23,
    categoria: "Tentaciones",
    descripcion: "Tentación Crema Coockie",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacioncremacookie_1.png",
    stock: 5,
  },
  {
    id: 24,
    categoria: "Tentaciones",
    descripcion: "Tentación Crema Americana",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacionamericanna.png",
    stock: 5,
  },
  {
    id: 25,
    categoria: "Tentaciones",
    descripcion: "Tentación Dulce de Leche",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacionddl.png",
    stock: 5,
  },
  {
    id: 26,
    categoria: "Tentaciones",
    descripcion: "Tentación Frutilla",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacion_frutilla.png",
    stock: 5,
  },
  {
    id: 27,
    categoria: "Tentaciones",
    descripcion: "Tentación Mascarpone",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacion_mascarpone.png",
    stock: 5,
  },
  {
    id: 28,
    categoria: "Tentaciones",
    descripcion: "Tentación Limón",
    detalle: "Crema helada",
    Precio: 270,
    img: "../img/tentacio_limon.png",
    stock: 5,
  },
];

/* ------ promise para mostrar los productos con 1.5 segundos de retraso ------ */
export const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (impulsivos != null) {
      resolve(impulsivos);
    } else {
      reject(() => console.log("algo anda mal"));
    }
  }, 1500);
});

export const getUnicProd = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(impulsivos);
  }, 2000);
});