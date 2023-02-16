import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
    res.json({ hello: 'Hello World!'});
});

export { router }
