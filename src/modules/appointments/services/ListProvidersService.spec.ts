import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCashProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCashProvider: FakeCashProvider;

let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCashProvider = new FakeCashProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCashProvider,
    );
  });

  it('should be able to the providers', async () => {
    const userOne = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });
    const userTwo = await fakeUsersRepository.create({
      name: 'Jhon Tre',
      email: 'jhontre@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Jhon Qua',
      email: 'jhonqua@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([userOne, userTwo]);
  });
});
