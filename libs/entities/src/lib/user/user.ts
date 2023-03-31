import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field(() => String)
  _id: string

  @Prop({
    required: true,
  })
  @Field(() => String, { description: 'User first name' })
  firstName: string

  @Prop({
    required: true,
  })
  @Field(() => String, { description: 'User last name' })
  lastName: string

  @Prop({
    required: false,
  })
  @Field(() => String, { description: 'User middle name', nullable: true })
  middleName?: string

  @Prop({
    required: true,
  })
  @Field(() => Number, { description: 'Age of user', nullable: false })
  age: number

  @Prop({
    required: true,
  })
  @Field(() => String, { description: 'secure af', nullable: false })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
