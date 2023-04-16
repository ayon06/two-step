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
  @Field(() => Date, { description: 'Birth date of user', nullable: false })
  birthDate: Date

  @Prop({
    required: true,
  })
  @Field(() => String, { description: 'Name that will be displayed in-app', nullable: false })
  displayName: string

  @Prop({
    required: false,
  })
  @Field(() => String, { description: 'primary phone number', nullable: true })
  phoneNumber: string
  @Field(() => String, { description: 'primary email address', nullable: false })
  email: string
}

export const UserSchema = SchemaFactory.createForClass(User)
