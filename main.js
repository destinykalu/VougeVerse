document.querySelectorAll('.slider').forEach(slider=>{
const items = slider.querySelectorAll('.slider_item');
const buttonsHtml = Array.from(items, () => `<span class="slider_button"></span>`);

slider.insertAdjacentHTML("beforeend",`
    <div class="slider_nav">
    ${buttonsHtml.join('')}
    </div>
        
     `);
   
  const buttons= slider.querySelectorAll(".slider_button");
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        // Remove all selected classes
        items.forEach(item => item.classList.remove("slider_item--selected"));
        buttons.forEach(btn => btn.classList.remove('slider_button--selected'));

        // Add selected class to clicked button and corresponding item
        items[i].classList.add("slider_item--selected");
        button.classList.add('slider_button--selected');
    });

  });
});