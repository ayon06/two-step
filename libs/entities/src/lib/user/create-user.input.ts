import { InputType, Field, ArgsType } from '@nestjs/graphql'

@InputType()
@ArgsType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string
  @Field(() => String)
  lastName: string
  @Field(() => String)
  middleName?: string
  @Field(() => Date)
  birthDate: Date
  @Field(() => String)
  password: string
  @Field(() => String)
  _id: string
  @Field(() => String)
  displayName: string
  @Field(() => String)
  phoneNumber?: string
  @Field(() => String)
  email: string
}
