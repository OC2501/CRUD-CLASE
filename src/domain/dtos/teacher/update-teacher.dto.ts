export class UpdateTeacherDto{
    constructor(
        public name:string,
        public email:string,
        public gender: string,
        public address: string,
        public profession: string,
    ){}
  
    static update(object:{[key:string]:any}):[string?, UpdateTeacherDto?]{
        const {name, email, gender, address, profession} = object
        if (!name) return ['name is required ',undefined]
        if (!email) return ['email is required ',undefined]
        if (!gender) return ['gender is required ',undefined]
        if (!address) return ['address is required ',undefined]
        if (!profession) return ['profession is required ',undefined]
        return [undefined, new UpdateTeacherDto(name, email, gender, address, profession)]
    }
  }