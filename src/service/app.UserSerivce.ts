import { UserDto } from './../dto/UserDTO';
import { Injectable,HttpException } from "@nestjs/common";

@Injectable()
export class UserService{
    private users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Alice Caeiro" },
        { id: 3, name: "Who Knows" },
    ];
    getAllUsers() {
        return Promise.resolve(this.users);
    }
    getUser(id: number) {
        const user = this.users.find((user) => user.id == id);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return Promise.resolve(user);
    }
    addUser(user:UserDto) {
        this.users.push({id:user.age,name:user.name});
        return Promise.resolve();
    }
}
