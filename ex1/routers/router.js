const { createFrForm, getAllFrForms, getFrFormById, updateFrForm, deleteFrFormById } = require('../controllers/controller');
const { newRequest } = require('../middleware/Logger');
const fs = require('fs');
const path = require('path');
const FrFormLogger = require("../middleware/Logger");

const logger = new FrFormLogger();

const router = (req, res) => {
    const { method, url } = req;
    if (method === 'GET' && url === '/') {
        const indexPath = path.join(__dirname, '../index.html');
        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
            logger.newRequest(req);
        });
    } else if (method === 'GET' && url.startsWith('/scripts/script.js')) {
        const scriptPath = path.join(__dirname, '../scripts/script.js');
        fs.readFile(scriptPath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/javascript');
                res.end(data);
            }
        });
        logger.newRequest(req);
    } else if (method === 'GET' && url.startsWith('/styles/style.css')) {
        const stylePath = path.join(__dirname, '../styles/style.css');
        fs.readFile(stylePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/css');
                res.end(data);
            }
        });
        logger.newRequest(req);
    } else if (method === 'GET' && url === '/FamilyReunificationForms') {
        getAllFrForms(req, res);
        logger.newRequest(req);
    } else if (method === 'GET' && url.startsWith('/FamilyReunificationForm/')) {
        getFrFormById(req, res);
        logger.newRequest(req);
    } else if (method === 'POST' && url === '/FamilyReunificationForm') {
        createFrForm(req, res);
        logger.newRequest(req);
    } else if (method === 'PUT' && url.startsWith('/FamilyReunificationForm/')) {
        updateFrForm(req, res);
        logger.newRequest(req);
    } else if (method === 'DELETE' && url.startsWith('/FamilyReunificationForm/')) {
        deleteFrFormById(req, res);
        logger.newRequest(req);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
};

module.exports = { router };
