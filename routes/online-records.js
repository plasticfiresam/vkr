const express = require('express');
const router = express.Router();
const databaseRepository = require('../db/db_repository');
const checkFields = require('../utils/check-fields');
const qr = require('../utils/quick-response');

router.post('/online-record', function(req, res, next) {
    const requiredFieldNames = ['fullName', 'phone'];
    let emptyFields = checkFields.checkEmptyFields(req.body, requiredFieldNames);

    // проверяем что все требуемые поля формы заполнены
    if (!req.body['phone'] || !req.body['fullName']) {
        res.status(400).json(qr.getJson({
            message: 'Для записи на приём через сайт укажите имя и номер телефона',
            fieldsToFill: emptyFields,
        }));
    }
    // ответом на запрос будет JSON содержаший общий статус успеха и соответствующее сообщение об ошибке
    databaseRepository.addVisitRecord(req.body).then(() => {
        res.json(qr.getJson({
            message: 'Спасибо за запись, вам обязательно перезвонят для уточнения даты приёма',
        }));
    }).catch(() => {
        res.status(400).json(qr.getJson({
            message: 'Произошла ошибка выполнения запроса, повторите попытку позже',
        }));
    });
});

module.exports = router;
