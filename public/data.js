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
