let commentsJSON = [
  {
    nick: "Jolanta Baranowska",
    date: "4 dni temu",
    content:
      "Też miałam ten sam problem. Uri - Care naprawdę działa cuda. Polecam z całego serca! ",
    likes: 6,
    hasLiked: false,
    answers: [
      {
        nick: "Anastazja Sroka",
        date: "2 dni temu",
        content:
          "Lekarze mówili, że pozostała mi już tylko operacja. Nie chciałam jednak od razu decydować się na ostateczne rozwiązanie. Szukałam, szukałam i w końcu znalazłam! Uri - Care to prawdziwy pogromca! Nareszcie panuję nad swoim pęcherzem.",
        likes: 7,
        hasLiked: false
      },
      {
        nick: "Klaudia Małecka",
        date: "2 dni temu",
        content:
          "Właśnie zastanawiam się nad zamówieniem tego preparatu. Sądzicie, że warto? ",
        likes: 2,
        hasLiked: false
      }
    ]
  },
  {
    nick: "Adam Przybyłowski",
    date: "4 dni temu",
    content: "Czy ta kuracja działa też na mężczyzn?",
    likes: 23,
    hasLiked: false,
    answers: [
      {
        nick: "Patryk Połczyński",
        date: "2 dni temu",
        content: "Mi pomogło, więc Tobie też powinna!",
        likes: 7,
        hasLiked: false
      }
    ]
  },
  {
    nick: "Lidia Mielczarz",
    date: "3 dni temu",
    content:
      "Ten preparat to rewelacja. Nie dość, że działa już po 1 zastosowaniu, to jeszcze i cena jest przystępna.",
    likes: 0,
    hasLiked: false,
    answers: [
      {
        nick: "Anka Grójecka",
        date: "2 dni temu",
        content: "To naprawdę skuteczna metoda!",
        likes: 7,
        hasLiked: false
      },
      {
        nick: "Anastazja Troska",
        date: "2 dni temu",
        content:
          "Właśnie dzisiaj przyszła do mnie przesyłka. Nie mogę się doczekać aż zacznę to stosować.",
        likes: 3,
        hasLiked: false
      }
    ]
  },
  {
    nick: "Aldona Lisowska",
    date: "3 dni temu",
    content: "Działa przy każdym rodzaju nietrzymania moczu?",
    likes: 3,
    hasLiked: false,
    answers: [
      {
        nick: "Eliza Ząbek",
        date: "2 dni temu",
        content:
          "Uri - Care działa na każdy rodzaj nietrzymania moczu. Mi pomógł mi przy wysiłkowym, a mojej przyjaciółce – przy nietrzymaniu moczu z przepełnienia. Śmiało możesz zamawiać. ",
        likes: 7,
        hasLiked: false
      }
    ]
  },
  {
    nick: "Kamil Walczak",
    date: "3 dni temu",
    content: "Dzięki Uri - Care nareszcie nie popuszczam. Rewelacja! ",
    likes: 3,
    hasLiked: false
  }
  // {
  //   nick: "Paula Iwańczyk",
  //   date: "3 dni temu",
  //   content:
  //     "Czy to pomoże na głuchotę u seniorki? Chcę kupić dla babci. Ktoś, coś?",
  //   likes: 3,
  //   hasLiked: false,
  //   answers: [
  //     {
  //       nick: "Leokadia Gąsiorek",
  //       date: "2 dni temu",
  //       content:
  //         "Pani Paulo ja mam 69 lat i całe życie byłam głuchawa, a te plastry sprawiły że znów słyszę!!!!11!",
  //       likes: 7,
  //       hasLiked: false
  //     }
  //   ]
  // },
  // {
  //   nick: "Mateusz Kędzierawski",
  //   date: "2 dni temu",
  //   content:
  //     "Kiedyś pękł mi bębenek od głośnego wybuchu petardy i tak już zostałem głuchy, aż do czasu stosowania AudioSTYMULATOR. Słyszę tak dobrze, że ledwo znoszę gadulstwo żony ;) Hehe",
  //   likes: 6,
  //   hasLiked: false
  // },
  // {
  //   nick: "Jola Lesiuk",
  //   date: "2 dni temu",
  //   content:
  //     "Wreszcie coś, co działa! Milion razy lepsze niz te wszystkie olejki i świecowanie uszu. Naklejasz i od razu czujesz poprawę!",
  //   likes: 2,
  //   hasLiked: false,
  //   answers: [
  //     {
  //       nick: "Małgorzata Leszczyńska",
  //       date: "2 dni temu",
  //       content:
  //         "Racja! I nie trzeba się też męczyć z aparatem słuchowym – to dopiero ulga! <3",
  //       likes: 7,
  //       hasLiked: false
  //     }
  //   ]
  // },
  //   {
  //     nick: "Marlena Gąsienica-Byrcyn",
  //     date: "1 dzień temu",
  //     content:
  //       "I pomyśleć, że mogłam poprawić swój słuch już wiele lat temu. Szkoda, że tak póxno sie o tym dowiedzialam. Ale i tak nigdy nie jest za późno ",
  //     likes: 8,
  //     hasLiked: false
  //   },
  //   {
  //     nick: "Daniel Kapuściński",
  //     date: "2 dni temu",
  //     content:
  //       "Pracuję na budowie i ciągły hałas wykańcza moje uszy. Zauważyłem, że dużo gorzej słyszę niż jeszcze 5 lat temu. Chyba sobie zamówię te plastry, żeby całkiem nie ogłuchnąć…",
  //     likes: 9,
  //     hasLiked: false
  //   },
  //   {
  //     nick: "Ania Orzech",
  //     date: "1 dzień temu",
  //     content:
  //       "Najlepsza decyzja w moim zyciu. Dziwi mnie tylko, że to takie tanie, w Holandii jest koło 100 zł drożej. Czemu tak? Cena dopasowana do konkretnego rynku?",
  //     likes: 5,
  //     hasLiked: false,
  //     answers: [
  //       {
  //         nick: "Małgorzata Leszczyńska",
  //         date: "2 dni temu",
  //         content:
  //           "Aniu standardowa cena jest znacznie wyższa. Aktualnie jest promocja, dlatego cena jest taka niska.",
  //         likes: 7,
  //         hasLiked: false
  //       }
  //     ]
  //   },
  //   {
  //     nick: "Dorota Mędrzycka",
  //     date: "1 dzień temu",
  //     content:
  //       "Kupiłam dla mamy jak zgubiła swój aparat słuchowy. Stweirdziłyśmy, że po co wydawać tyle pieniędzy na nowy, skoro te plastry są o wiele wiele tańsze. ",
  //     likes: 1,
  //     hasLiked: false,
  //     answers: [
  //       {
  //         nick: "Pamela Sęczkowska",
  //         date: "1 dzień temu",
  //         content:
  //           "I bardzo dobrze, po co przepłacać jak można mieć nawet lepszy efekt dużo taniej. My kobiety to wiemy, jak oszczędzać ;);)",
  //         likes: 7,
  //         hasLiked: false
  //       }
  //     ]
  //   },
  //   {
  //     nick: "Greta Kubiak",
  //     date: "1 dzień temu",
  //     content:
  //       "Sąsiedzi przestali narzekać, że za głośno oglądam telewizję. Fakt, już nie rozkręcam tv na cały regulator bo wszystko słyszę haha ",
  //     likes: 2,
  //     hasLiked: false
  //   },
  //   {
  //     nick: "Grzegorz Bąk",
  //     date: "1 dzień temu",
  //     content: "Genialne te plastry, polecam",
  //     likes: 4,
  //     hasLiked: false
  //   }
];

