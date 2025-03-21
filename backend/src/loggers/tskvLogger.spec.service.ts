import { TskvLogger } from './tskvLogger.service';

describe('JsonLogger test', () => {
  let logger: TskvLogger;

  beforeEach(() => {
    logger = new TskvLogger();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('test fatal message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test fatal message format';
    logger.fatal(message);
    const expectedData = `level=fatal\tmessage=${message}\toptionalParams=[]\n`;
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });

  it('test error message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test error message format';
    logger.error(message);
    const expectedData = `level=error\tmessage=${message}\toptionalParams=[]\n`;
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });

  it('test warn message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test log message format';
    logger.warn(message);
    const expectedData = `level=warn\tmessage=${message}\toptionalParams=[]\n`;
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });

  it('test log message format', () => {
    const mockData = jest.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'random phrase to test log message format';
    logger.log(message);
    const expectedData = `level=log\tmessage=${message}\toptionalParams=[]\n`;
    expect(mockData).toHaveBeenCalledWith(expectedData);
  });
});
