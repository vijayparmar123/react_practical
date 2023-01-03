import { Grid, Box, styled, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarIcon from "../assets/images/shops/star.svg";
import AddressIcon from "../assets/images/shops/address.svg";
import BackgroundImage from "../assets/images/search/backgroundImage.svg";

const gridContainer = {
  height: "100%",
};

const ContentBox = styled(Box)(() => ({
  // display: "-moz-box",
  // display: "-webkit-flex",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
  // padding: '0 23%',
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
  // padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px 0",
  color: theme.palette.text.secondary,
}));

const Shops = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
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
        <img src={item.image} alt="shop" />
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
      </Grid>
    </Grid>
  );
}

export default Default;
