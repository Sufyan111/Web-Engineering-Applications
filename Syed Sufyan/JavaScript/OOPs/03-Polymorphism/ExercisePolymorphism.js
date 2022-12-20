function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter((ele) => ele != item);
    // this.items.splice(this.items.indexOf(item), 1)
  };

  this.render = function () {
    // let options = "";
    // for (let item of this.items) {
    //   options += "<option>" + item + "</option>\n";
    // }
    // return "<select>\n" + options + "</select>";

    return `
<select>${this.items
      .map(
        (item) => `
<option>${item}</option>`
      )
      .join("")}
</selects>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}"/>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("jsadh"),
];

for (let element of elements) {
  console.log(element.render());
}
