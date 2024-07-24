import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
   
  @ApiProperty({
    description: 'The email will be used for login, paired with the password.',
    example: 'vitor.figueiredo@mail.com',
    required: false,
    type: 'string'
  })
  email: string;

  @ApiProperty({
    description: 'The first name will be displayed wherever there is user information.',
    example: 'Vitor',
    required: false,
    type: 'string'
  })
  firstName: string;

  @ApiProperty({
    description: `The last name will be concatenated with the user first name.`,
    example: 'Figueiredo',
    required: false,
    type: 'string'
  })
  lastName: string;

  @ApiProperty({
    description: `
      The password will be used for login if the user has not signed up via Google and must be between 
      6-32 characters, including uppercase, lowercase, numbers, and a special character`,
    example: 'Teste@1234',
    required: false,
    type: 'string'
  })
  password: string;
}
