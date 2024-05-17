
import { UserEntity } from "../../domain/entities/user.entity";
import { LoginDto } from "../../domain/dtos/auth/login_user.dto";
import { UserModel } from "../../database/mongodb/models/user.models";
import { UserMaper } from "../../domain/mapers/user.mapers";
import { RegisterDto } from "../../domain/dtos/auth/register_user.dto";

export class AuthService {
  async register(registerDto: RegisterDto): Promise<UserEntity> {
    const { name, email, password } = registerDto;
    try {
      const exist = await UserModel.create({name,email,password });
      if (exist) throw Error("error");
      const register = await UserModel.create(RegisterDto);
      if (!register) throw Error("error");
      await register.save();
      return UserMaper.fromEntity(register);
    } catch (error) {
        throw error;
    }
}

async login(loginDto:LoginDto):Promise<UserEntity>{
  const { email , password} = loginDto;
    try {
      const login = await UserModel.findOne({email});
      if(!login) throw Error('Error')
      if(login.password !== password) throw Error('Error')
      return UserMaper.fromEntity(login);

  } catch (error) {
      throw error; 
  }
}
}