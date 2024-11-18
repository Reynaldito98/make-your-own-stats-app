import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://reynaldoperezpauli6:aIcWvhvD38UhTdBX@cluster0.zwd6m.mongodb.net/baseball-app?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export {connectDB};