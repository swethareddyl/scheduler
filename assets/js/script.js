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

    //Check for the current time, past or future and change the color of the div
    var hourCheck = moment().format("HH:00 a");
    let beginTime = moment(hourText, 'h:mma');
    let endTime = moment(hourCheck, 'h:mma');

    if (beginTime.isSame(endTime)){
      textarea.css("background","#ff6961");
    } else if (beginTime.isBefore(endTime)){
      textarea.css("background","#d3d3d3");
    }
    else if (beginTime.isAfter(endTime)){
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
