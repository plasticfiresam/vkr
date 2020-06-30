const express = require('express');
const router = express.Router();
const databaseRepository = require('../db/db_repository');
const qr = require('../utils/quick-response');

router.get('/', function(req, res) {
    databaseRepository.getGalleryPhotos().then((imagesList) => {
        res.json(qr.getJson({
            photos: imagesList
        }));
    }).catch(() => {
        res.status(404);
    });
});

router.get('/:id', function(req, res) {
    databaseRepository.getGalleryPhotoById(parseInt(req.params.id)).then((imagesList) => {
        res.json(qr.getJson({
            photos: imagesList
        }));
    }).catch(() => {
        res.status(404);
    });
});

router.delete('/:id', function(req, res) {
    const photoId = parseInt(req.params['id']);
    if (!photoId) {
        res.status(400);
    } else {
        databaseRepository.deletePhotoById(photoId).then(() => {
            res.json(qr.getJson({
                message: 'Изображение успешно удалено',
            }));
        }).catch((notFound) => {
            if (notFound) {
                res.status(404).json({
                    message: 'Изображение не найдено'
                });
            } else {
                res.status(400).json(qr.getJson({
                    message: 'Ошибка запроса'
                }));
            }
        });
    }
});

module.exports = router;
