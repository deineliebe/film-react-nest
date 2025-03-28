import { JsonLogger } from './jsonLogger.service';

describe('JsonLogger test', () => {
  let logger: JsonLogger;

  beforeEach(() => {
    logger = new JsonLogger();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('test fatal message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test fatal message format';
    logger.fatal(message);
    const expectedData = JSON.stringify({
      level: 'fatal',
      message,
      optionalParams: [],
    });
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });

  it('test error message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test error message format';
    logger.error(message);
    const expectedData = JSON.stringify({
      level: 'error',
      message,
      optionalParams: [],
    });
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });

  it('test warn message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test log message format';
    logger.warn(message);
    const expectedData = JSON.stringify({
      level: 'warn',
      message,
      optionalParams: [],
    });
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });

  it('test log message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test log message format';
    logger.log(message);
    const expectedData = JSON.stringify({
      level: 'log',
      message,
      optionalParams: [],
    });
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });
});
