const stateUser = {
  listeners: [],
  __user: null,
  get user() {
    return this.__user;
  },
  set user(newUser) {
    if (!newUser) {
      this.__user = null;
    } else if (this.__user?.email !== newUser.email) {
      this.__user = newUser;
    }
    this.emitChange();
  },
  suscribe(isSuscribe, listener) {
    if (isSuscribe === false) return () => {};
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return this.user;
  },
  emitChange() {
    this.listeners.forEach((listener) => {
      listener();
    });
  },
};

export default stateUser;
