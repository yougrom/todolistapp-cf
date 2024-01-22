'use strict';

function newItem() {

  // jQuery
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.text(inputValue);

  if (inputValue === '') {
      alert("You must write something!");
  } else {
      $('#list').append(li);
  }

  function crossOut() {
      li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.text("X");
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  function deleteListItem() {
      li.addClass("delete");
  }

  $('#list').sortable();
}
