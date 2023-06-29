
function showMonth() {
  var firstMonth = document.getElementById("first"); // там где нужно вывести название месяца, создать span с id first и span с id second
  var secondMonth = document.getElementById("second");
  d = new Date();
  p = new Date(d.getTime() + 0 * 86400000);
  p2 = new Date(d.getTime() + 31 * 86400000);
  monthA = 'sausio, vasario, kovo, balandžio, gegužės, birželio, liepos, rugpjūčio, rugsėjo, spalio, lapkričio, gruodžio mėn'.split(',');
  firstMonth.innerHTML = monthA[p.getMonth()];
  secondMonth.innerHTML = monthA[p2.getMonth()];
}

document.addEventListener('DOMContentLoaded', showMonth);