$(document).ready(function() {
  (mockComments = commentsJSON),
    (months = [
      "styczeń",
      "luty",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec",
      "lipiec",
      "sierpień",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień"
    ]),
    (renderer = $("#cmt-user")),
    (render = $("#cmt-render")),
    (arrayOfUserComments = []),
    (renderedStr = "");
  checkForUserComments();
  renderMockCommetns();
});

function getCurrentDate() {
  let iDO = new Date();
  let dateStr = `${iDO.getDate()} ${
    months[iDO.getMonth()]
  } ${iDO.getFullYear()} o ${iDO.getHours()}:${iDO.getMinutes()}`;
  return dateStr;
}

function checkForUserComments() {
  if (localStorage.getItem("comments") != null) {
    arrayOfUserComments = JSON.parse(localStorage.getItem("comments"));
    renderComments();
  }
}

function composeCommentNode(commentObj) {
  let commentEl = document.createElement("div");
  commentEl.classList.add("comment");
  commentEl.classList.add("mt-3");

  let cmtLeft = document.createElement("div");
  cmtLeft.classList.add("cmt-img");
  cmtLeft.innerHTML = `<img src="assets/img/fb/default.jpg" alt="Default">`;

  let buttonsSpan = document.createElement("div");
  buttonsSpan.classList.add("cmt-buttons");
  buttonsSpan.innerHTML = `<span class="like-btn">Lubię to</span>
            <svg width="18px" height="18px" style="margin-top: -4px;" viewBox="0 0 543 451" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path fill="#30418f" stroke="#30418f" stroke-width="0.09375" opacity="1.00" d="M 289.9 45.9 C 292.5 44.9 295.3 45.0 298.0 44.9 C 313.7 45.1 329.4 45.0 345.0 45.0 C 350.1 44.6 355.08EF981A76" />
                <path fill="#ffffff" stroke="#ffffff" stroke-width="0.09375" opacity="1.00" d="M 294.7 73.5 C 296.3 69.4 298.5 65.5 300.7 61.7 C 312.9 62.2 325.0 61.7 337.2 62.0 C 337.1 63.8 337.0924675A48" />
                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d="M 317.1 96.2 C 323.6 86.6 329.6 76.7 336.4 67.3 C 337.4 74.8 337.1 82.4 337.1 89.9 C 336.2 94.5 335.05F2CBDA38" />
                <path fill="#7e8fbe" stroke="#7e8fbe" stroke-width="0.09375" opacity="1.00" d="M 38.8 214.8 C 72.3 214.6 105.7 214.6 139.2 214.8 C 139.3 225.6 139.7 236.4 139.0 247.2 C 105.7 247.4 72.3 247.4 39.0 247.2 C 38.3 236.4 38.7 225.6 38.8 214.8 Z" />
                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d="M 156.8 251.0 C 157.0 247.8 155.9 243.9 158.8 241.5 C 159.5 248.0 159.4 254.5 159.3 261.0 C 159.3 290878D88AAF" />
                <path fill="#6276ae" stroke="#6276ae" stroke-width="0.09375" opacity="1.00" d="M 39.0 247.2 C 72.3 247.4 105.7 247.4 139.0 247.2 C 138.9 250.2 138.7 253.1 138.7 256.0 C 138.8 307.0E96C69A46" />
            </svg>
            <span class="like-quantity">0</span>
            <span class="date">przed chwilą</span>`;

  let cmtRight = document.createElement("div");
  cmtRight.classList.add("pl-2");

  let signatureStr = document.createElement("p");
  signatureStr.classList.add("commenterName");
  signatureStr.innerHTML = commentObj.signature;

  let dateStr;

  if (commentObj.dateStr != undefined) {
    dateStr = commentObj.dateStr;
  } else {
    dateStr = getCurrentDate();
  }

  let date = document.createElement("p");
  date.classList.add("date");
  date.innerHTML = `${dateStr}<div class="likes">
            <i class="fas fa-thumbs-up like-up like"></i>&nbsp;
            <span id="likes">0</span>&nbsp;&nbsp;&nbsp;
            <i class="fas fa-thumbs-up like-down like"></i>
            &nbsp;<span id="likes-down">0</span></div> `;

  let commentStr = document.createElement("p");
  commentStr.innerHTML = commentObj.comment;

  cmtRight.appendChild(signatureStr);
  cmtRight.appendChild(commentStr);
  cmtRight.appendChild(buttonsSpan);
  commentEl.appendChild(cmtLeft);
  commentEl.appendChild(cmtRight);
  return commentEl;
}

