

// server/tests/unit/formatDate.test.js

const formatDate = require('../../src/utils/formatDate');

describe('formatDate utility function', () => {
  it('should format a date into YYYY-MM-DD', () => {
    const inputDate = new Date('2025-07-21T10:00:00Z');
    const formatted = formatDate(inputDate);
    expect(formatted).toBe('2025-07-21');
  });

  it('should return a string', () => {
    const inputDate = new Date();
    const formatted = formatDate(inputDate);
    expect(typeof formatted).toBe('string');
  });
});
