import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Profiledto } from '../dto/create-profile.dto';
import { UpddateProfileDto } from '../dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Post()
  create(@Body() createUserDto: Profiledto, @Req() req) {
    return this.profileService.create(createUserDto, req.user);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpddateProfileDto) {
    return this.profileService.update(+id, updateUserDto);
  }
}
