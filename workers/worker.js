
const { Worker } = require('code-executor');

const worker = new Worker('interviewPadNeo', 'redis://redis:6379');

const startWorker = async () => {
    try {
        await worker.build([
            'Python',
        ]);
        worker.start();
    } catch (error) {
        console.log(error);
    }
};
startWorker();