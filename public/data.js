function searchSong() {
  $.ajax({
    url: "http://api.weatherstack.com/current?",
    type: "get",
    dataType: "json",
    data: {
      access_key: "0235a1e21f0392a9030cb225a02556d9",
      query: $("#input-search").val(),
    },
    success: function (result) {
      console.log(result);
      $("#city").html(result.location.name + ", ");
      $("#country").html(result.location.country);
      $("#localtime").html(result.location.localtime);
      $("#weatherName").html(result.current.weather_descriptions);
      $("#temp").html(result.current.temperature + "°C");
      $("#tempSmall").html(result.current.temperature + "°C");
      $("#feelslike").html(result.current.feelslike + "°C");
      $("#windSpeed").html(result.current.wind_speed + " Km/h");
      $("#windDegree").html(result.current.wind_degree + "°");

      $("#img").attr("src", result.current.weather_icons);
    },
  });
}

$("#searchBTN").on("click", function () {
  searchSong();
});

$("#input-search").keyup(function (e) {
  if (e.key == "Enter") {
    searchSong();
  }
});

function manokwari() {
  $.ajax({
    url: "http://api.weatherstack.com/current?",
    type: "get",
    dataType: "json",
    data: {
      access_key: "0235a1e21f0392a9030cb225a02556d9",
      query: "manokwari",
    },
    success: function (result) {
      console.log(result);
      $("#manokwariCity").html(result.location.name + ", ");
      $("#manokwariCountry").html(result.location.country);
      $("#manokwariLocaltime").html(result.location.localtime);
      $("#manokwariWeatherName").html(result.current.weather_descriptions);
      $("#manokwariTemp").html(result.current.temperature + "°C");
      $("#manokwaritempSmall").html(result.current.temperature + "°C");
      $("#manokwariFeelslike").html(result.current.feelslike + "°C");
      $("#manokwariWindSpeed").html(result.current.wind_speed + " Km/h");
      $("#manokwariWindDegree").html(result.current.wind_degree + "°");

      $("#manokwariImg").attr("src", result.current.weather_icons);
    },
  });
}

function jakarta() {
  $.ajax({
    url: "http://api.weatherstack.com/current?",
    type: "get",
    dataType: "json",
    data: {
      access_key: "0235a1e21f0392a9030cb225a02556d9",
      query: "jakarta",
    },
    success: function (result) {
      console.log(result);
      $("#jakartaCity").html(result.location.name + ", ");
      $("#jakartaCountry").html(result.location.country);
      $("#jakartaLocaltime").html(result.location.localtime);
      $("#jakartaWeatherName").html(result.current.weather_descriptions);
      $("#jakartaTemp").html(result.current.temperature + "°C");
      $("#jakartaTempSmall").html(result.current.temperature + "°C");
      $("#jakartaFeelslike").html(result.current.feelslike + "°C");
      $("#jakartaWindSpeed").html(result.current.wind_speed + " Km/h");
      $("#jakartaWindDegree").html(result.current.wind_degree + "°");

      $("#jakartaImg").attr("src", result.current.weather_icons);
    },
  });
}

// if (true) {
//   manokwari();
//   jakarta();
// }
