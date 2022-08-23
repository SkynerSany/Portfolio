export default class SaveData {
  saveTask(title, description, importance, taskConfirm, date) {
    const data = {
      title,
      description,
      importance,
      taskConfirm,
    };

    if (localStorage.tasks) {
      let obj = JSON.parse(localStorage.tasks);
      if (obj[date]) {
        obj[date].push(data);
      } else {
        obj[date] = [data];
        const sortingObj = Object.keys(obj).sort().reduce((object, key) => {
          object[key] = obj[key];
          return object;
        }, {});
        obj = sortingObj;
      }
      localStorage.tasks = JSON.stringify(obj);
    } else {
      localStorage.tasks = JSON.stringify({ [date]: [data] });
    }
  }

  saveAllTasks() {
    localStorage.tasks = '{}';
    document.querySelectorAll('.tasks__taskContainer').forEach((item) => {
      item.lastChild.childNodes.forEach((element) => {
        const taskValues = [];
        taskValues.push(element.childNodes[1].firstChild.textContent);
        taskValues.push(element.childNodes[1].lastChild.textContent);
        taskValues.push(getComputedStyle(element.firstChild).backgroundColor);
        taskValues.push(element.dataset.confirm);
        if (item.firstChild.firstChild.lastChild.textContent !== 'Today Tasks') {
          taskValues.push(item.firstChild.firstChild.lastChild.textContent);
        } else {
          taskValues.push(new Date().toISOString().slice(0, 10));
        }
        this.saveTask(...taskValues);
      });
    });
  }
}
