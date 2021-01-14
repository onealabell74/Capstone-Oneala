import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

const router = new Navigo("/");

router.hooks({
  before: (done, params) => {
    // Because not all routes pass params we have to guard against is being undefined
    const page =
      params && Object.prototype.hasOwnProperty.call(params, "page")
        ? capitalize(params.page)
        : "Home";

    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=st. louis,us&appid=7ab91a28fa72ea7d19c90469792c4526"
      )
      .then(response => {
        const ourdata = response.data;
        state.Home.city = ourdata.name;
        state.Home.temp = Math.floor(
          ((ourdata.main.temp - 273.15) * 9) / 5 + 32
        );
        state.Home.description = ourdata.weather[0].description;
        done();
      });
  }
});

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
