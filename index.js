import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

const router = new Navigo("/");

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let routEntered = params.data.page;
      let formattedRoute = capitalize(routEntered);
      let pieceOfState = state[formattedRoute];
      render(pieceOfState);
    }
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav()}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
}

axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?q=st.louis,us&appid=7ab91a28fa72ea7d19c90469792c4526`
  )
  .then(response => {
    state.Home.weather.city = response.name;
    state.Home.weather.temp = response.main.temp;
    state.Home.weather.description = response.weather.main;
    console.log(response);
  });

let city = ourdata.name;
let temp = ourdata.main.temp;
let description = ourdata.weather[o].description;

console.log(city, temp, description);
