const checkFields = {
    checkEmptyFields(requestBody, requiredFields) {
        let emptyFields = [];

        requiredFields.forEach(fieldName => {
            if (!requestBody[fieldName]) {
                emptyFields.push(fieldName);
            }
        });
        return emptyFields;
    }
};

module.exports = checkFields;
