export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  material: string;
  price: number;
  image: string;
  sku: string;
  stock: number;
  description: string;
}

// 💎 Materials
export const MATERIALS = ["Gold", "Silver", "Diamond", "Pearl", "Platinum"];

// 🏷️ Categories & Subcategories
export const CATEGORIES = [
  {
    name: "Bracelets",
    subcategories: [
      "Bridal-Wedding Bracelets",
      "Chain Bracelets",
      "Charm Bracelets",
      "Engraved Bracelets",
      "Floral Design Bracelets",
      "Heart Design Bracelets",
      "Infinity Design Bracelets",
      "Layered-Multi Strand Bracelets",
      "Luxury-Premium Bracelets",
      "Minimalist Bracelets",
      "Religious Symbol Bracelets",
      "Traditional Bracelets",
    ],
  },
  {
    name: "Rings",
    subcategories: ["Engagement", "Wedding Bands", "Solitaire", "Halo"],
  },
  {
    name: "Necklaces",
    subcategories: ["Pendant", "Choker", "Chain", "Pearl", "Gold"],
  },
  {
    name: "Earrings",
    subcategories: ["Studs", "Hoops", "Drops", "Jhumkas", "Chandelier"],
  },
];

// 🖼️ IMAGE MAP (public/assets/...)
const IMAGE_MAP: Record<string, Record<string, string[]>> = {
  "Bridal-Wedding Bracelets": {
    Gold: [
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold1.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold2.jpeg",
     "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold3.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold4.jpeg",
       "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold5.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold6.jpeg",
           "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold7.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold8.jpeg",
     "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold9.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold10.jpeg",
       "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold11.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold12.jpeg",
             "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold13.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold14.jpeg",
     "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold15.jpeg",
      "/assets/Bridal-Wedding Bracelets/Gold/bridal-weddingbraceletgold16.jpeg",
  
    ],
    Silver: [
      "/assets/Bridal-Wedding Bracelets/Silver/bridal-weddingbraceletsilver1.jpeg",
      "/assets/Bridal-Wedding Bracelets/Silver/bridal-weddingbraceletsilver2.jpeg",
    "public/assets/Bridal-Wedding Bracelets/Silver/bridal-weddingbraceletsilver3.jpeg",
    ],
    Diamond: [
     "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond1.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond2.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond3.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond4.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond5.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond6.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond7.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond8.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond9.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond10.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond11.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond12.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond13.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond14.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond15.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond16.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond17.jpeg",
  "/assets/Bridal-Wedding Bracelets/Diamond/bridal-weddingbraceletdiamond18.jpeg",
    ],
    Pearl: [
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl1.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl2.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl3.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl4.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl5.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl6.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl7.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl8.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl9.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl10.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl11.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl12.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl13.jpeg",
  "/assets/Bridal-Wedding Bracelets/Pearl/bridal-weddingbraceletpearl14.jpeg",
    ],
  },

  "Chain Bracelets": {
Gold: [
  "/assets/Chain Bracelets/Gold/chainbraceletgold1.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold2.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold3.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold4.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold5.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold6.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold7.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold8.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold9.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold10.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold11.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold12.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold13.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold14.jpeg",
  "/assets/Chain Bracelets/Gold/chainbraceletgold15.jpeg",
],

 Silver: [
  "/assets/Chain Bracelets/Silver/chainbraceletsilver1.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver2.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver3.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver4.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver5.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver6.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver7.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver8.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver9.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver10.jpeg",
  "/assets/Chain Bracelets/Silver/chainbraceletsilver11.jpeg",
],

  Diamond: [
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond1.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond2.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond3.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond4.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond5.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond6.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond7.jpeg",
  "/assets/Chain Bracelets/Diamond/chainbraceletdiamond8.jpeg",
],

Pearl: [
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl1.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl2.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl3.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl4.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl5.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl6.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl7.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl8.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl9.jpeg",
  "/assets/Chain Bracelets/Pearl/chainbraceletpearl10.jpeg",
],

  },


   

"Charm Bracelets": {
   Silver: [
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver8.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver7.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver6.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver5.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver4.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver3.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver2.jpeg",
    "public/assets/Charm Bracelets/Silver/charmbraceletsilver1.jpeg"
  ],
  Pearl: [
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl16.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl15.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl14.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl13.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl12.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl11.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl10.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl9.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl8.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl7.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl6.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl5.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl4.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl3.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl2.jpeg",
    "public/assets/Charm Bracelets/Pearl/charmbraceletpearl1.jpeg"
  ],
  Gold: [
    "public/assets/Charm Bracelets/Gold/charmbraceletgold15.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold14.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold13.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold12.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold11.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold10.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold9.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold8.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold7.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold6.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold5.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold4.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold3.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold2.jpeg",
    "public/assets/Charm Bracelets/Gold/charmbraceletgold1.jpeg"
  ],
  Diamond: [
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond7.jpeg",
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond6.jpeg",
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond5.jpeg",
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond4.jpeg",
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond3.jpeg",
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond2.jpeg",
    "public/assets/Charm Bracelets/Diamond/charmbraceletdiamond1.jpeg"
  ]
},
  "Heart Design Bracelets": {
    Gold: [
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold1.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold2.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold3.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold4.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold5.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold6.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold7.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold8.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold9.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold10.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold11.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold12.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold13.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold14.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold15.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold16.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold17.jpeg",
      "public/assets/Heart Design Bracelets/Gold/heartdesignbraceletgold18.jpeg"
    ],
    Silver: [
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver1.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver2.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver3.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver4.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver5.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver6.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver7.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver8.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver9.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver10.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver11.jpeg",
      "public/assets/Heart Design Bracelets/Silver/heartdesignbraceletsilver12.jpeg"
    ],
    Diamond: [
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond1.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond2.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond3.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond4.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond5.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond6.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond7.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond8.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond9.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond10.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond11.jpeg",
      "public/assets/Heart Design Bracelets/Diamond/heartdesignbraceletdiamond12.jpeg"
    ],
    Pearl: [
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl1.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl2.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl3.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl4.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl5.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl6.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl7.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl8.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl9.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl10.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl11.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl12.jpeg",
      "public/assets/Heart Design Bracelets/Pearl/heartdesignbraceletpearl13.jpeg"
    ]
  },

  "Floral Design Bracelets": {
    Gold: [
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold1.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold2.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold3.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold4.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold5.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold6.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold7.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold8.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold9.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold10.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold11.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold12.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold13.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold14.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold15.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold16.jpeg",
      "public/assets/Floral Design Bracelets/Gold/floraldesignbraceletgold17.jpeg"
    ],
    Silver: [
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver1.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver2.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver3.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver4.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver5.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver6.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver7.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver8.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver9.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver10.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver11.jpeg",
      "public/assets/Floral Design Bracelets/Silver/floraldesignbraceletsilver12.jpeg"
    ],
    Diamond: [
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond1.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond2.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond3.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond4.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond5.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond6.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond7.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond8.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond9.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond10.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond11.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond12.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond13.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond14.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond15.jpeg",
      "public/assets/Floral Design Bracelets/Diamond/floraldesignbraceletdiamond16.jpeg"
    ],
    Pearl: [
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold1.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold2.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold3.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold4.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold5.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold6.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold7.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold8.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold9.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold10.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold11.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold12.jpeg",
      "public/assets/Floral Design Bracelets/Pearl/floraldesignbraceletgold13.jpeg"
    ]
  },

  "Engraved Bracelets": {
    Gold: [
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold1.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold2.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold3.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold4.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold5.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold6.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold7.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold8.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold9.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold10.jpeg",
      "public/assets/Engraved Bracelets/Gold/engravedbraceletgold11.jpeg"
    ],
    Silver: [
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver1.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver2.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver3.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver4.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver5.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver6.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver7.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver8.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver9.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver10.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver11.jpeg",
      "public/assets/Engraved Bracelets/Silver/engravedbraceletsilver12.jpeg"
    ],
    Diamond: [
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond1.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond2.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond3.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond4.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond5.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond6.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond7.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond8.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond9.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond10.jpeg",
      "public/assets/Engraved Bracelets/Diamond/engravedbraceletdiamond11.jpeg"
    ],
    Pearl: [
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl1.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl2.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl3.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl4.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl5.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl6.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl7.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl8.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl9.jpeg",
      "public/assets/Engraved Bracelets/Pearl/engravedbraceletpearl10.jpeg"
    ]
  },

  "Traditional Bracelets": {
    Gold: [
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold1.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold2.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold3.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold4.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold5.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold6.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold7.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold8.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold9.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold10.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold11.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold12.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold13.jpeg",
      "public/assets/Traditional Bracelets/Gold/traditionalbraceletgold14.png"
    ],
    Silver: [
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver1.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver2.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver3.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver4.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver5.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver6.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver7.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver8.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver9.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver10.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver11.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver12.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver13.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver14.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver15.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver16.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver17.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver18.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver19.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver20.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver21.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver22.jpeg",
      "public/assets/Traditional Bracelets/Silver/traditionalbraceletsilver23.jpeg"
    ],
    Diamond: [
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond1.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond2.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond3.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond4.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond5.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond6.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond7.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond8.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond9.jpeg",
      "public/assets/Traditional Bracelets/Diamond/traditionalbraceletdiamond10.jpeg"
    ],
    Pearl: [
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl1.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl2.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl3.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl4.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl5.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl6.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl7.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl8.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl9.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl10.jpeg",
      "public/assets/Traditional Bracelets/Pearl/traditionalbraceletpearl11.jpeg"
    ]
  },


  "Religious Symbol Bracelets": {
    Gold: [
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold1.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold2.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold3.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold4.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold5.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold6.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold7.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold8.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold9.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold10.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold11.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold12.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold13.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold14.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold15.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold16.jpeg",
      "public/assets/Religious Symbol Bracelets/Gold/religious-symbolbraceletgold17.jpeg"
    ],
    Silver: [
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver1.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver2.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver3.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver4.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver5.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver6.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver7.jpeg",
      "public/assets/Religious Symbol Bracelets/Silver/religious-symbolbraceletsilver8.jpeg"
    ],
    Diamond: [
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond1.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond2.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond3.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond4.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond5.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond6.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond7.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond8.jpeg",
      "public/assets/Religious Symbol Bracelets/Diamond/religious-symbolbraceletdiamond9.png"
    ],
    Pearl: [
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl1.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl2.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl3.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl4.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl5.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl6.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl7.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl8.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl9.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl10.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl11.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl12.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl13.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl14.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl15.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl16.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl17.jpeg",
      "public/assets/Religious Symbol Bracelets/Pearl/religious-symbolbraceletpearl18.png"
    ]
  },

 "Minimalist Bracelets": {
    Gold: [
      "/assets/Minimalist Bracelets/Gold/minimalistgold1.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold2.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold3.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold4.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold5.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold6.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold7.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold8.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold9.jpeg",
      "/assets/Minimalist Bracelets/Gold/minimalistgold10.jpeg"
    ],
    Silver: [
      "/assets/Minimalist Bracelets/Silver/minimalistsilver1.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver2.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver3.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver4.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver5.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver6.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver7.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver8.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver9.jpeg",
      "/assets/Minimalist Bracelets/Silver/minimalistsilver10.jpeg"
    ],
    Diamond: [
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond1.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond2.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond3.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond4.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond5.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond6.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond7.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond8.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond9.jpeg",
      "/assets/Minimalist Bracelets/Diamond/minimalistdiamond10.jpeg"
    ],
    Pearl: [
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl1.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl2.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl3.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl4.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl5.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl6.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl7.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl8.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl9.jpeg",
      "/assets/Minimalist Bracelets/Pearl/minimalistpearl10.jpeg"
    ],
  },


};



    // 🪄 Utility: Random Image by subcategory + material
