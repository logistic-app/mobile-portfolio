

const rows = document.querySelectorAll('.cont-container div#block-mobile-content div div.views-row');
for (const row of rows) {
  row.classList.add('col-lg-3');
  row.classList.add('col-sm-6');
  row.classList.add('col-6');

  row.classList.add('pt-2');
  row.classList.add('p-sm-3');
}
const row_contain = document.querySelector('.views-element-container div');
row_contain.classList.add('row');


const btn_values = document.querySelectorAll('.cont-container .views-row .card-title a');
const getbtn_values = document.querySelectorAll('.cont-container .views-row .btn');
for (const ind in btn_values) {
let link = btn_values[ind].getAttribute('href');
getbtn_values[ind].setAttribute('href',link);
}
