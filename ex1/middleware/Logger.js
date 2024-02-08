const fs = require('fs');
const { EventEmitter } = require('events');
const path = require('path');

module.exports = class FrFormLogger extends EventEmitter {
    constructor () {
        super();
        this.initLogger();
    }

    initLogger () {
        this.logger = console;
        this.logFilePath = path.join(__dirname, '/logs.txt');
        const title = '=== Log File ===\n';
        fs.appendFileSync(this.logFilePath, title);
        this.storage = {
            write: data => fs.appendFile(this.logFilePath, data, null, () => console.log('data inserted to log file'))
        };
        this.on('logToFile', this.logToFile);
        return this;
    }

    newRequest (request) {
        const msg = `${this.getLogTimestamp()}-> ${request.method}:${request.url}`;
        this.emit('logToFile', msg);
        this.logger.log(msg);
    }

    log (message = '') {
        const msg = `${this.getLogTimestamp()}-> ${message}`;
        this.emit('logToFile', msg);
        this.logger.log(msg);
    }

    getLogTimestamp() {
        return new Date().toISOString();
    }

    logToFile (data) {
        this.storage.write(data + '\n');
    }
};
