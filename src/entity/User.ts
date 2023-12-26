import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Channel } from './Channel';
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: false})
  email: string;
  @Column({ nullable: false})
  firstName: string;
  @OneToOne(() => Channel, (channel) => channel.user)
  channel: Channel;
}
