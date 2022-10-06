import axios from "axios";
import {
  VACIAR_USER,
  LOG_LOCAL,
  GET_PRODUCTS_FROM_CARRITODB,
  DELETE_FILTER,
  NOT_FOUND,
  SEND_EMAIL,
  GET_FAVOURITES,
  GET_ONE_ORDER,
  FILTER_ORDER_REJECTED,
  FILTER_ORDER_APROVED,
} from "./action-types.js";
import {
  GET_USER,
  GET_USERS,
  DELETE_ARTWORKS,
  ADD_FILTER_MEDIUM,
  FILTER_BY_MEDIUM,
  ADD_PRICE_TYPE,
  FIND_USER_BY_ID,
  ADD_FILTER_ARTIST,
  FILTER_BY_ARTIST,
  GET_ARTISTS,
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCT_BY_ID,
  CLEAN_PRODUCT_ID,
  SHOW_ALL_PRODUCTS,
  ORDER_BY_PRICE,
  ADD_FILTERS,
  SET_USER,
  GET_HISTORY,
  GET_ALL_ORDERS,
  GET_ORDERS_USER,
  FILTER_ORDER_REJECTED_USER,
  FILTER_ORDER_APROVED_USER,
  GET_ONE_ORDER_USER,
} from "./action-types.js";

import { toast } from "react-toastify";
import swal from "sweetalert";

export const filterOrderAprovedUser = () => {
  return {
    type: FILTER_ORDER_APROVED_USER,
  };
};
export const filterOrderRejectedrUser = () => {
  return {
    type: FILTER_ORDER_REJECTED_USER,
  };
};

export const getOrderUserDetail = (orderId) => {
  return {
    type: GET_ONE_ORDER_USER,
    payload: orderId,
  };
};

export const getOrderByUser = (payload) => {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/payment/orden",
      {
        headers: { payload },
      }
    );
    return dispatch({
      type: GET_ORDERS_USER,
      payload: json.data,
    });
  };
};

export const getAllOrders = () => {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/payment/orden"
    );

    return dispatch({
      type: GET_ALL_ORDERS,
      payload: json.data,
    });
  };
};
export const getPay = async (payload, user, adress) => {
  let asd = await axios.post("https://artket-pf-deploy.herokuapp.com/payment", {
    payload,
    user,
    adress,
  });
  window.location.href = asd.data;
};

export function postArtwork(payload, role) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://artket-pf-deploy.herokuapp.com/artworks",
        {
          payload: payload,
          role: role,
        }
      );
      swal("Nice!", "Artwork created", "success");
    } catch (error) {
      swal("Error", "Complete de data", "error");
    }
  };
}

export function deleteArtwork(id, user) {
  // console.log('user data delete artwork');
  return async function (dispatch) {
    // console.log('user data delete artwork');
    try {
      let json = await axios.put(
        "https://artket-pf-deploy.herokuapp.com/artworks/delete/" + id
      );
      swal("Nice!", "Artwork deleted", "success");
      return dispatch({
        type: DELETE_ARTWORKS,
        payload: json.data,
      });
    } catch (error) {}
  };
}

export function putArtwork(payload, role) {
  return async function (dispatch) {
    try {
      let json = await axios.put(
        "https://artket-pf-deploy.herokuapp.com/artworks/" + payload.id,
        {
          payload: payload,
          role: role,
        }
      );
      swal("Nice", "Artwork modified", "success");
    } catch (error) {
      swal("Error", "", "error");
    }
  };
}

export function getProducts() {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/artworks"
    );

    return dispatch({
      type: GET_PRODUCTS,
      payload: json.data,
    });
  };
}

export const RegisterUser = async (payload) => {
  try {
    let json = await axios.post(
      "https://artket-pf-deploy.herokuapp.com/users",
      payload
    );
    swal({
      title: "Good job!",
      text: "You has been registered",
      icon: "success",
      buttons: ["Cancel", "Log in"],
    }).then((respuesta) => {
      if (respuesta) {
        window.location.href = "/LocalLogin";
      }
    });
  } catch (error) {
    swal("Error", "User allready registered", "error");
  }
};

