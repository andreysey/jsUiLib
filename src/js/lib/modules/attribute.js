import $ from '../core';

$.prototype.getAttr = function (attr) {
    if (!attr) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        this[i].getAttribute(attr);
    }

    return this;
};

$.prototype.setAttr = function (name, value) {
    if (!name || !value) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.removeAttr = function (attr) {
    if (!attr) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attr);
    }

    return this;
};

$.prototype.toggleAttr = function (attr, value) {
    if (!attr || !value) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attr)) {
            this[i].removeAttribute(attr);
        } else {
            this[i].setAttribute(attr, value);
        }
    }

    return this;
};