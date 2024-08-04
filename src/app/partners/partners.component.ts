import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {

}

//partners-row Slider animation
function moveSlider() {
  const slider = document.querySelector('.row-slider') as HTMLElement;
  const images = document.querySelectorAll('.slider-image');

  if (!slider || images.length === 0) {
      console.warn("Елементів для анімації не знайдено.");
      return;
  }

  let index = 0;

  function slide() {
      const currentImage = images[index] as HTMLElement;
      currentImage.style.opacity = '0'; // Плавно зникає

      setTimeout(() => {
          // Після зникнення елемента переміщаємо його в кінець
          slider.appendChild(currentImage);

          // Повертаємо прозорість перед наступною анімацією
          currentImage.style.opacity = '1';
          
          // Переходимо до наступного елемента
          index = (index + 1) % images.length;
      }, 1000); // 1 секунда відповідає тривалості transition

      setTimeout(slide, 4000); // Інтервал 4 секунди між рухами
  }

  slide(); // Початковий запуск анімації
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(moveSlider, 4000); // Початковий інтервал перед запуском першого руху
});