import { Test } from '@nestjs/testing';
import { Controller } from './.controller';
import { Service } from './.service';

describe('Controller', () => {
  let Controller: Controller;
  let Service: Service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [Controller],
      providers: [Service],
    }).compile();

    Service = module.get<Service>(Service);
    Controller = module.get<Controller>(Controller);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      jest.spyOn(Service, 'findAll').mockImplementation(() => result);
      
      expect(await Controller.findAll()).toBe(result);
    });
  });
});