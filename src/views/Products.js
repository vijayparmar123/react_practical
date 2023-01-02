import {
  Grid,
  TextField,
  Box,
  styled,
  InputAdornment,
  Button,
  Paper,
} from "@mui/material";
import BackgroundImage from "../assets/images/product/background.svg";
import ShopImage from "../assets/images/shops/shop.svg";
import AddressIcon from "../assets/images/shops/address.svg";
import StarIcon from "../assets/images/product/whiteStar.svg";

import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from "../redux/actions/CartActions";

import { useLocation } from "react-router-dom";

import { alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import { useState } from "react";

const gridContainer = {
  height: "100%",
};

const ContentBox = styled(Box)(() => ({
  display: "-moz-box",
  display: "-webkit-flex",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
  // padding: '0 23%',
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  fontSize: "16px",
  fontWeight: "400",
  color: "#070606",
  marginLeft: 0,
  borderRadius: "30px",
  background: "#FFFFFF",
  boxShadow: "0px 5px 10px rgba(7, 6, 6, 0.06)",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const InputWithButton = styled("div")(({ theme }) => ({
  marginTop: "25px",
}));

const Input = styled("input")(({ theme }) => ({
  height: "30px",
  border: 0,
  borderRadius: "20px 0 0 20px",
}));

const SearchButton = styled("button")(({ theme }) => ({
  marginLeft: "-5px",
  height: "32px",
  backgroundColor: "#43B028",
  border: 0,
  borderRadius: "0 20px 20px 0",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px 0",
  color: theme.palette.text.secondary,
}));

const Product = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px 0",
  color: theme.palette.text.secondary,
}));

const ProductName = styled("div")(({ theme }) => ({
  width: "100%",
  color: "#070606",
  fontSize: "20px",
  fontWeight: "600",
}));

const Price = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "5px",
  color: "#070606",
  fontSize: "16px",
  fontWeight: "400",
}));

const Rating = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "5px",
  color: "rgba(7, 6, 6, 0.7);",
  fontSize: "16px",
  fontWeight: "400",
}));

const StarImages = () => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <img
            src={StarIcon}
            height="15px"
            width="15px"
            alt="star"
            key={index}
          />
        );
      })}
    </div>
  );
};

function Products() {
  const location = useLocation();
  const paramShopId = location.state.shopId;
  const dispatch = useDispatch();

  const shops = useSelector((state) => state.shops);
  const cart = useSelector((state) => state.cart);
  // console.log("cart");
  // console.log(cart);

  const selectedShop = shops.shops.find((shop) => {
    return shop.id === paramShopId;
  });

  // console.log(selectedShop.products);

  const ProductList = selectedShop.products.map((product) => (
    <Grid item xs={12} sm={3} key={product.id}>
      <Product>
        <img src={ShopImage} alt="send" />
        <ProductName>{product.name}</ProductName>
        {/* <Price>
          <img src={AddressIcon} height="15px" width="15px" alt="address" />
          Castle Hill, NSW AU 2154
        </Price> */}
        <Price>
          <Grid container>
            <Grid item sm={6} xs={6}>
             {'$'}{product.price}
            </Grid>
            <Grid item sm={6} xs={6}>
            {product.perkg}
            </Grid>
          </Grid>
        </Price>

        <button
          type="button"
          style={{
            padding: "5px",
            marginTop: "5px",
            width: "200px",
            backgroundColor: "#43B028",
            border: 0,
            borderRadius: "30px",
          }}
          onClick={()=>dispatch(AddCart(product))}
        >
          Add to cart
        </button>
      </Product>
    </Grid>
  ));

  return (
    <Grid container sx={{ ...gridContainer }}>
      <Grid
        item
        sm={12}
        xs={12}
        sx={{
          height: "50vh",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <ContentBox>
          <Box sx={{ fontSize: "40px", color: "#FFFFFF", fontWeight: "600" }}>
            {selectedShop.name}
          </Box>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#FFFFFF",
              marginLeft: "80px",
            }}
          >
            <Grid item sm={1} xs={1}>
              <StarImages />
            </Grid>
            <Grid item sm={1} xs={1}>
              {selectedShop.review}
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#FFFFFF",
              marginLeft: "80px",
            }}
          >
            <Grid item sm={1} xs={1}>
              <Button variant="outlined">More Info</Button>
            </Grid>
            <Grid item sm={2} xs={2}>
              <Button variant="outlined">Give a review</Button>
            </Grid>
          </Grid>
          <InputWithButton>
            <Input placeholder="i am shopping for..." />
            <SearchButton type="button">Search</SearchButton>
          </InputWithButton>
        </ContentBox>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        {ProductList}
      </Grid>
    </Grid>
  );
}

export default Products;
