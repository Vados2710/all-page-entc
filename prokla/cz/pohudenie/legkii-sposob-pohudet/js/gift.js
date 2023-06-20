var $gift__img = document.querySelector('.gift__img')
var $gift = document.querySelector('.gift')
var $form = document.querySelector('.all-form')

$form.classList.add('display__none')
$gift.classList.remove('display__none')

$gift__img.addEventListener('click', function () {
	showElement($form, 'display__none', 300)
	hideElement($gift, 'display__none', 300)
})

function hideElement(element, elClass, delay) {
	element.style.opacity = 0
	setTimeout(function () {
		element.classList.add(elClass)
	}, delay)
}

function showElement(element, elClass, delay) {
	element.classList.remove(elClass)
	setTimeout(function () {
		element.style.opacity = 1
	}, delay)

}