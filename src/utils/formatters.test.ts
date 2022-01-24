import { toDateString } from ".";
import { toDecimals } from "./formatters";

describe('formatters', () => {
  describe('toDecimals', () => {
    it('should round numbers up to 2 decimals', () => {
      expect(toDecimals(10.1234)).toBe('10.12')
      expect(toDecimals(10.1256)).toBe('10.13')
    })

    it('should round numbers up to 3 decimals', () => {
      expect(toDecimals(10.1234, 3)).toBe('10.123')
      expect(toDecimals(10.1256, 3)).toBe('10.126')
    })

    it('should round numbers up to 2 decimals, with 2 minimum digits', () => {
      expect(toDecimals(10.2, 2)).toBe('10.20')
    })

    it('should round numbers up to 3 decimals, with 2 minimum digits', () => {
      expect(toDecimals(10.1234, 3, 2)).toBe('10.123')
      expect(toDecimals(10.1, 3, 2)).toBe('10.10')
    })
  })

  describe('toDateString', () => {
    it('should return Jan 12, 2022', () => {
      expect(toDateString(new Date('12/Jan/2022'))).toBe('Jan 12, 2022')
    })
  })
})
