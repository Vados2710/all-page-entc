let ne = document.currentScript.getAttribute('num-example');
let en = document.currentScript.getAttribute('extra-num');
en = en ? en : 0;

$(function () {
  if (document.getElementById('lib-input-mask')) {
    return; // new input mask exists
  }
  let t = ne.split('-');
  let tl = t.map(item => item.length);
  let p1, p2;
  if (tl[3]) {
    p1 = '^\\' + t[0] + '[\\-]\\d{' + tl[1] + '}[\\-]\\d{' + tl[2] + '}[\\-]\\d{' + tl[3] + ',' + (Number(tl[3]) + Number(en)) + '}$';
    p2 = '(\\d{0,' + (tl[0] - 1) + '})(\\d{0,' + tl[1] + '})(\\d{0,' + tl[2] + '})(\\d{0,' + (Number(tl[3]) + Number(en) + 1) + '})';
  } else {
    p1 = '^\\' + t[0] + '[\\-]\\d{' + tl[1] + '}[\\-]\\d{' + tl[2] + ',' + (Number(tl[2]) + Number(en)) + '}$';
    p2 = '(\\d{0,' + (tl[0] - 1) + '})(\\d{0,' + tl[1] + '})(\\d{0,' + (Number(tl[2]) + Number(en) + 1) + '})';
  }

  $('input[name="name"]')
    .attr('type', 'text')
    .attr('autocomplete', 'name')
    .attr('required', 'required')
    .attr('pattern', '.{2,}')
    .on("input", function () {
      $(this).val($(this).val().replace(/^\s|\d/g, ''));
    });
  $('input[name="phone"]')
    .attr('title', ne)
    .attr('type', 'tel')
    .attr('required', 'required')
    .attr('pattern', p1)
    .on("click", function () {
      if (!$(this).val().length) {
        $(this).val(t[0]);
      }
    })
    .on("input", function () {
      let reg = new RegExp(p2);
      let a = $(this).val().replace(/\D/g, '').match(reg);
      let b = t[0] + (a[2] ? '-' + a[2] : '') + (a[3] ? '-' + a[3] : '') + (a[4] ? '-' + a[4] : '');
      $(this).val(b);
    })
});