export const RegisterUserFromAdminPanel = async (payload) => {
  try {
    let json = await axios.post(
      "https://artket-pf-deploy.herokuapp.com/users",
      payload
    );
    swal("Nice", "You have created an user", "success");
  } catch (error) {
    swal("Error", "User allready registered", "error");
  }
};

export const getProductByName = (payload) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "https://artket-pf-deploy.herokuapp.com/artworks?title=" + payload
      );

      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      swal("Error", "Artwork not found", "error");
    }
  };
};

export const getProductById = (id) => {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/artworks/" + id
    );

    return dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: json.data,
    });
  };
};

export const cleanProductId = () => {
  return {
    type: CLEAN_PRODUCT_ID,
  };
};

export const OrderByPrice = (payload) => {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
};

export const showAllProducts = () => {
  return {
    type: SHOW_ALL_PRODUCTS,
  };
};

export const getArtists = () => {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/artists"
    );
    return dispatch({
      type: GET_ARTISTS,
      payload: json.data,
    });
  };
};

export const filterByArtist = (payload) => {
  return {
    type: FILTER_BY_ARTIST,
    payload,
  };
};

export const addFilterArtist = (payload) => {
  return {
    type: ADD_FILTER_ARTIST,
    payload,
  };
};

export const deletefilter = (payload) => {
  return {
    type: DELETE_FILTER,
    payload,
  };
};

export const addPriceType = (payload) => {
  return {
    type: ADD_PRICE_TYPE,
    payload,
  };
};

export const filterByMedium = (payload) => {
  return {
    type: FILTER_BY_MEDIUM,
    payload,
  };
};

export const addFilterMedium = (payload) => {
  return {
    type: ADD_FILTER_MEDIUM,
    payload,
  };
};

export const AddFilters = (payload) => {
  return {
    type: ADD_FILTERS,
    payload,
  };
};

// export const deleteProductFromCarrito = (payload) => {
//   return async function () {
//     let json = await axios.put("/cart/" + payload);
//     return json;
//   };
// };

export const deleteProductFromCarrito = async (payload) => {
  axios.post(
    `https://artket-pf-deploy.herokuapp.com/cart/delete/${payload.artId}`,
    { email: payload.email }
  );
};

export const addProductToCarrito = async (payload) => {
  axios.post(`https://artket-pf-deploy.herokuapp.com/cart/${payload.artId}`, {
    email: payload.email,
  });
};

export const deleteProductFromFavourites = async (payload) => {
  axios.post(
    `https://artket-pf-deploy.herokuapp.com/favourites/delete/${payload.artId}`,
    { email: payload.email }
  );
};

export const addProductToFavourites = async (payload) => {
  axios.post(
    `https://artket-pf-deploy.herokuapp.com/favourites/${payload.artId}`,
    { email: payload.email }
  );
};

export const getFavourites = (payload) => {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/favourites",
      {
        headers: {
          payload: payload,
        },
      }
    );
    return dispatch({
      type: GET_FAVOURITES,
      payload: json.data,
    });
  };
};

export const getUser = (data) => {
  return async function (dispatch) {
    let json = await axios.post(
      `https://artket-pf-deploy.herokuapp.com/users/findorcreate`,
      data
    );
    return dispatch({
      type: GET_USER,
      payload: json.data,
    });
  };
};

export const sendUserInfo = async ({
  name,
  lastname,
  email,
  password,
  dateBorn,
  role,
  headers,
}) => {
  await axios.post("https://artket-pf-deploy.herokuapp.com/users", {
    name,
    lastname,
    email,
    password,
    dateBorn,
    role,
    headers,
  });
};

export async function deleteUser(userId, ban) {
  await axios.put(`https://artket-pf-deploy.herokuapp.com/users/ban/${userId}`, {
    ban,
  });
}

