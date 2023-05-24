let times = [];

// ILE RAZY NASTĄPIŁO NACIŚNIĘCIE PUDEŁKA
let notimes = 0;
let i;
for (i = 0; i < 9; i++) {
    times[i] = 0;
}

if (notimes == 0) {
    let divsToHide = document.getElementsByClassName("box55");
    for (i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
    }
}

function stopStart(a) {
    let file = '#video' + a;
    const video = document.querySelector(file);

    let file1 = '#video' + a + '-';
    const video1 = document.querySelector(file1);

    if (notimes <= 0) {
        times[a] = 1;
        notimes = 1;
        video.play();

        document.getElementsByClassName('gif-container')[0].style.pointerEvents = "none";

        let modal = document.getElementById("modalAgain");
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        let bg = document.getElementsByClassName("gif-container")[0];
        bg.classList.remove('noblur');
        bg.classList.add('blur');


    } else if (notimes === 1) {
        times[a] = 1;
        notimes = 2;
        video1.play();

        let modal = document.getElementById("modalDiscount");
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        let bg = document.getElementsByClassName("gif-container")[0];
        bg.classList.remove('transitionShow');
        bg.classList.add('transitionHide');


        setTimeout(function () {
            document.getElementById("modalAgain").style.display = 'none';
            document.getElementsByClassName("gif-container")[0].style.display = 'none';
            let progress = document.getElementsByClassName("myProgress")[0];
            progress.style.display = 'block';
            progress.classList.remove('hidden');
            progress.classList.add('visible');
            moveProgress();

        }, 2000);

        setTimeout(function () {
            let progress = document.getElementsByClassName("myProgress")[0];
            progress.classList.remove('visible');
            progress.classList.add('hidden');
            document.getElementById("myProgress").style.display = 'none';
        }, 5000)

        setTimeout(function () {
            document.getElementById("modalDiscount").style.display = 'block';

        }, 4000);

    }
}

function closeModalAgain() {

    var divsToHide = document.getElementsByClassName("box55")
    for (let i = 0; i < divsToHide.length; i++) {
        // if (i != times.indexOf(1)) {
        divsToHide[i].style.display = "block";
        // }
    }

    var divsToHide = document.getElementsByClassName("box0")
    for (let i = 0; i < divsToHide.length; i++) {
        // if (i != times.indexOf(1)) {
        divsToHide[i].style.display = "none";
        // }
    }
    let modal = document.getElementById("modalAgain");
    modal.classList.remove('visible');
    modal.classList.add('hidden');

    let bg = document.getElementsByClassName("gif-container")[0];
    bg.classList.remove('blur');
    bg.classList.add('noblur');

    document.getElementsByClassName('gif-container')[0].style.pointerEvents = "auto";
}

function moveProgress() {
    let i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 22);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}