function renderComments() {
  arrayOfUserComments.forEach(element => {
    let composedNode = composeCommentNode(element);
    renderer.prepend(composedNode);
  });
}

function addNewComment(newCmt) {
  let composedNode = composeCommentNode(newCmt);
  renderer.prepend(composedNode);
}

function addListeners() {
  const likesUp = document.querySelectorAll(".like-btn");
  likesUp.forEach(element => {
    element.addEventListener("click", e => {
      //Get id of comment
      let likesSpan = $(e.target).siblings(".like-quantity");
      let comentIdx = likesSpan
        .parent()
        .parent()
        .parent()
        .parent()
        .attr("id");
      if (mockComments[comentIdx].hasLiked == false) {
        likesSpan.html(parseInt(likesSpan.text(), 10) + 1);
        $(e.target).html("Nie lubię");
        mockComments[comentIdx].hasLiked = true;
      } else {
        likesSpan.html(parseInt(likesSpan.text(), 10) - 1);
        $(e.target).html("Lubię to");
        mockComments[comentIdx].hasLiked = false;
      }
    });
  });
}

function renderMockCommetns() {
  let idx = 0;
  mockComments.forEach(element => {
    let answerTwmplate;
    let answerMock = {
      nick: null,
      content: null,
      date: null,
      likes: null,
      hasLiked: false
    };

    let tempStr = `
            <div class="comment cmt-section mt-3" id="${idx}">
                <div class="first-cmt cmt-section__border">
                    
                    <div class="cmtRight pl-2">
                        <div class="cmt-title">
                            <span class="commenterName">${element.nick}</span><span class="date">${element.date}</span>
                        </div>
                        <p>
                            ${element.content}
                        </p>
                        <div class="cmt-buttons">
                            <span class="like-btn">Lubię to</span>
                            <svg width="18px" height="18px" style="margin-top: -4px;" viewBox="0 0 543 451" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#30418f" stroke="#30418f" stroke-width="0.09375" opacity="1.00" d="M 289.9 45.9 C 292.5 44.9 295.3 45.0 298.0 44.9 C 313.7 45.1 329.4 45.0 345.0 45.0 C 350.1 44.6 355.08EF981A76" />
                                <path fill="#ffffff" stroke="#ffffff" stroke-width="0.09375" opacity="1.00" d="M 294.7 73.5 C 296.3 69.4 298.5 65.5 300.7 61.7 C 312.9 62.2 325.0 61.7 337.2 62.0 C 337.1 63.8 337.0924675A48" />
                                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d="M 317.1 96.2 C 323.6 86.6 329.6 76.7 336.4 67.3 C 337.4 74.8 337.1 82.4 337.1 89.9 C 336.2 94.5 335.05F2CBDA38" />
                                <path fill="#7e8fbe" stroke="#7e8fbe" stroke-width="0.09375" opacity="1.00" d="M 38.8 214.8 C 72.3 214.6 105.7 214.6 139.2 214.8 C 139.3 225.6 139.7 236.4 139.0 247.2 C 105.7 247.4 72.3 247.4 39.0 247.2 C 38.3 236.4 38.7 225.6 38.8 214.8 Z" />
                                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d="M 156.8 251.0 C 157.0 247.8 155.9 243.9 158.8 241.5 C 159.5 248.0 159.4 254.5 159.3 261.0 C 159.3 290878D88AAF" />
                                <path fill="#6276ae" stroke="#6276ae" stroke-width="0.09375" opacity="1.00" d="M 39.0 247.2 C 72.3 247.4 105.7 247.4 139.0 247.2 C 138.9 250.2 138.7 253.1 138.7 256.0 C 138.8 307.0E96C69A46" />
                            </svg>
                            <span class="like-quantity">${element.likes}</span>
                            <span class="reply-btn">Odpowiedz</span>
                        </div>
                    </div>
                </div>
        `;

    if (element.hasOwnProperty("answers")) {
      element.answers.forEach((answer, answerIdx) => {
        idx++;
        answerMock = answer;
        answerTwmplate = `
                        <div class="cmt-answers" id="${idx}">
                            <div class="comment answer cmt-section__border">
                              
                                <div class="cmtRight pl-2">
                                    <div class="cmt-title">
                                        <span class="commenterName">${answerMock.nick}</span><span class="date">${answerMock.date}</span>
                                    </div>
                                    <p>
                                        ${answerMock.content}
                                    </p>
                                    <div class="cmt-buttons">
                                        <span class="like-btn">Lubię to</span>
                                        <svg width="18px" height="18px" style="margin-top: -4px;" viewBox="0 0 543 451" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#30418f" stroke="#30418f" stroke-width="0.09375" opacity="1.00" d="M 289.9 45.9 C 292.5 44.9 295.3 45.0 298.0 44.9 C 313.7 45.1 329.4 45.0 345.0 45.0 C 350.1 44.6 355.08EF981A76" />
                                            <path fill="#ffffff" stroke="#ffffff" stroke-width="0.09375" opacity="1.00" d="M 294.7 73.5 C 296.3 69.4 298.5 65.5 300.7 61.7 C 312.9 62.2 325.0 61.7 337.2 62.0 C 337.1 63.8 337.0924675A48" />
                                            <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d="M 317.1 96.2 C 323.6 86.6 329.6 76.7 336.4 67.3 C 337.4 74.8 337.1 82.4 337.1 89.9 C 336.2 94.5 335.05F2CBDA38" />
                                            <path fill="#7e8fbe" stroke="#7e8fbe" stroke-width="0.09375" opacity="1.00" d="M 38.8 214.8 C 72.3 214.6 105.7 214.6 139.2 214.8 C 139.3 225.6 139.7 236.4 139.0 247.2 C 105.7 247.4 72.3 247.4 39.0 247.2 C 38.3 236.4 38.7 225.6 38.8 214.8 Z" />
                                            <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d="M 156.8 251.0 C 157.0 247.8 155.9 243.9 158.8 241.5 C 159.5 248.0 159.4 254.5 159.3 261.0 C 159.3 290878D88AAF" />
                                            <path fill="#6276ae" stroke="#6276ae" stroke-width="0.09375" opacity="1.00" d="M 39.0 247.2 C 72.3 247.4 105.7 247.4 139.0 247.2 C 138.9 250.2 138.7 253.1 138.7 256.0 C 138.8 307.0E96C69A46" />
                                        </svg>
                                        <span class="like-quantity">${answerMock.likes}</span>
                                        <span class="reply-btn">Odpowiedz</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        //If there is no more answers to comment end answers section with additional div tag.
        if (element.answers[answerIdx + 1] == undefined) {
          tempStr = tempStr + answerTwmplate + "</div>";
        } else {
          tempStr = tempStr + answerTwmplate;
        }
      });
    } else {
      tempStr = tempStr + "</div>";
    }
    renderedStr += tempStr;
    idx++;
  });
  render.html(renderedStr);
  addListeners();
}

let that = this;
$("#addCommentBtn").mousedown(function() {
  let signature = $("#signature").val();
  let comment = $("#comment").val();
  if (signature && comment != "") {
    let dateStr = that.getCurrentDate();
    let newCmt = {
      signature: signature,
      comment: comment,
      dateStr: dateStr
    };
    that.arrayOfUserComments.push(newCmt);
    localStorage.setItem("comments", JSON.stringify(that.arrayOfUserComments));
    that.addNewComment(newCmt);
  }
});
