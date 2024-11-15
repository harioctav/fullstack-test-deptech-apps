import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, date_of_birth, ...user } = createUserDto;
    const hashedPassword = await hash(password);
    return await this.prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
        date_of_birth: date_of_birth
          ? new Date(`${date_of_birth}T00:00:00.000Z`)
          : null,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
