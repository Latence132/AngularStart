import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero} from '../app/hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      new Hero(1, 'Narco'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Bombasto'),
      new Hero(4, 'Celeritas'),
      new Hero(5, 'RubberMan'),
      new Hero(6, 'Dynama'),
      new Hero(7, 'Dr IQ'),
      new Hero(8, 'Magma'),
      new Hero(9, 'Tornado')
    ];
    // myHero = this.heroes[0];
    return {heroes};
  }
}
