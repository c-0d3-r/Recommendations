import { BaseEntity } from "./base.entity";

export class FilmEntity extends BaseEntity {
  public id: number;

  public title: string;

  public year: number;

  public constructor({ id, title, year }: FilmEntity) {
    super();

    this.id = id;
    this.title = title;
    this.year = year;
  }
}
