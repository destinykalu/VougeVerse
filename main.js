document.querySelectorAll('.slider').forEach(slider=>{
const items = slider.querySelectorAll('.slider_item');
const buttonsHtml = Array.from(items, () => `<span class="slider_button"></span>`);

slider.insertAdjacentHTML("beforeend",`
    <div class="slider_nav">
    ${buttonsHtml.join('')}
    </div>
        
     `);
   
  const buttons= slider.querySelector(".slider_button");
 buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        // Remove all selected classes
        items.forEach(item => item.classList.remove("slider_item--selected"));
        buttons.forEach(btn => btn.classList.remove('slider_button--selected'));

    });
  });
});