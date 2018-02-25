'use strict';

const {error404} = require('./controllers/errors');
const {create, item, list} = require('./controllers/notes');

module.exports = app => {
    app.get('/', list);

    // Можем объединить разные http методы с одинаковым маршрутом
    app
        .route('/notes')
        .get(list)
        .post(create);

    app.get('/notes/:name', item);

    // Если роутер не выбрал подходящий для запроса маршрут – используется этот
    app.all('*', error404);
};
