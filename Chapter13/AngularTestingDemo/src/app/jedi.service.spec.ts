import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";

import { JediService } from './jedi.service';

describe('testing our service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JediService]
    });
  })

  it('testing getJedis() and expect a list of jedis back', () => {
    // get an instance of a Jedi service and HttpClientTestingController
    const jediService = TestBed.get(JediService);
    const http = TestBed.get(HttpTestingController);

    // define our mock data
    const expected = [{ name: 'Luke' }, { name: 'Darth Vader' }];
    let actual = [];

    // we actively call getJedis() on jediService,
    // we will set that response to our 'actual' variable
    jediService.getJedis().subscribe(data => {
      expect(data).toEqual(expected);
    });

    /*
    when someone calls URL /api/jedis
    we will resolve that asynchronous operation
    with .flush() while also answering with
    'expected' variable as response data
    */
    http.expectOne('/api/jedis').flush(expected);
  });
});
