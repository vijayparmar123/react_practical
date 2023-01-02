import { GET_SHOPS } from "../actions/ShopsActions";

const initialState = {
  shops: [
    {
      id: 1,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "30 reviews",
      image: "shop.svg",
    },
    {
      id: 2,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "56 reviews",
      image: "shop.svg",
    },
    {
      id: 3,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "50 reviews",
      image: "shop.svg",
    },
    {
      id: 4,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "50 reviews",
      image: "shop.svg",
    },
    {
      id: 5,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "50 reviews",
      image: "shop.svg",
    },
    {
      id: 6,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "50 reviews",
      image: "shop.svg",
    },
    {
      id: 7,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "50 reviews",
      image: "shop.svg",
    },
    {
      id: 8,
      name: "Chemist Warehouse",
      address: "Castle Hill, NSW AU 2154",
      review: "50 reviews",
      image: "shop.svg",
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
