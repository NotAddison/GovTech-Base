import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Document
export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;
    
    @Prop()
    age: number;
    
    @Prop()
    message: string;
}

export const UserSchema = SchemaFactory.createForClass(User); // Create schema for mongoose to use to save data to the database