import { PartialType } from '@nestjs/mapped-types';
import { Profiledto } from './create-profile.dto';

export class UpddateProfileDto extends PartialType(Profiledto) {}
