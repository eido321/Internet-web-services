const {
    getFrForms,
    getFrForm,
    postFrForm,
    putFrForm,
    deleteFrForm,
} = require('../reposetories/repository');

const createFrForm = (req, res) => {
    const frForm = req.body;
    const response = postFrForm(frForm);
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
};

const getAllFrForms = (req, res) => {
    const response = getFrForms();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
};

const getFrFormById = (req, res) => {
    const parts = req.url.split('/');
    const id = parseInt(parts[2], 10);
    const response = getFrForm(id);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));

};

const updateFrForm = (req, res) => {
    const parts = req.url.split('/');
    const id = parseInt(parts[2], 10);
    const user = req.body;
    const response = putFrForm(id, user);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
};

const deleteFrFormById = (req, res) => {
    const parts = req.url.split('/');
    const id = parseInt(parts[2], 10);
    const response = deleteFrForm(id);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
};

module.exports = {
    createFrForm,
    getAllFrForms,
    getFrFormById,
    updateFrForm,
    deleteFrFormById
};