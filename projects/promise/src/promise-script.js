function applyForVisa() {
    return new Promise(function (resolve) {
        console.log('Сбор документов... 2 секунды');
        setTimeout(function () {
            /* Сбор займёт 2 секунды, симулируем задержку при помощи setTimeout */
            let application = {},
                documents   = {};

            (Math.random() > .5) ? (documents.status = 'full') : (documents.status = 'not full');

            console.log('Документы:', documents);

            application.documents = documents;

            resolve(application);
        }, 2000);
    });
}

function getVisa(application) {
    console.log('Обработка визы... мгновенно :)');
    return new Promise(function (resolve, reject) {
        let visa = {};

        if (application.documents.status === 'full') {
            (Math.random() < .5) ? (visa.status = 'resolved') : (visa.status = 'rejected');

            console.log('Виза:', visa);

            application.visa = visa;

            if (visa.status === 'resolved') {
                resolve(application);
            } else {
                reject('С документами всё в порядке, но мордой не вышел');
            }
        } else {
            reject('Не полный комплект документов!');
        }
    });
}

function bookHotel(application) {
    console.log('Бронирование отеля... Ждём 4 секунды');
    return new Promise(function (resolve, reject) {
        /* Бронирование займёт 4 секунды, симулируем задержку при помощи setTimeout */
        setTimeout(function () {
            let book = {};

            (Math.random() > .5) ? (book.status = 'booked') : (book.status = 'not booked');

            console.log('Отель:', book);

            application.book = book;

            if (book.status === 'booked') {
                resolve(application);
            } else {
                reject('Нет мест!');
            }
        }, 4000);
    });
}

function buyTickets(application) {
    console.log('Покупаем билеты... мгновенно :)');
    return new Promise(function (resolve, reject) {
        let tickets = {};

        (Math.random() < .5) ? (tickets.status = 'bought') : (tickets.status = 'not bought');

        console.log('Билеты:', tickets);

        application.tickets = tickets;

        if (tickets.status === 'bought') {
            resolve(application);
        } else {
            reject('Все билеты распроданы!');
        }
    });
}

function errorHandler(error) {
    console.error('Ошибка:', error);
}

applyForVisa()
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .then(application => {
        console.log('Обработка заявления завершена!');
        console.log(application);
    })
    .catch(errorHandler);