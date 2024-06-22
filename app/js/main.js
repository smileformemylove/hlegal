(() => {
	const burger = document.querySelector('.header__box-burger');
	const close = document.querySelector('.header__nav-close');
	const menu = document.querySelector('.header__nav');

	burger.addEventListener('click', () => {
		menu.classList.add('active')
	});

	close.addEventListener('click', () => {
		menu.classList.remove('active')
	})
})();

(() => {
	const tabItems = document.querySelectorAll('.tabs__links-item')
	const tabBlocks = document.querySelectorAll('.tabs__contents-item')

	tabItems.forEach((tab, index) => {
		tab.addEventListener('click', (event) => {
			tabBlocks.forEach(content => {
				content.classList.remove('active')
			})
			tabItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabItems[index].classList.add('active')
			tabBlocks[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
	autoplay: {
		delay: 3000,
	},
	spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },


});
