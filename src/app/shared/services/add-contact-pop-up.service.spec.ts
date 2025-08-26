import { TestBed } from '@angular/core/testing';

import { AddContactPopUpService } from './add-contact-pop-up.service';

describe('AddContactPopUpService', () => {
  let service: AddContactPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddContactPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
