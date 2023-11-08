import { BaseEntity }       from './base.entity';
import { ReviewEntity }     from './review';

export class CriticEntity extends BaseEntity {
  public id: number;

  public firstName: string;

  public lastName: string;

  public reviews: ReviewEntity[] = [];

  public constructor({ id, firstName, lastName }: CriticEntity) {
    super();

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