function getRandomImage(subcategory: string, material: string): string {
  const imgs = IMAGE_MAP[subcategory]?.[material];
  if (!imgs || imgs.length === 0) return "/assets/default.jpg";
  return imgs[Math.floor(Math.random() * imgs.length)];
}

// 🧩 Generate Product List
export function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  CATEGORIES.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      // ✅ Available materials from IMAGE_MAP
      const availableMaterials = Object.keys(IMAGE_MAP[sub] || {});

      // ❗ Agar IMAGE_MAP me entry hi nahi hai, skip
      if (availableMaterials.length === 0) return;

      // 🔁 Har material ke liye saari images add karo
      availableMaterials.forEach((material) => {
        const imgs = IMAGE_MAP[sub][material];
        imgs.forEach((img) => {
          products.push({
            id: id.toString(),
            name: `${sub} ${material} ${cat.name} ${id}`,
            category: cat.name,
            subcategory: sub,
            material,
            price: Math.floor(Math.random() * 9000) + 1000,
            image: img,
            sku: `SKU-${id}`,
            stock: Math.floor(Math.random() * 50) + 10,
            description: `A beautiful ${material.toLowerCase()} ${sub.toLowerCase()} ${cat.name.toLowerCase()} crafted with elegance.`,
          });
          id++;
        });
      });
    });
  });

  return products;
}
