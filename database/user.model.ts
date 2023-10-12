import { Schema, models, model, Document } from 'mongoose';

// TypeScript interface for User model
export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    picutre: string;
    location?: string;
    portfoliowebsite?: string;
    reputation: number;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;
};

// Mongoose Schema for User model
const UserSchema = new Schema({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String },
    bio: { type: String },
    picture: { type: String, required: true },
    location: { type: String },
    portfoliowebsite: { type: String },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    joinedAt: { type: Date, default: Date.now },
});

// Mongoose Model for User
const User = models.User || model('User', UserSchema);

export default User;