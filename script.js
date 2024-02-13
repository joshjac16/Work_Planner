$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var userEntry = $(this).siblings(".description").val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, userEntry);
  });
  var currentHour = dayjs().hour();
  console.log(currentHour);
  for (let i = 9; i < 18; i++) {
    let id = "hour-" + i;
    let saveEntry = localStorage.getItem(id);
    $("#" + id)
      .children(".description")
      .val(saveEntry);
    if (i < currentHour) {
      $("#" + id)
        .children(".description")
        .addClass("past");
    } else if (i == currentHour) {
      $("#" + id)
        .children(".description")
        .addClass("present");
    } else {
      $("#" + id)
        .children(".description")
        .addClass("future");
    }
  }
  setInterval(function () {
    $("#currentDay").text(dayjs().format("MM/DD/YYYY hh:mm:ss"));
  }, 1000);
});
