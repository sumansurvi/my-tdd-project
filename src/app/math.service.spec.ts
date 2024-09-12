import { TestBed } from "@angular/core/testing";

import { MathService } from "./math.service";

describe("MathService", () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it("should add two numbers correctly", () => {
    // Failing test (there is no addNumbers method yet)
    const result = service.addNumbers(2, 3);
    expect(result).toBe(5);
  });
});
