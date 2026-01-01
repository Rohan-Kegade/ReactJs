function redorComponent(myElement, root) {
  const element = document.createElement(myElement.type);

  element.innerHTML = myElement.Children;
  
  for (const prop in myElement.props) {
    element.setAttribute(prop, myElement.props[prop]);
  }

  root.appendChild(element);
}

const myElement = {
  type: "p",
  Children: "This is a custom react component",
  props: {
    style: "color:red",
  },
};

const root = document.getElementById("root");

redorComponent(myElement, root);