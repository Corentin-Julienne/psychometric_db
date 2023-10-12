import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class HadA {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	item_1: number;

	@Column()
	item_2: number;

	@Column()
	item_3: number;

	@Column()
	item_4: number;

	@Column()
	item_5: number;

	@Column()
	item_6: number;

	@Column()
	item_7: number;
}
