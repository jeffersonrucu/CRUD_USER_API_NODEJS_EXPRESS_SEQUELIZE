import express from 'express'
import { createHash, verifyHash } from '@helpers/hash'

const router = express.Router();

router.get('/user', (req, res) => {
    let hashPassword

    createHash('jefferson')
        .then((result) => {
            hashPassword = result
            res.json({ password: hashPassword});
        })
        .catch((err) => {
            res.status(500).json({ 
                error: err.message 
            })
        });
});

router.get('/login', (req, res) => {
    verifyHash('password', 'hash')
        .then((result) => {
            res.json({ check: result});
        })
        .catch((err) => {
            res.status(500).json({ 
                error: err.message 
            })
        });
});

export { router }
