var searchButton = document.querySelector(".open-search-button");
var searchForm = document.querySelector(".hotel-search-form");
var dateArrivalInput = searchForm.querySelector("#date-arrival");

searchButton.addEventListener("click", function (evt) {
    searchForm.classList.toggle("hotel-search-form-show");
    dateArrivalInput.focus();
});