import { Document } from 'mongoose';

export interface UserInterface extends Document{
    readonly userName: String;
    readonly email: String;
    readonly password: String;
    readonly role: Text;
}