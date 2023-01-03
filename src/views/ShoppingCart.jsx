import { Box, styled } from "@mui/system";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../assets/images/topbar/cart.svg";
import { Badge, Button, Drawer, IconButton } from "@mui/material";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../redux/actions/CartActions";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "& span": {
    color: "red",
  },
  "& #disable": {
    color: "black",
  },
}));

const MiniCart = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  width: "500px",
}));

const CartBox = styled("div")(() => ({
  padding: "4px",
  paddingLeft: "16px",
  display: "flex",
  alignItems: "center",
  height: "10px",
  "& h5": {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "16px",
    fontWeight: "500",
  },
}));

const ProductBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "8px 8px",
  transition: "background 300ms ease",
  "&:hover": {
    background: "rgba(0,0,0,0.01)",
  },
}));

const IMG = styled("img")(() => ({
  width: 48,
}));

const ProductDetails = styled("div")(() => ({
  marginRight: "8",
  textAlign: "center",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  "& h6": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
    width: 120,
    marginBottom: "4px",
  },
}));

function ShoppingCart({ container }) {
  const [panelOpen, setPanelOpen] = useState(false);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);

  const handleDrawerToggle = () => {
    setPanelOpen(!panelOpen);
  };

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(cartList.Carts).forEach(function (item) {
    TotalCart += cartList.Carts[item].quantity * cartList.Carts[item].price;
    ListCart.push(cartList.Carts[item]);
  });

  return (
    <Fragment>
      <IconButton onClick={handleDrawerToggle}>
        <Badge badgeContent={cartList.numberCart} color="error">
          <img src={CartIcon} alt="send" />
        </Badge>
      </IconButton>
      <Drawer
        container={container}
        variant="temporary"
        anchor={"right"}
        open={panelOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <MiniCart>
          <CartBox>
            <img src={CartIcon} alt="send" />
            <h5>Cart</h5>
          </CartBox>

          <Box flexGrow={1} overflow="auto">
            {ListCart.map((product, key) => (
              <ProductBox key={product.id}>
                <Box mr="4px" display="flex" flexDirection="column">
                  <StyledIconButton
                    size="small"
                    onClick={() => dispatch(IncreaseQuantity(key))}
                  >
                    +
                  </StyledIconButton>
                  <StyledIconButton
                    size="small"
                    onClick={() => dispatch(DecreaseQuantity(key))}
                  >
                    -
                  </StyledIconButton>
                </Box>
                <Box mr={1}>
                  <IMG src={product.image} alt={product.title} />
                </Box>
                <ProductDetails>
                  <h6>{product.title}</h6>
                  <Box sx={{ color: "black" }}>
                    ${product.price} x {product.quantity}
                  </Box>
                </ProductDetails>
                <StyledIconButton
                  size="small"
                  onClick={() => dispatch(DeleteCart(key))}
                >
                  X
                </StyledIconButton>
              </ProductBox>
            ))}
          </Box>

          <Button
            sx={{ width: "100%", borderRadius: 0 }}
            variant="contained"
            color="primary"
          >
            Checkout (${TotalCart})
          </Button>
        </MiniCart>
      </Drawer>
    </Fragment>
  );
}

export default ShoppingCart;
