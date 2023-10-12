import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column()
	two_fa_key: string;

	@Column()
	profile_img_url: string;
}
