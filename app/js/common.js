$(function() {


	// Active Hidden Formats
	$('.hidden__formats span').click(function() {
		$('.hidden__formats span').removeClass('active'); // Тут все просто!
		$(this).addClass('active');
	});


	// Полный просмотр скрытого содержимого 
	$('.block').on('click', '.description', function(){
		
		var blockBtn = $(this).parent().siblings('.block__btn');//находим кнопку для добавления и удаления доп.класса
		var hBlock = $(this).parent().parent().siblings('.block__hidden'); // скрыть именно тот элемент на котором был блик
    
    $(this).text(hBlock.is(':visible') ? 'Раскрыть' : 'Скрыть'); //Если доп.блок открыт - переименовать кнопку
    
    if(hBlock.is(":visible") == true)	{ // Если блок доп.блок открыт, то закрыть его и снять активную синию рамку
    	hBlock.fadeOut();
    	$('.block').removeClass('active');

    	blockBtn.removeClass('active__btn'); // Редактирование кнопки
    }else {
    	hBlock.fadeIn();
    	$(this).parent().parent().parent().addClass('active'); // Добавить активному блоку синию рамку

    	blockBtn.addClass('active__btn'); // Редактирование кнопки
    }
});




}); //jQuery