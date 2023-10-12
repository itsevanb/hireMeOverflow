import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', false);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');

    if (isConnected) {
        return console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'devflow',
    })

    isConnected = true;

    console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error: ', error);
    }
}