export default class GenerationHTMLElements {
  generationElement(tag, attributes) {
    const node = document.createElement(tag);

    Object.keys(attributes).forEach((key) => {
      if (key === 'textContent') {
        node.textContent = attributes[key];
      } else if (key !== 'parentClass') {
        node.setAttribute(key, attributes[key]);
      }
    });

    return node;
  }

  addChild(parent, childsArray) {
    const result = childsArray;

    childsArray.forEach((item, i) => {
      if (item.classList.contains(parent)) {
        result[i].appendChild(childsArray[childsArray.length - 1]);
      }
    });

    return result;
  }
}
