
const formatDate = require('../../src/utils/formatDate');

describe('formatDate', () => {
  it('should return formatted date string', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const result = formatDate(date);
    expect(result).toBe('2023-01-01');
  });
});
