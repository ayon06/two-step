import { InputType, Field, ArgsType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;
  @Field(() => String)
  lastName: string;
  @Field(() => String)
  middleName?: string;
  @Field(() => Number)
  age: number;
  @Field(() => String)
  password: string;
}
