class RandomNumberGenerator {
    static generateRandomNumber() {
      return Math.floor(Math.random() * 99) + 1;
    }
  }
  
  const button = document.querySelector('.generate-btn');
  const result = document.querySelector('.result');
  
  button.addEventListener('click', () => {
    const randomNumber = RandomNumberGenerator.generateRandomNumber();
    result.textContent = `El número generado es: ${randomNumber}`;
  });
  