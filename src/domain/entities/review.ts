import { CommentDomainError, RatingDomainError } from 'src/errors';

import { BaseEntity }                            from './base.entity';

export class ReviewEntity extends BaseEntity {
  private static MAX_RATING = 100;

  private static MIN_RATING = 0;

  private static MAX_COMMENT_LENGTH = 2_000;

  public id: number;

  public filmId: number;

  public criticId: number;

  public rating: number;

  public comment: string;

  public constructor({ id, filmId, criticId, rating, comment }: ReviewEntity) {
    super();

    this.id = id;
    this.filmId = filmId;
    this.criticId = criticId;

    if (rating > ReviewEntity.MAX_RATING || rating < ReviewEntity.MIN_RATING)
      throw new RatingDomainError();

    this.rating = rating;

    if (comment.length > ReviewEntity.MAX_COMMENT_LENGTH)
      throw new CommentDomainError();

    this.comment = comment;
  }
}
