import { InputType, Int, Field } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class addFriendInput {
  @Field(() => String)
  requester!: Types.ObjectId;

  @Field(() => String)
  recipient!: Types.ObjectId;
}
