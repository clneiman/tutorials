import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

describe('Authentication System (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<User>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = moduleFixture.get('UserRepository');
  });

  afterEach(async() => {
    await repository.query(`DELETE FROM user;`);
    jest.clearAllTimers();
    // Close any connections or cleanup actions
    app.close();
  });

  it('handles a sign up request', () => {
    const payload = { email: 'e2e-test@test.com', password: 'test'};
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send(payload)
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(payload.email);
      });
  });

  it('sign up as a new user and get current logged in user', async() => {
    const payload = { email: 'e2e-test@test.com', password: 'test'};
    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send(payload)
      .expect(201);
    const cookie = res.get('Set-Cookie');
    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);
    expect(body.email).toEqual(payload.email);
  });

});
