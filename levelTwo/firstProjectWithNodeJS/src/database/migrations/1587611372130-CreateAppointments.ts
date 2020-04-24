import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1587611372130
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({}));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
