import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'The username of the User',
    example: 'JohnDoe',
    type: String,
    required: true,
  })
  username: string;

  @ApiProperty({
    description: 'The first name of the User',
    example: 'John',
    type: String,
    required: true,
  })
  firstName: string;

  @ApiProperty({
    description: 'The last name of the User',
    example: 'Doe',
    type: String,
    required: true,
  })
  lastName: string;

  @ApiProperty({
    description: 'The email of the User',
    example: 'john@doe.com',
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'password',
    type: String,
    required: true,
  })
  password: string;

  @ApiProperty({
    description: 'The IBAN of the User',
    example: 'DE123456789',
    type: String,
    required: true,
  })
  iban: string;
  
  @ApiProperty({
    description: 'The initial budget of the User',
    example: 1000,
    type: Number,
    required: true,
  })
  initial_budget: number;
}
