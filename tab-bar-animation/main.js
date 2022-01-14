const button = document.querySelectorAll('.tab-menu_item');
let previousSelectedItem = button[0];


button.forEach(clickedBtn => {
    clickedBtn.addEventListener('click', () => {
    
        previousSelectedItem.classList.remove('tab-menu_active');
        previousSelectedItem = clickedBtn;

        clickedBtn.classList.add('tab-menu_active');   
    });
});






 



 


