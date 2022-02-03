import { PartialType } from '@nestjs/mapped-types';
// import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDTO } from './create-movie.dto';

// export class UpdateMovieDTO {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
