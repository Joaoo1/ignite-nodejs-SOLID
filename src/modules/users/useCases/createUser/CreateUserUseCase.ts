import BadRequestError from "../../../../common/errors/BadRequestError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExists = this.usersRepository.findByEmail(email);

    if (alreadyExists) {
      throw new BadRequestError("User already exists");
    }

    const createdUser = this.usersRepository.create({
      email,
      name,
    });

    return createdUser;
  }
}

export { CreateUserUseCase };
