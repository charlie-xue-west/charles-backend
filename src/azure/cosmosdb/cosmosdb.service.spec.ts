import { Test, TestingModule } from '@nestjs/testing';
import { CosmosDbService } from './cosmosdb.service';

describe('CosmosdbService', () => {
  let service: CosmosDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CosmosDbService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CosmosDbService>(CosmosDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
