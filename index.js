import Navigo from "navigo";
import { capitalize } from "lodash";

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
