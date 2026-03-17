import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {

    @ApiProperty({
        description: `name Task`,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: `description Task`,
    })
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        description: `isActive Task`,
    })
    @IsNotEmpty()
    isActive: boolean;
}
