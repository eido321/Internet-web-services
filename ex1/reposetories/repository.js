const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data.json');


let frForms = require(dataPath).frForms;

const saveDataToFile = () => {
    const dataToWrite = { frForms };
    fs.writeFileSync(dataPath, JSON.stringify(dataToWrite, null, 2));
};

const getFrForms = () => {
    return frForms;
};

const getFrForm = (id) => {
    return frForms.find((frForm) => frForm.id === id);
};

const postFrForm = (frForm) => {
    frForm.id = frForms.length + 1;
    frForms.push(frForm);
    saveDataToFile();
    return frForm;
};

const putFrForm = (id, updateFrForm) => {
    const index = frForms.findIndex((frForm) => frForm.id === id);
    if (index !== -1) {
        frForms[index] = { ...frForms[index], ...updateFrForm };
        saveDataToFile();
        return frForms[index];
    }
};

const deleteFrForm = (id) => {
    const index = frForms.findIndex((frForm) => frForm.id === id);
    if (index !== -1) {
        const deletedItem = frForms.splice(index, 1)[0];
        saveDataToFile();
        return deletedItem;
    }
};

module.exports = { getFrForms, getFrForm, postFrForm, putFrForm, deleteFrForm };
