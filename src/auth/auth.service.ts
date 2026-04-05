import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from '../dto/create-user.dto.js';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await argon.verify(user.hash, dto.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Remove sensitive data before returning
    const { hash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async register(dto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const hash = await argon.hash(dto.password);

    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    // Remove sensitive data before returning
    const { hash: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }
}
