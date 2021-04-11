let saveButton = $(".saveBtn");

function renderDescription() {
  let hourElement = $('.hour');
  $.each(hourElement, function (index, item) {
    let hourText = $(item).text();
    let textarea = $(item).siblings('.description');
    let record = localStorage.getItem(hourText);
    if (record !== null) {
      textarea.text(record);
    }

    var hourCheck = moment().format("hh:00 a");
    if (hourText == hourCheck){
      textarea.css("background","#ff6961");
    } else if (hourText < hourCheck){
      textarea.css("background","#d3d3d3");
    }
    else if (hourText > hourCheck){
      textarea.css("background","#77dd77");
    } 
  });
}

function colorTimeblocks() {

  // if (isBefore) {
  //     // 'past';
  // } else if (isAfter) {
  //     // 'future';
  // } else {
  //     // 'current';
  // }
}

$(document).ready(function(){
  let currentTime = $("#currentTime");
  function updateTime() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentTime.html(now);
  };
  updateTime();
  setInterval(updateTime, 1000);

  //colorTimeblocks();
  renderDescription();
});

saveButton.on("click", function(event){
  let btn = $(event.currentTarget);
  let textareaValue = btn.siblings('.description').val();
  let hourText = btn.siblings('.hour').text();

  if (textareaValue !== '') {
    localStorage.setItem(hourText, textareaValue);
  } else {
    localStorage.removeItem(hourText);
  }
});
