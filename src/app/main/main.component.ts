import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
    openModal() {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
      }
}

//Main Cards animation
document.addEventListener("DOMContentLoaded", function() {

  const cards = document.querySelectorAll('.card-custom');
  const observerOptions = {
      threshold: 0.3 // Відсоток появи картки у вікні перегляду (10%)
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // stop watching for card
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  // start watching for every card
  cards.forEach(card => {
      observer.observe(card);
  });
});