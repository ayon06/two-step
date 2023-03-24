import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserResolver } from "apps/two-step-api/src/user/user.resolver";
import { UserService } from "apps/two-step-api/src/user/user.service";
import { User, UserSchema } from "@two-step/entities"
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ])
  ],

  providers: [UserService, UserResolver]
})
export class UserModule { }