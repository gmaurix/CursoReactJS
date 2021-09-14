const impulsivos = [
  {
    id: 1,
    descricpion: "Bombon Escoces",
    Precio: 430,
    img: "./img/bombon_escoces_caja.jpeg",
  },
  {
    id: 2,
    descricpion: "Bombon Crocante",
    Precio: 340,
    img: "./img/bomboncrocantesolo.png",
    stock: 10,
  },
  {
    id: 3,
    descricpion: "Bombon Suizo",
    Precio: 380,
    img: "./img/bombom_suizo_caja.jpeg",
    stock: 20,
  },
  {
    id: 4,
    descricpion: "Bombon Vainilla Split",
    Precio: 340,
    img: "./img/bombonvainilla.png",
    stock: 10,
  },
  {
    id: 5,
    descricpion: "Cassata",
    Precio: 270,
    img: "./img/casatta.png",
    stock: 20,
  },
  {
    id: 6,
    descricpion: "Almendrado",
    Precio: 270,
    img: "./img/almendrado.png",
    stock: 20,
  },
  {
    id: 7,
    descricpion: "Delicia",
    Precio: 270,
    img: "./img/delicia.png",
    stock: 20,
  },
  {
    id: 8,
    descricpion: "Crocantino",
    Precio: 270,
    img: "./img/crocantino.png",
    stock: 20,
  },
  {
    id: 9,
    descricpion: "Palito Bombon",
    Precio: 500,
    img: "./img/palito_bombon.jpeg",
    stock: 20,
  },
  {
    id: 10,
    descricpion: "Palito Frutal Frutilla",
    Precio: 300,
    img: "./img/palito_frutal_frutilla.png",
    stock: 20,
  },
  {
    id: 11,
    descricpion: "Palito Frutal Limon",
    Precio: 300,
    img: "./img/palitolimon.png",
    stock: 20,
  },
  {
    id: 12,
    descricpion: "Palito Frutal Naranja",
    Precio: 300,
    img: "./img/palitonaranja.png",
    stock: 20,
  },
  {
    id: 13,
    descricpion: "Palito Pico Dulce",
    Precio: 300,
    img: "./img/picodulce__1.png",
    stock: 20,
  },
  {
    id: 14,
    descricpion: "Torta Grido",
    Precio: 580,
    img: "./img/torta_grido.png",
    stock: 6,
  },
  {
    id: 15,
    descricpion: "Torta Milka",
    Precio: 580,
    img: "./img/torta_milka.jpg",
    stock: 20,
  },

  {
    id: 16,
    descricpion: "Torta Oreo",
    Precio: 580,
    img: "./img/torta_oreo.png",
    stock: 20,
  },
  {
    id: 17,
    descricpion: "Familiar Nº2",
    Precio: 580,
    img: "./img/familiar_n2.png",
    stock: 20,
  }
];



 /* ------ promise para mostrar los productos con 3 segundos de retraso ------ */
 export const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (impulsivos != null) {
          resolve(impulsivos)
      } else {
          reject(() => console.log('algo anda mal'))
      }
  }, 1500)
})

