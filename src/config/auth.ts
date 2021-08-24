export default {
    jwt:{
        secret: process.env.SECRET || '123',
        expiresIn: '1d'
    }
}