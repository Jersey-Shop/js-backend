import { Module } from '@nestjs/common';

import { AuthenticationModule } from '@modules/oauth2/authentication/authentication.module';
import { AuthorizationModule } from '@modules/oauth2/authorization/authorization.module';

@Module({
  imports: [
    AuthenticationModule, 
    AuthorizationModule
  ]
})
export class Oauth2Module {}
