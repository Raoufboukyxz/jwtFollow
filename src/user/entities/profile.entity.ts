import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: string;
  @Column()
  height: string;
  @Column()
  weight: string;
  @Column()
  professionel: string;
  @Column()
  league: string;
}
