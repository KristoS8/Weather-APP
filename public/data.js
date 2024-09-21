function searchWeather() {}

$("#searchBTN").on("click", function () {
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
    },
  });
});
