module.exports = {
  /** Function return random book from books array
   */
  getRandomBook() {
    // Create books array
    let books = [
      {
        title: "Чистый код",
        description:
          "Общепризнанная книга, главная идея которой — код должен быть «чистым», т. е. простым для чтения, понятным и легко поддающимся изменениям.",
        cover: "clear_code.jpeg",
        file: "clear_code.txt",
        authors: "Роберт Мартин",
      },
      {
        title: "Программист-прагматик",
        description:
          "Уважаемая книга, посвященная лучшим практикам по разработке ПО.",
        cover: "pragmatic.jpeg",
        file: "pragmatic.txt",
        authors: "Эндрю Хант, Дэвид Томас",
      },
      {
        title: "Грокаем алгоритмы",
        description: "Популярное введение в алгоритмы и структуры данных.",
        cover: "algorithm.jpeg",
        file: "algorithm.txt",
        authors: "Адитья Бхаргава",
      },
    ];

    return books[Math.floor(Math.random() * 3)];
  },
};
