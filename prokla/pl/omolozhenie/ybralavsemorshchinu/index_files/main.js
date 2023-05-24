moment.locale("pl");
var CurrentDate = moment().format("dddd, D MMMM YYYY");
var ctaDate = moment().format("DD.MM.YYYY");
var elHeaderDate = document.getElementById("header_data");
var elCtaDate = document.getElementById("cta_date");
elHeaderDate.innerHTML = CurrentDate;
elCtaDate.innerHTML = ctaDate;

var elComments = document.getElementsByClassName("comment-date");
for (var i = 0; i < elComments.length; i++) {
  elComments[i].innerHTML = CurrentDate;
}

$("#site-modal").on("show.bs.modal", function (event) {
  var modalAnchor = $(event.relatedTarget);
  var modalTitle = modalAnchor.data("title");
  var modalLink = modalAnchor.attr("href");

  var modal = $(this);
  modal.find(".modal-title").text(modalTitle);
  modal.find(".modal-body").load(modalLink + " .legal__content");
});
