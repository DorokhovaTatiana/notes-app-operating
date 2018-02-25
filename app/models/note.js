'use strict';

const storage = [];

// Модели замыкают на себя работу с данными
// и обычно представляют собой «класс»

class Note {
    constructor({name, text}) {
        this.name = name;
        this.text = text;
    }

    save() {
        storage.push(this);
    }

    static find(name) {
        return storage.find(note => note.name === name);
    }

    static findAll() {
        return storage;
    }
}

module.exports = Note;
