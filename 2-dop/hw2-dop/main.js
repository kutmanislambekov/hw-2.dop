function funck1(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const square = document.createElement('div');
        square.className = 'square';
        document.getElementById('container').appendChild(square);
        resolve(); 
      }, delay);
    });
  }

  async function funck2() {
    const numSquares = document.getElementById('numSquares').value;
    if (numSquares < 1 || numSquares > 100) {
      alert('Пожалуйста, выберите число от 1 до 100');
      return;
    }

    
  const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < numSquares; i++) {
      await funck1(100); 
    }
  }