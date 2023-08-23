import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import itemsArray from "../data/items.json";
import { itemsArray } from "../data/items";
import { ShoppingCartProps } from "../types/shoppingCartPage";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItems";

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas
            show={isOpen}
            onHide={closeCart}
            placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        <span className="m-2">Total</span>
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = itemsArray.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}