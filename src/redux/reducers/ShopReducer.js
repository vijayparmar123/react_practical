import { GET_SHOPS } from "../actions/ShopsActions";

//Shop images
import coles from "../../assets/images/shops/coles.svg";
import costi from "../../assets/images/shops/costi.svg";
import kmart from "../../assets/images/shops/kmart.svg";
import robin from "../../assets/images/shops/robin.svg";
import chemist from "../../assets/images/shops/shop.svg";
import harris from "../../assets/images/shops/harris.svg";
import familymart from "../../assets/images/shops/familymart.svg";
import supermarket from "../../assets/images/shops/supermarket.svg";

//Product images
import grapes from "../../assets/images/product/grapes.svg";
import lemons from "../../assets/images/product/lemons.svg";
import orange from "../../assets/images/product/orange.svg";
import pineapple from "../../assets/images/product/pineapple.svg";
import zucchiniblack from "../../assets/images/product/zucchiniblack.svg";
import zucchiniorganic from "../../assets/images/product/zucchiniorganic.svg";

const initialState = {
  shops: [
    {
      id: 1,
      name: "Heris Farm Market",
      address: "Castle Hill, NSW AU 2154",
      review: "30 reviews",
      image: harris,
      products:[
        {
          id: 1,
          name: "Lemon",
          price: "2.47",
          perkg: "$10.29/KG",
          image: lemons,
        },
        {
          id: 2,
          name: "Green Seedless Grapes",
          price: "3.49",
          perkg: "$10.99/KG",
          image: grapes,
        },
        {
          id: 3,
          name: "Pineapple",
          price: "4.85",
          perkg: "$48.50/KG",
          image: pineapple,
        },
        {
          id: 4,
          name: "Oranges",
          price: "3.47",
          perkg: "$11.29/KG",
          image: orange,
        },
        {
          id: 5,
          name: "Zuccini Black Organic(Each)",
          price: "2.47",
          perkg: "$10.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 6,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "2.50",
          perkg: "$4.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 2,
      name: "Coles",
      address: "87 Punchs Creek Road, NSW AU 4382",
      review: "56 reviews",
      image: coles,
      products:[
        {
          id: 7,
          name: "Lemon",
          price: "3.47",
          perkg: "$5.29/KG",
          image: lemons,
        },
        {
          id: 8,
          name: "Green Seedless Grapes",
          price: "6.49",
          perkg: "$12.99/KG",
          image: grapes,
        },
        {
          id: 9,
          name: "Pineapple",
          price: "2.85",
          perkg: "$55.50/KG",
          image: pineapple,
        },
        {
          id: 10,
          name: "Oranges",
          price: "5.47",
          perkg: "$15.29/KG",
          image: orange,
        },
        {
          id: 11,
          name: "Zuccini Black Organic(Each)",
          price: "4.47",
          perkg: "$16.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 12,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "8.50",
          perkg: "$25.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 3,
      name: "Costi's Fresh",
      address: "80 Delan Road, NSW AU 4671",
      review: "50 reviews",
      image: costi,
      products:[
        {
          id: 13,
          name: "Lemon",
          price: "5.47",
          perkg: "$8.29/KG",
          image: lemons,
        },
        {
          id: 14,
          name: "Green Seedless Grapes",
          price: "4.49",
          perkg: "$15.99/KG",
          image: grapes,
        },
        {
          id: 15,
          name: "Pineapple",
          price: "9.85",
          perkg: "$56.50/KG",
          image: pineapple,
        },
        {
          id: 16,
          name: "Oranges",
          price: "9.47",
          perkg: "$35.29/KG",
          image: orange,
        },
        {
          id: 17,
          name: "Zuccini Black Organic(Each)",
          price: "8.47",
          perkg: "$36.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 18,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "14.50",
          perkg: "$45.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 4,
      name: "Super Market",
      address: "67 Fitzroy Street, NSW AU 3340",
      review: "10 reviews",
      image: supermarket,
      products:[
        {
          id: 13,
          name: "Lemon",
          price: "5.47",
          perkg: "$8.29/KG",
          image: lemons,
        },
        {
          id: 14,
          name: "Green Seedless Grapes",
          price: "4.49",
          perkg: "$15.99/KG",
          image: grapes,
        },
        {
          id: 15,
          name: "Pineapple",
          price: "9.85",
          perkg: "$56.50/KG",
          image: pineapple,
        },
        {
          id: 16,
          name: "Oranges",
          price: "9.47",
          perkg: "$35.29/KG",
          image: orange,
        },
        {
          id: 17,
          name: "Zuccini Black Organic(Each)",
          price: "8.47",
          perkg: "$36.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 18,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "14.50",
          perkg: "$45.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 5,
      name: "K Mart",
      address: "33 Thone Street, NSW AU 2429",
      review: "28 reviews",
      image: kmart,
      products:[
        {
          id: 13,
          name: "Lemon",
          price: "5.47",
          perkg: "$8.29/KG",
          image: lemons,
        },
        {
          id: 14,
          name: "Green Seedless Grapes",
          price: "4.49",
          perkg: "$15.99/KG",
          image: grapes,
        },
        {
          id: 15,
          name: "Pineapple",
          price: "9.85",
          perkg: "$56.50/KG",
          image: pineapple,
        },
        {
          id: 16,
          name: "Oranges",
          price: "9.47",
          perkg: "$35.29/KG",
          image: orange,
        },
        {
          id: 17,
          name: "Zuccini Black Organic(Each)",
          price: "8.47",
          perkg: "$36.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 18,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "14.50",
          perkg: "$45.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 6,
      name: "Family Mart",
      address: "12 Gaggin Street, NSW AU 2322",
      review: "7 reviews",
      image: familymart,
      products:[
        {
          id: 13,
          name: "Lemon",
          price: "5.47",
          perkg: "$8.29/KG",
          image: lemons,
        },
        {
          id: 14,
          name: "Green Seedless Grapes",
          price: "4.49",
          perkg: "$15.99/KG",
          image: grapes,
        },
        {
          id: 15,
          name: "Pineapple",
          price: "9.85",
          perkg: "$56.50/KG",
          image: pineapple,
        },
        {
          id: 16,
          name: "Oranges",
          price: "9.47",
          perkg: "$35.29/KG",
          image: orange,
        },
        {
          id: 17,
          name: "Zuccini Black Organic(Each)",
          price: "8.47",
          perkg: "$36.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 18,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "14.50",
          perkg: "$45.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 7,
      name: "Robbinsons Market",
      address: "Castle Hill, NSW AU 2154",
      review: "19 reviews",
      image: robin,
      products:[
        {
          id: 13,
          name: "Lemon",
          price: "5.47",
          perkg: "$8.29/KG",
          image: lemons,
        },
        {
          id: 14,
          name: "Green Seedless Grapes",
          price: "4.49",
          perkg: "$15.99/KG",
          image: grapes,
        },
        {
          id: 15,
          name: "Pineapple",
          price: "9.85",
          perkg: "$56.50/KG",
          image: pineapple,
        },
        {
          id: 16,
          name: "Oranges",
          price: "9.47",
          perkg: "$35.29/KG",
          image: orange,
        },
        {
          id: 17,
          name: "Zuccini Black Organic(Each)",
          price: "8.47",
          perkg: "$36.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 18,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "14.50",
          perkg: "$45.99/KG",
          image: zucchiniblack,
        }
      ]
    },
    {
      id: 8,
      name: "Chemist Warehouse",
      address: "94 Church Street, NSW AU 2154",
      review: "61 reviews",
      image: chemist,
      products:[
        {
          id: 13,
          name: "Lemon",
          price: "5.47",
          perkg: "$8.29/KG",
          image: lemons,
        },
        {
          id: 14,
          name: "Green Seedless Grapes",
          price: "4.49",
          perkg: "$15.99/KG",
          image: grapes,
        },
        {
          id: 15,
          name: "Pineapple",
          price: "9.85",
          perkg: "$56.50/KG",
          image: pineapple,
        },
        {
          id: 16,
          name: "Oranges",
          price: "9.47",
          perkg: "$35.29/KG",
          image: orange,
        },
        {
          id: 17,
          name: "Zuccini Black Organic(Each)",
          price: "8.47",
          perkg: "$36.29/KG",
          image: zucchiniorganic,
        },
        {
          id: 18,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "14.50",
          perkg: "$45.99/KG",
          image: zucchiniblack,
        }
      ]
    },
  ],
};

const ShopReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_SHOPS: {
      return {
        ...state,
        shops: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default ShopReducer;
