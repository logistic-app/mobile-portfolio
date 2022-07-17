jQuery(function() {
  var availValue = document.getElementById('avail_check').innerHTML;
  if (availValue !== 'On'){
    let button = document.getElementById("cartbtn");
    button.disabled = true;
    button.style.cursor ="not-allowed";
    button.style.backgroundColor = "gray";
  }
});