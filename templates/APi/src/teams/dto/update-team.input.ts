import { CreateTeamInput } from './create-team.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';


@InputType()
export class UpdateTeamInput extends PartialType(CreateTeamInput) {
  @Field()
  description: string

  @Field()
  _id: string
}
