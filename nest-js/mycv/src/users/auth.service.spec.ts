import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) => {
        const filteredUsers = users.filter(user => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      create: (email: string, password: string) => {
        const user = { 
          id: Math.floor(Math.random() * 999999),
          email,
          password
        } as User;
        users.push(user);
        return Promise.resolve(user);
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async() => {
    const user = await service.signUp('test@test.com', 'test');
    expect(user.password).not.toEqual('asdf');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    await service.signUp('test@test.com', 'test');    
    await expect(service.signUp('test@test.com', 'test')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('throws an error if signIn is called with an unused email', async() => {
    await expect(
      service.signIn('asdflkj@asdlfkj.com', 'passdflkj'),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws an error if an invalid password is provided', async() => {
    await service.signUp('test@test.com', 'test');
    await expect(
      service.signIn('test@test.com', 'password'),
    ).rejects.toThrow(BadRequestException);
  });

  it('returns a user if correct password is provided', async() => {
    await service.signUp('test@test.com', 'test');
    const user = await service.signIn('test@test.com', 'test');
    expect(user).toBeDefined();
  });

});