export const getProductsFromCarritoDB = (payload) => {
  return async function (dispatch) {
    let json = await axios.get("https://artket-pf-deploy.herokuapp.com/cart", {
      headers: {
        payload: payload,
      },
    });
    return dispatch({
      type: GET_PRODUCTS_FROM_CARRITODB,
      payload: json.data,
    });
  };
};

export const getBuyHistory = (payload) => {
  return async function (dispatch) {
    let json = await axios.get(
      "https://artket-pf-deploy.herokuapp.com/history",
      {
        headers: {
          payload: payload,
        },
      }
    );
    return dispatch({
      type: GET_HISTORY,
      payload: json.data,
    });
  };
};

export const LogLocal = (payload) => {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        `https://artket-pf-deploy.herokuapp.com/users/findLocalUser`,
        payload
      );
      dispatch({
        type: LOG_LOCAL,
        payload: json.data,
      });
      setTimeout(() => {
        window.location.href = "/MainPage";
      }, 2000);
    } catch (error) {
      swal("Error", "Wrong credentials", "error");
    }
  };
};

export const vaciarUser = () => {
  return {
    type: VACIAR_USER,
  };
};

export const setUser = () => {
  return {
    type: SET_USER,
  };
};

export const updateUser = (user) => {
  return async function () {
    await axios.put(
      `https://artket-pf-deploy.herokuapp.com/users/update`,
      user
    );
  };
};

export const findUserById = (id) => {
  return async function (dispatch) {
    let json = await axios.get(
      `https://artket-pf-deploy.herokuapp.com/users/${id}`
    );
    return dispatch({
      type: FIND_USER_BY_ID,
      payload: json.data,
    });
  };
};

export function sendEmail(a) {
  return async function (dispatch) {
    const email = await axios.post(
      "https://artket-pf-deploy.herokuapp.com/sendemail",
      { email: a }
    );
    return dispatch({
      type: SEND_EMAIL,
      payload: email,
    });
  };
}

export function getUSers(role) {
  return async function (dispatch) {
    let data = await axios.get("https://artket-pf-deploy.herokuapp.com/users", {
      headers: {
        role,
      },
    });
    return dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
}

export async function postArtists(payload, role) {
  try {
    let json = await axios.post(
      "https://artket-pf-deploy.herokuapp.com/artists",
      {
        payload: payload,
        role: role,
      }
    );
    swal("Nice", "Artist created", "success");
  } catch (error) {
    toast.error("Complete the data", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export async function resetPassword(payload) {
  await axios.post(
    "https://artket-pf-deploy.herokuapp.com/users/restorePassword",
    payload
  );
}

export async function changePassword(email) {
  let json = await axios.post(
    "https://artket-pf-deploy.herokuapp.com/users/restorePassword",
    { email }
  );
  console.log(json);

  swal({
    title: "",
    text: `The new password is ${json.data}`,
    icon: "info",
    buttons: "Nice",
  });
}

export const banUser = () => {};

export const madeAdminUser = () => {};

export const postAdress = async (payload, email) => {
  await axios.post("https://artket-pf-deploy.herokuapp.com/adresses", {
    payload,
    email,
  });
};

export const putAdress = async (payload, email) => {
  await axios.put("https://artket-pf-deploy.herokuapp.com/adresses", {
    payload,
    email,
  });
};

export const getAdress = async (email) => {
  const adress = await axios.get(
    "https://artket-pf-deploy.herokuapp.com/adresses",
    { headers: { email } }
  );
  return adress;
};

export const getOneOrder = (orden) => {
  return {
    type: GET_ONE_ORDER,
    payload: orden,
  };
};

export const filterOrderAproved = () => {
  return {
    type: FILTER_ORDER_APROVED,
  };
};

export const filterOrderRejected = () => {
  return {
    type: FILTER_ORDER_REJECTED,
  };
};
