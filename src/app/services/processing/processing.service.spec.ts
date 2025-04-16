import { TestBed } from '@angular/core/testing';
import { ProcessingService } from './processing.service';

describe('ProcessingService', () => {
  let service: ProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert F to C', () => {
    // expect(service.fromFtoC(70)).toEqual(21.1);
    // expect(service.fromFtoC(-10)).toEqual(-23.3);
    // expect(service.fromFtoC(60)).toEqual(15.6);
    // expect(service.fromFtoC(0)).toEqual(-17.8);

    const fArray = [70, -10, 60, 0]
    const cArray = [21.1, -23.3, 15.6, -17.8]
    for (let i = 0; i < fArray.length; i++) {
      const f = fArray[i];
      const c = cArray[i];
      expect(service.fromFtoC(f)).toEqual(c)
    }
  })

  it('should convert C to K', () => {
    expect(service.fromCtoK(25)).toEqual(298.15);
    expect(service.fromFtoC(33)).toEqual(306.15);
    // expect(service.fromFtoC(60)).toEqual(15.6);
    // expect(service.fromFtoC(0)).toEqual(-17.8);

    // const fArray = [70, -10, 60, 0]
    // const cArray = [21.1, -23.3, 15.6, -17.8]
    // for (let i = 0; i < fArray.length; i++) {
    //   const f = fArray[i];
    //   const c = cArray[i];
    //   expect(service.fromFtoC(f)).toEqual(c)
    // }
  })

  it('should convert hourly obj to tempTime Array', () => {

    const hourlyObj = {
      "time": [
        "2025-01-26T00:00",
        "2025-01-26T01:00",
        "2025-01-26T02:00",
        "2025-01-26T03:00",
        "2025-01-26T04:00",
        "2025-01-26T05:00",
        "2025-01-26T06:00",
        "2025-01-26T07:00",
        "2025-01-26T08:00",
        "2025-01-26T09:00"
      ],
      "temperature_2m": [
        48.3,
        47.3,
        46.9,
        46.4,
        46.5,
        46.7,
        45.6,
        46.1,
        45.1,
        46.0
      ]
    }

    const result = [
      {
        "temp": 9.1,
        "time": "2025-01-26T00:00"
      },
      {
        "temp": 8.5,
        "time": "2025-01-26T01:00"
      },
      {
        "temp": 8.3,
        "time": "2025-01-26T02:00"
      },
      {
        "temp": 8,
        "time": "2025-01-26T03:00"
      },
      {
        "temp": 8.1,
        "time": "2025-01-26T04:00"
      },
      {
        "temp": 8.2,
        "time": "2025-01-26T05:00"
      },
      {
        "temp": 7.6,
        "time": "2025-01-26T06:00"
      },
      {
        "temp": 7.8,
        "time": "2025-01-26T07:00"
      },
      {
        "temp": 7.3,
        "time": "2025-01-26T08:00"
      },
      {
        "temp": 7.8,
        "time": "2025-01-26T09:00"
      }
    ]

    expect(service.getTempArrayFromHourlyData(hourlyObj)).toEqual(result)
  })


});
