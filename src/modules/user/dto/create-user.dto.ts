import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty({
        description: `name User`,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: `name User`,
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: `name User`,
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}
