import { GET_SHOPS } from "../actions/ShopsActions";

const initialState = {
  shops: [
    {
      id: 1,
      name: "Heris Farm Market",
      address: "Castle Hill, NSW AU 2154",
      review: "30 reviews",
      image: "harris.svg",
      products:[
        {
          id: 1,
          name: "Lemon",
          price: "2.47",
          perkg: "$10.29/KG"
        },
        {
          id: 2,
          name: "Green Seedless Grapes",
          price: "3.49",
          perkg: "$10.99/KG"
        },
        {
          id: 3,
          name: "Pineapple",
          price: "4.85",
          perkg: "$48.50/KG"
        },
        {
          id: 4,
          name: "Oranges",
          price: "3.47",
          perkg: "$11.29/KG"
        },
        {
          id: 5,
          name: "Zuccini Black Organic(Each)",
          price: "2.47",
          perkg: "$10.29/KG"
        },
        {
          id: 6,
          name: "Zuccini Black Imperfect Pick Value Rang(Each)",
          price: "2.50",
          perkg: "$4.99/KG"
        }
      ]
    },
    {
      id: 2,
      name: "Coles",
      address: "87 Punchs Creek Road, NSW AU 4382",
      review: "56 reviews",
      image: "coles",
    },
    {
      id: 3,
      name: "Costi's Fresh",
      address: "80 Delan Road, NSW AU 4671",
      review: "50 reviews",
      image: "costi",
    },
    {
      id: 4,
      name: "Super Market",
      address: "67 Fitzroy Street, NSW AU 3340",
      review: "10 reviews",
      image: "supermarket",
    },
    {
      id: 5,
      name: "K Mart",
      address: "33 Thone Street, NSW AU 2429",
      review: "28 reviews",
      image: "kmart",
    },
    {
      id: 6,
      name: "Family Mart",
      address: "12 Gaggin Street, NSW AU 2322",
      review: "7 reviews",
      image: "familymart",
    },
    {
      id: 7,
      name: "Robbinsons Market",
      address: "Castle Hill, NSW AU 2154",
      review: "19 reviews",
      image: "robin",
    },
    {
      id: 8,
      name: "Chemist Warehouse",
      address: "94 Church Street, NSW AU 2154",
      review: "61 reviews",
      image: "shop",
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
