document.querySelector('.year').innerHTML = new Date().getFullYear()+1

    var date = new Date().getMonth();
    if (date === 0) {
        document.querySelector('.month').innerHTML = 'Januar'
    }
    if (date === 1) {
        document.querySelector('.month').innerHTML = 'Februar'
    }
    if (date === 2) {
        document.querySelector('.month').innerHTML = 'März'
    }
    if (date === 3) {
        document.querySelector('.month').innerHTML = 'April'
    }
    if (date === 4) {
        document.querySelector('.month').innerHTML = 'Kann'
    }
    if (date === 5) {
        document.querySelector('.month').innerHTML = 'Juni'
    }
    if (date === 6) {
        document.querySelector('.month').innerHTML = 'Juli'
    }
    if (date === 7) {
        document.querySelector('.month').innerHTML = 'August'
    }
    if (date === 8) {
        document.querySelector('.month').innerHTML = 'September'
    }
    if (date === 9) {
        document.querySelector('.month').innerHTML = 'Oktober'
    }
    if (date === 10) {
        document.querySelector('.month').innerHTML = 'November'
    }
    if (date === 11) {
        document.querySelector('.month').innerHTML = 'Dezember'
    }

let imtForm = document.querySelector('#calc_imt');
imtForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    let growth = imtForm.querySelector('input[name="growth"]').value;
    let weight = imtForm.querySelector('input[name="weight"]').value;
    let imt = Math.round(weight / (growth * growth) * 10000);
    document.querySelector('.lds-ripple').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.lds-ripple').style.display = 'none';
        if (imt <= 22){
            document.querySelector('#result').innerHTML = '<h3>Ihr BMI ' + imt + '. Im Moment überschreitet Ihr Gewicht nicht die Norm.</h3>'
        }else{
            document.querySelector('#result').innerHTML = '<h3 class="red">Ihr BMI ' + imt + '.  Sie sind übergewichtig. Um Steuern zu vermeiden, empfehlen wir, mit <a href="#boxesHref"><span class="productName"></span></a> abzunehmen</h3>'
        }

    }, 1000);
    imtForm.reset();
}
