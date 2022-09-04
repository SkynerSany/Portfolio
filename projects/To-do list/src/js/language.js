export default class Language {
  constructor() {
    this.en = {
      header__createNewTaskBtn: 'Add new task',
      createNewTask__itemDescription: ['Header', 'Description:', 'Date:', 'Importance:'],
      createNewTask__submitBtn: 'Save',
      tasks__date: 'Today Tasks',
    };
    this.ru = {
      header__createNewTaskBtn: 'Добавить задачу',
      createNewTask__itemDescription: ['Заголовок', 'Описание:', 'Дата:', 'Важность:'],
      createNewTask__submitBtn: 'Сохранить',
      tasks__date: 'Задачи сегодня',
    };
  }

  switchLanguage(lang) {
    const language = this[lang];

    for (const key in language) {
      if (typeof (language[key]) === 'string') {
        if (document.querySelector(`.${key}`)) {
          document.querySelector(`.${key}`).textContent = language[key];
        } else {
          return;
        }
      } else {
        const label = document.querySelectorAll(`.${key}`);

        language[key].forEach((element, i) => {
          label[i].textContent = element;
        });
      }
    }
  }

  clickButtonLanguage() {
    document.querySelector('.header__langList').addEventListener('click', (e) => {
      this.switchLanguage(e.target.dataset.lang);
    });
  }

  showCurrentLanguage() {
    if (!localStorage.language) return;

    document.querySelector('.header__selectedLang').textContent = localStorage.language.toUpperCase();
  }

  onWindowLoad() {
    this.switchLanguage(localStorage.language);
    this.showCurrentLanguage();
    this.clickButtonLanguage();
  }
}
