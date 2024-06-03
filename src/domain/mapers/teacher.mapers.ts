import { errorMonitor } from "events";
import { TeacherEntity } from "../entities/teacher.entity";
export class TeacherMaper{
static fromEntity(object:{[key:string]:any}):TeacherEntity{

    const{id,name,email,gender,address,profession}=object;
    if (!name) throw Error('error');
    if (!email) throw Error('error');
    if (!gender) throw Error('error');
    if (!address) throw Error('error');
    if (!profession) throw Error('error');
    return new TeacherEntity(id,name,email,gender,address,profession);

}

}