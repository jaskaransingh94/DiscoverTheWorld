import { RegionsModule } from './regions.module';

describe('RegionsModule', () => {
  let regionsModule: RegionsModule;

  beforeEach(() => {
    regionsModule = new RegionsModule();
  });

  it('should create an instance', () => {
    expect(regionsModule).toBeTruthy();
  });
});
