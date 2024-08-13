const renderElm = ({ tagName, attrs, children }) => {
  
  const $el = document.createElement(tagName);

  // Sets Attribute
  for (const [key, value] of Object.entries(attrs)) {
    $el.setAttribute(key, value);
  }

  // Sets Children
  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }
  
  return $el;
};

const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  } 
  return renderElm(vNode);
}

export default render;
