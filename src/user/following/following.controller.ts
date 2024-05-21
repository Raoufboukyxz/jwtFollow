import { Body, Controller, Delete, Post, Req } from '@nestjs/common';
import { FollowingService } from './following.service';

@Controller('following')
export class FollowingController {
  constructor(private followingService: FollowingService) {}
  @Post()
  create(@Req() req, @Body() usertoFollow: any) {
    console.log(usertoFollow);
    return this.followingService.create(usertoFollow.userId, req.user);
  }
  @Delete()
  remove(@Req() req, @Body() userId: number) {
    return this.followingService.remove(userId, req.user);
  }
}
