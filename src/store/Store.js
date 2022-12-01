import { createStore } from "redux";

const StoreReducer = (
  state = {
    CartVisible: false,
    Items: [
      {
        Name: "First",
        Cost: 399,
        Id: Math.random(),
        src: "https://www.freeiconspng.com/thumbs/bicycle-png/road-mountain-bicycle-png-29.png",
      },
      {
        Name: "Second",
        Cost: 100,
        Id: Math.random(),
        src: "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png",
      },
      {
        Name: "Third",
        Cost: 1100,
        Id: Math.random(),
        src: "https://www.transparentpng.com/thumb/shirt/oYBUkZ-white-t-shirt-clipart-hd.png",
      },
      {
        Name: "Fourth",
        Cost: 200,
        Id: Math.random(),
        src: "https://www.transparentpng.com/thumb/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
      },
      {
        Name: "Fifth",
        Cost: 350,
        Id: Math.random(),
        src: "https://nzxt.com/assets/cms/34299/1659681297-streaming-pc-cta-primary.png?auto=format&fit=max&h=900&w=672",
      },
      {
        Name: "Sixth",
        Cost: 30,
        Id: Math.random(),
        src: "https://www.freepnglogos.com/uploads/laptop-png/laptop-png-images-you-can-download-mashtrelo-15.png",
      },
      {
        Name: "Seventh",
        Cost: 3000,
        Id: Math.random(),
        src: "https://www.freepnglogos.com/uploads/laptop-png/laptop-png-who-are-adventoris-4.png",
      },
    ],
    ItemsInCart: [],
    minCost: 0,
    maxCost: 0,
    curFromVal: 0,
    curTillVal: 0,
    FilteredItemList: [],
    AuthData: [
      {
        Name: "Sasha",
        Surname: "Lisovyi",
        Login: "yesyales04@gmail.com",
        Password: "H29lgt471zXm03",
        ID: Math.random(),
        PicSrc:
          "https://i.pinimg.com/736x/c6/25/90/c62590c1756680060e7c38011cd704b5.jpg",
      },
    ],
    IsLoged: false,
    RegInProcess: false,
    Pic: null,
  },
  action
) => {
  switch (action.type) {
    case "ChangeCartVisibility": {
      return { CartVisible: !state.CartVisible, ...state };
    }
    case "PushToCartList": {
      return { ...state, ItemsInCart: [...state.ItemsInCart, action.memb] };
    }
    case "DeleteFromCartList": {
      return { ...state, ItemsInCart: [...action.arr] };
    }
    case "GetMinCost": {
      return { ...state, minCost: action.value };
    }
    case "GetMaxCost": {
      return { ...state, maxCost: action.value };
    }
    case "ChangeValFrom": {
      return { ...state, curFromVal: action.value };
    }
    case "ChangeValTill": {
      return { ...state, curTillVal: action.value };
    }
    case "FilterList": {
      return { ...state, FilteredItemList: [...action.arr] };
    }
    case "LogIn": {
      return { ...state, IsLoged: true };
    }
    case "SetPic": {
      return { ...state, Pic: action.value };
    }
    case "RegProcess": {
      return { ...state, RegInProcess: !state.RegInProcess };
    }
    case "PushToAuthData": {
      return { ...state, AuthData: [...state.AuthData, action.memb] };
    }
    default:
      return state;
  }
};
const store = createStore(StoreReducer);

export default store;
