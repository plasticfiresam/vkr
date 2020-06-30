const mockPhotos = [
    {
        id: 1,
        path: 'https://image.shutterstock.com/image-photo/swing-seat-600w-121483045.jpg',
    },
    {
        id: 2,
        path: 'https://image.shutterstock.com/image-photo/old-swing-playground-600w-686682829.jpg',
    },
    {
        id: 3,
        path: 'https://image.shutterstock.com/image-photo/seat-childrens-swing-on-chains-600w-273042902.jpg',
    },
    {
        id: 4,
        path: 'https://image.shutterstock.com/image-photo/lonely-swing-park-concept-childhood-600w-82819684.jpg',
    },
    {
        id: 5,
        path: 'https://image.shutterstock.com/image-photo/wooden-swings-hung-by-chains-600w-1080059900.jpg',
    },
    {
        id: 6,
        path: 'https://image.shutterstock.com/image-photo/old-abandoned-swing-on-childrens-600w-1109561990.jpg',
    },
];

const callOperations = {
    addRecallRecord(recordData) {
       return new Promise((resolve) => {
           setTimeout(() => {
               resolve(true);
           }, 1000)
       });
    },
    addVisitRecord(recordData) {
       return new Promise((resolve) => {
           setTimeout(() => {
               resolve(true);
           }, 1000)
       });
    },
    getGalleryPhotos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve(mockPhotos);
            }, 1000)
        });
    },
    getGalleryPhotoById(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve([mockPhotos.find(photo => photo.id === id)]);
            }, 1000)
        });
    },
    deletePhotoById(id) {
        return new Promise((resolve, reject) => {
            let target = mockPhotos.find(photo => photo.id === id);
            if (!target) {
                reject(true);
            } else {
                resolve(true);
            }
        });
    }
};

module.exports = callOperations;
