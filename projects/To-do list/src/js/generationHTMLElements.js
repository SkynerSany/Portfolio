export default class GenerationHTMLElements {
  generationElem(tag, attr) {
    const elem = document.createElement(tag);
    Object.keys(attr).forEach((key) => {
      if (key === 'textContent') {
        elem.textContent = attr[key];
      } else if (key !== 'parentClass') {
        elem.setAttribute(key, attr[key]);
      }
    });
    return elem;
  }

  addChild(parent, arr) {
    const result = arr;
    arr.forEach((item, i) => {
      if (item.classList.contains(parent)) {
        result[i].appendChild(arr[arr.length - 1]);
      }
    });
    return result;
  }
}
