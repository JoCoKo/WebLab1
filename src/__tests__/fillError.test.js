import fillError from "../fillError";

describe("Fill error", () => {
  const error = JSON.parse('{"cod":"404","message":"city not found"}');
  const fillElements = jest.fn(() => {
  });
  const result = JSON.parse('{"picSrc":"","error":"Error! 404 city not found\\r\\n","place":"","weather":"","temperature":"","wind":""}');




  test('Call fillElements', () => {
    fillError(error, fillElements);
    expect(fillElements.mock.calls.length).toBe(1);
  });
  test('Correct result', () => {
    expect(fillError(error, fillElements)).toEqual(result);
  });
});