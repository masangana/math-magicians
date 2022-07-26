import calculate from '../logic/calculate';

describe('To test the functionality of "AC"', () => {
    test('should reset input after pressing "AC"', () => {
      const obj = {
        total: 1,
        next: '2',
        operation: '+',
      };
  
      const expected = {
        total: null,
        next: null,
        operation: null,
      };
  
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
  
      expect(result).toEqual(expected);
    });
  });