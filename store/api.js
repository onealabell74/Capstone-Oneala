div>
        Todays weather in ${st.city} is ${st.description}, and the temperature is ${st.temp}.
    </div>

axios
  .get(
    http://api.openweathermap.org/data/2.5/weather?q=st. louis,us&appid=7ab91a28fa72ea7d19c90469792c4526
  )
  .then((response) => {
    let ourdata = response.data;
    state.Home.city = ourdata.name;
    state.Home.temp = ourdata.main.temp;
    state.Home.description = ourdata.weather[0].description;
    console.log(state.Home.city);
    console.log(state.Home.temp);
    console.log(state.Home.description);
  });

export default {
  header: "Dialysis 101",
  page: "Home",
  city: "city",
  temp: "temp",
  description: "description",
};
