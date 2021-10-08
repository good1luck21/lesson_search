$(function () {
  $("#search_word").on("keyup", () => {
    $.ajax({
      type: "get",
      url: "/search",
      data: { word: $("#search_word").val() },
      dataType: "json",
    }).done((data) => {
      if (data.length > 0) {
        console.log(data);
        $("#default_table").remove();
        $("#target").append("<table>");
        data.forEach((element) => {
          $("#target").append(`<tr>`);
          $("#target").append(`<td>${element.title}</td>`);
          $("#target").append(`<td>${element.content}</td>`);
          $("#target").append(`</tr>`);
        });
        $("#target").append("</table>");
      } else {
        console.log("ない");
      }
    });
  });
});
