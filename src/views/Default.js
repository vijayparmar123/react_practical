import {
  Grid,
  TextField,
  Box,
  styled,
  InputAdornment,
  Button,
  Paper,
} from "@mui/material";
import BackgroundImage from "../assets/images/search/backgroundImage.svg";
import AddressIcon from "../assets/images/shops/address.svg";
import StarIcon from "../assets/images/shops/star.svg";

import { alpha } from "@mui/material/styles";

import { createSearchParams, useNavigate } from "react-router-dom";

import InputBase from "@mui/material/InputBase";

import { useDispatch, useSelector } from "react-redux";
import { GetShops } from "../redux/actions/ShopsActions";
import { useEffect } from "react";

import chemistImage from "../assets/images/shops/chemist.svg";
import coles from "../assets/images/shops/coles.svg";
import costi from "../assets/images/shops/costi.svg";
import familymart from "../assets/images/shops/familymart.svg";
import harris from "../assets/images/shops/harris.svg";
import kmart from "../assets/images/shops/kmart.svg";
import robin from "../assets/images/shops/robin.svg";
import supermarket from "../assets/images/shops/supermarket.svg";
import shopImage from "../assets/images/shops/shop.svg";

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

const Shops = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px 0",
  color: theme.palette.text.secondary,
}));

const ShopName = styled("div")(({ theme }) => ({
  width: "100%",
  color: "#070606",
  fontSize: "20px",
  fontWeight: "600",
}));

const Address = styled("div")(({ theme }) => ({
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

function Default() {
  const shops = useSelector((state) => state.shops);

  const navigate = useNavigate();

  const ShopList = shops.shops.map((item) => (
    <Grid item xs={12} sm={3} key={item.id}>
      <Shops>
        <img src={shopImage} alt="send" />
        <ShopName>{item.name}</ShopName>
        <Address>
          <img src={AddressIcon} height="15px" width="15px" alt="address" />
          {item.address}
        </Address>
        <Rating>
          <Grid container>
            <Grid item sm={6} xs={6}>
              <StarImages />
            </Grid>
            <Grid item sm={6} xs={6}>
              {item.review}
            </Grid>
          </Grid>
        </Rating>

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
          onClick={() => navigate("/products", { state: { shopId: item.id } })}
        >
          View All Items
        </button>
      </Shops>
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
            Shop from your favourite
          </Box>
          <Box sx={{ fontSize: "48px", color: "#FFFFFF", fontWeight: "700" }}>
            grocery stroes!
          </Box>

          <InputWithButton>
            <Input placeholder="i am shopping for..." />
            <SearchButton type="button">Search</SearchButton>
          </InputWithButton>
        </ContentBox>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "-30px" }}>
        <Grid item xs={2}>
          <Item>All</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Asian</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Beer, Wine & Spirit</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Beverages</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Bread & Bakery</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Dairy & Eggs</Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        {ShopList}
        {/* <Grid item xs={12} sm={3}>
        <Shops>
            <img src={ShopImage} alt="send" />
            <ShopName>Chemist Warehouse</ShopName>
            <Address>
              <img src={AddressIcon} height="15px" width="15px" alt="address" />
              Castle Hill, NSW AU 2154
            </Address>
            <Rating>
              <Grid container>
                <Grid item sm={6} xs={6}><StarImages/></Grid>
                <Grid item sm={6} xs={6}>56 reviews</Grid>
              </Grid>
              
            </Rating>
          </Shops>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Shops>
            <img src={ShopImage} alt="send" />
            <ShopName>Chemist Warehouse</ShopName>
            <Address>
              <img src={AddressIcon} height="15px" width="15px" alt="address" />
              Castle Hill, NSW AU 2154
            </Address>
            <Rating>
              <Grid container>
                <Grid item sm={6} xs={6}><StarImages/></Grid>
                <Grid item sm={6} xs={6}>56 reviews</Grid>
              </Grid>
              
            </Rating>
          </Shops>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Shops>
            <img src={ShopImage} alt="send" />
            <ShopName>Chemist Warehouse</ShopName>
            <Address>
              <img src={AddressIcon} height="15px" width="15px" alt="address" />
              Castle Hill, NSW AU 2154
            </Address>
            <Rating>
              <Grid container>
                <Grid item sm={6} xs={6}><StarImages/></Grid>
                <Grid item sm={6} xs={6}>56 reviews</Grid>
              </Grid>
              
            </Rating>
          </Shops>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Shops>
            <img src={ShopImage} alt="send" />
            <ShopName>Chemist Warehouse</ShopName>
            <Address>
              <img src={AddressIcon} height="15px" width="15px" alt="address" />
              Castle Hill, NSW AU 2154
            </Address>
            <Rating>
              <Grid container>
                <Grid item sm={6} xs={6}><StarImages/></Grid>
                <Grid item sm={6} xs={6}>56 reviews</Grid>
              </Grid>
              
            </Rating>
          </Shops>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Shops>
            <img src={ShopImage} alt="send" />
            <ShopName>Chemist Warehouse</ShopName>
            <Address>
              <img src={AddressIcon} height="15px" width="15px" alt="address" />
              Castle Hill, NSW AU 2154
            </Address>
            <Rating>
              <Grid container>
                <Grid item sm={6} xs={6}><StarImages/></Grid>
                <Grid item sm={6} xs={6}>56 reviews</Grid>
              </Grid>
              
            </Rating>
          </Shops>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default Default;
