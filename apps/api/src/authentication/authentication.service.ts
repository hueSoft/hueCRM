import {Injectable} from '@nestjs/common';
import {sign} from 'jsonwebtoken';
import {ApplicationModule} from '../app/app.module';
import {UserService} from '../users/user.service';


@Injectable()
export class AuthenticationService {
	constructor(private readonly userService: UserService) {
	}
	
	async signPayload(payload: any) {
		return sign(payload, 'secretKey', {expiresIn: ApplicationModule.payloadSessionTime});
	}
	
	// async validateUser(payload: any){
	// 	return await this.userService.findByPayload(payload)
	//
	// }
}