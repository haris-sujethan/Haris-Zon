export const initialState = {
    basket: [],
    user: null
    
}

//selector

export const getBasketTotal = (basket) =>
 basket?.reduce((amount, item) => item.price + amount, 0); //itterates through the basket, and tallys the total

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

            case "EMPTY_BASKET":
                return {
                    ...state,
                    basket: []
    
                }

            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                )
                let newBasket = [...state.basket]; 

                if (index>=0){ //removing items in the basket has to be done in a certain way beacuse the same product can be in the cart multiple times, and they may have the same id, and when a user gose to remove one, it removes all, which we want to avoid
                    newBasket.splice(index, 1); 
                } else {
                    console.warn(
                        `Cant remove product(id: ${action.id}) not in cart!`
                    )
                }

                return {...state, basket: newBasket}

                case "SET_USER":
                    return{
                        ...state,
                        user: action.user
                    }

            default:
                return state;
    }
}

export default reducer