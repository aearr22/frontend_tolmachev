const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Данные для карточек
const cards = {
  card1: {
    title: 'Professional Profile',
    description: 'Описание профессионального профиля',
    image: 'img/professional-profile.png'
  },
  card2: {
    title: 'Best Portfolio',
    description: 'Описание лучшего портфолио',
    image: 'img/best-portfolio.png'
  },
  card3: {
    title: 'Powerful Resume',
    description: 'Описание мощного резюме',
    image: 'img/powerful-resume.png'
  }
};


// Middleware для парсинга JSON и CORS
app.use(express.json());
app.use(cors());

// Маршрут для корня
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

// Маршрут для получения карточек
app.get('/cards.json', (req, res) => {
  res.json(Object.values(cards)); // Возвращаем значения объекта как массив
});


// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});
