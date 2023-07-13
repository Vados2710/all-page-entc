 $(document).ready( 
        function() { 
            $(".eeee").click( function() { 
                $(".eeee").addClass("actsss"); // добавляем в нажатую ссылку класс act  
                $(".fadepopup").addClass("actsss"); // добавляем в нажатую ссылку класс act  
                $(".fadepopup").removeClass("xxxc"); // добавляем в нажатую ссылку класс act 
                $(".eeee").removeClass("xxxc"); // добавляем в нажатую ссылку класс act 
                $(".hikj").removeClass("actss"); // добавляем в нажатую ссылку класс act
                $("body").removeClass("modal-show"); // добавляем в нажатую ссылку класс act
                } 
            );  
        } 
    ); 
	
	
	

function rus_date() {
    var d = new Date();
    var month = 'январе феврале марте апреле мае июне июле августе сентябре октябре ноябре декабре'.split(' ')[d.getMonth()];
    document.write(month);
};


function rus_date2() {
    var d = new Date();
    var month = 'январь февраль март апрель май июнь июль август сентябрь октябрь ноябрь декабрь'.split(' ')[d.getMonth()];
    document.write(month);
};


