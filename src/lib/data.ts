export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  isNew?: boolean;
  inStock: boolean;
  dimensions: string;
  material: string;
}

export const categories = ["Vestidos", "Saias"];

export const products: Product[] = [
  // VESTIDOS
  {
    id: "2",
    name: "Vestido Branco Elegante",
    description:
      "Vestido clássico em renda filé branca, perfeito para ocasiões especiais. Trabalho artesanal refinado com detalhes únicos.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/branco.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "3",
    name: "Vestido Azul Marinho",
    description:
      "Vestido sofisticado em renda filé azul marinho. Ideal para eventos formais e cerimônias.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/quatro-tons-azul.jpg",
    category: "Vestidos",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "6",
    name: "Vestido Floral Colorido",
    description:
      "Vestido vibrante com padrão floral em renda filé multicolorida. Peça única que expressa alegria e criatividade.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/colorido.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "7",
    name: "Vestido Amarelo e Branco",
    description:
      "Vestido delicado em renda filé com combinação harmoniosa de amarelo e branco. Perfeito para ocasiões especiais e eventos diurnos.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/amarelo-branco.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "8",
    name: "Vestido Branco Clássico",
    description:
      "Vestido elegante em renda filé branca tradicional. Design atemporal que nunca sai de moda, ideal para casamentos e batizados.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/branco.jpg",
    category: "Vestidos",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "9",
    name: "Vestido Caramelo",
    description:
      "Vestido sofisticado em renda filé na cor caramelo. Tom neutro versátil que combina com qualquer ocasião.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/caramelo.jpg",
    category: "Vestidos",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "10",
    name: "Vestido Chocolate",
    description:
      "Vestido elegante em renda filé na cor chocolate. Tom rico e sofisticado, perfeito para eventos noturnos.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/chocolate.jpg",
    category: "Vestidos",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "11",
    name: "Vestido Lavanda",
    description:
      "Vestido romântico em renda filé na cor lavanda. Tom delicado e feminino, ideal para ocasiões especiais e românticas.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/lavanda-frente.jpg",
    images: [
      "/images/vestidos/lavanda-frente.jpg",
      "/images/vestidos/lavanta-costas.jpg",
    ],
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "12",
    name: "Vestido Preto Elegante",
    description:
      "Vestido clássico em renda filé preta. Peça atemporal e sofisticada, perfeita para eventos formais e coquetéis.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/preto.jpg",
    category: "Vestidos",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "13",
    name: "Vestido Quatro Tons Azul",
    description:
      "Vestido único em renda filé com quatro tonalidades de azul. Design exclusivo que cria um efeito degradê encantador.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/quatro-tons-azul.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "14",
    name: "Vestido Quatro Tons Rosa",
    description:
      "Vestido romântico em renda filé com quatro tonalidades de rosa. Efeito degradê que transmite delicadeza e feminilidade.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/quatro-tons-rosa.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "15",
    name: "Vestido Quatro Tons Roxo",
    description:
      "Vestido sofisticado em renda filé com quatro tonalidades de roxo. Combinação única que expressa elegância e modernidade.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/quatro-tons-roxo.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "16",
    name: "Vestido Quatro Tons Verde",
    description:
      "Vestido natural em renda filé com quatro tonalidades de verde. Inspirado na natureza, transmite frescor e vitalidade.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/quatro-tons-verde.jpg",
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "17",
    name: "Vestido Rosa Cru",
    description:
      "Vestido delicado em renda filé na cor rosa cru. Tom suave e neutro, perfeito para diversas ocasiões.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/rosa-cru.jpg",
    category: "Vestidos",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "18",
    name: "Vestido Verão",
    description:
      "Vestido leve em renda filé perfeito para o verão. Design fresco e confortável para os dias mais quentes.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/verao-frente.jpg",
    images: [
      "/images/vestidos/verao-frente.jpg",
      "/images/vestidos/verao-costas.jpg",
    ],
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "19",
    name: "Vestido Vermelho",
    description:
      "Vestido vibrante em renda filé na cor vermelha. Peça statement que chama atenção e expressa personalidade forte.",
    price: 250.0,
    originalPrice: 290.0,
    image: "/images/vestidos/vermelho-frente.jpg",
    images: [
      "/images/vestidos/vermelho-frente.jpg",
      "/images/vestidos/vermelho-costas.jpg",
    ],
    category: "Vestidos",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },

  // SAIAS
  {
    id: "20",
    name: "Saia Bege Clássica",
    description:
      "Saia elegante em renda filé na cor bege. Tom neutro e versátil, perfeita para diversas ocasiões.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/bege.jpg",
    category: "Saias",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "21",
    name: "Saia Branca Delicada",
    description:
      "Saia clássica em renda filé branca. Peça atemporal e sofisticada, ideal para ocasiões especiais.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/branco.jpg",
    category: "Saias",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "22",
    name: "Saia Colorida Laranja",
    description:
      "Saia vibrante em renda filé com detalhes coloridos em laranja. Peça única que adiciona energia ao look.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/colorida-laranja.jpg",
    category: "Saias",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "23",
    name: "Saia Colorida Preta",
    description:
      "Saia moderna em renda filé com detalhes coloridos em preto. Design contemporâneo e elegante.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/colorida-preta.jpg",
    category: "Saias",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "24",
    name: "Saia Colorida Rosa Bebê",
    description:
      "Saia delicada em renda filé com detalhes em rosa bebê. Tom suave e feminino, perfeito para looks românticos.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/colorida-rosa-bebe.jpg",
    category: "Saias",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "25",
    name: "Saia Colorida Rosa Pink",
    description:
      "Saia vibrante em renda filé com detalhes em rosa pink. Cor marcante que expressa personalidade forte.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/colorida-rosa-pink.jpg",
    category: "Saias",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "26",
    name: "Saia Colorida Verde",
    description:
      "Saia natural em renda filé com detalhes em verde. Inspirada na natureza, transmite frescor e vitalidade.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/colorida-verde.jpg",
    category: "Saias",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "27",
    name: "Saia Laranja Vibrante",
    description:
      "Saia energética em renda filé na cor laranja. Tom quente e alegre, perfeita para destacar sua personalidade.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/laranja.jpg",
    category: "Saias",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "28",
    name: "Saia Rosa Bebê",
    description:
      "Saia romântica em renda filé na cor rosa bebê. Tom delicado e suave, ideal para ocasiões especiais.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/rosa-bebe.jpg",
    category: "Saias",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "29",
    name: "Saia Rosa Pink",
    description:
      "Saia marcante em renda filé na cor rosa pink. Tom vibrante que chama atenção e expressa confiança.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/rosa-pink.jpg",
    category: "Saias",
    isNew: false,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
  {
    id: "30",
    name: "Saia Preta Elegante",
    description:
      "Saia clássica em renda filé preta. Peça atemporal e sofisticada, perfeita para eventos formais e ocasiões especiais.",
    price: 180.0,
    originalPrice: 220.0,
    image: "/images/saias/preta.jpg",
    category: "Saias",
    isNew: true,
    inStock: true,
    dimensions: "Tamanho único - veste do P ao G",
    material: "Fio de algodão",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    comment:
      "Os vestidos de renda filé são lindíssimos! A qualidade é excepcional e o caimento perfeito. Recomendo muito!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ",
    comment:
      "Comprei um conjunto de saia e blusa em renda filé e ficou perfeito! O trabalho artesanal é impecável e muito elegante.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carla Oliveira",
    location: "Belo Horizonte, MG",
    comment:
      "Atendimento excelente! Tenho vestidos e saias de renda filé e sempre fico satisfeita com a qualidade única.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fernanda Santos",
    location: "Fortaleza, CE",
    comment:
      "Usei meu vestido de renda filé na praia e recebi muitos elogios! Leve, fresco e elegante, perfeito para o verão.",
    rating: 5,
  },
  {
    id: 5,
    name: "Juliana Almeida",
    location: "Salvador, BA",
    comment:
      "Minha saia de renda filé é perfeita para usar sobre o biquíni! Estilosa e confortável para os dias de praia.",
    rating: 5,
  },
  {
    id: 6,
    name: "Patrícia Lima",
    location: "Natal, RN",
    comment:
      "Adoro usar meus conjuntos de renda filé como saída de praia. São únicos e sempre chamam atenção no resort!",
    rating: 5,
  },
  {
    id: 7,
    name: "Camila Ferreira",
    location: "Florianópolis, SC",
    comment:
      "O vestido branco de renda filé é minha peça favorita para o verão! Uso na praia, na piscina e até para jantar.",
    rating: 5,
  },
  {
    id: 8,
    name: "Renata Souza",
    location: "Búzios, RJ",
    comment:
      "Trabalho com moda praia e sempre indico os vestidos e saias de renda filé. Minhas clientes adoram a qualidade e o estilo!",
    rating: 5,
  },
  {
    id: 9,
    name: "Isabela Rodrigues",
    location: "Maceió, AL",
    comment:
      "Meu conjunto de renda filé é perfeito para casamentos na praia! Recebo elogios onde quer que eu vá.",
    rating: 5,
  },
];
