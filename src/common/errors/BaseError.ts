class BaseError {
  public readonly message: string;

  public readonly status: number;

  constructor(statusCode: number, message: string) {
    this.status = statusCode;
    this.message = message;
  }
}

export default BaseError;
