const buttonRef = {
  listeners: [],
  addEventListner(cb) {
    this.listeners.push(cb);
  },
  browserMeClick: function () {
    for (let fn of this.listeners) {
      fn();
    }
  },
};
buttonRef.addEventListner(function () {});
