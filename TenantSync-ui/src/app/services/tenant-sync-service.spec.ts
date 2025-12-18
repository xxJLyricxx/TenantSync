import { TestBed } from '@angular/core/testing';

import { TenantSyncService } from './tenant-sync-service';

describe('TenantSyncService', () => {
  let service: TenantSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
