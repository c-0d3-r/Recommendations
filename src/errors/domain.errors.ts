export class CommentDomainError extends Error {
  private static defaultErrorMsg = 'Comment too big.';

  public constructor(msg = CommentDomainError.defaultErrorMsg) {
    super(msg);
  }
}

export class RatingDomainError extends Error {
  private static defaultErrorMsg = 'Rating should be in 0..100 range.';

  public constructor(msg = RatingDomainError.defaultErrorMsg) {
    super(msg);
  }
}
