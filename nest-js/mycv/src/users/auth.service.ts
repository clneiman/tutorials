import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

import { UsersService } from './users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}

    async signUp(email: string, password: string) {
        // See if email is in use
        const users = await this.usersService.find(email);
        if (users.length) {
            throw new BadRequestException('This email is already in use');
        }
        // Generate a salt
        const salt = randomBytes(8).toString('hex');
        // Hash the salt and password together
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        // Join the hashed result and the salt together
        const result = salt + '.' + hash.toString('hex');
        // Create a new user and save it
        const user = await this.usersService.create(email, result);
        // return the user
        return user;
    }

    async signIn(email: string, password: string) {
        const [user] = await this.usersService.find(email);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const [salt, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        if (storedHash !== hash.toString('hex')) {
            throw new BadRequestException('Password is incorrect');
        }
        return user;
    }

}
