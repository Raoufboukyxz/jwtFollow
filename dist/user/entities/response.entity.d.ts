import { Comment } from './comments.entity';
import { User } from './User.entity';
export declare class Response {
    id: number;
    response: string;
    created: Date;
    comment: Comment;
    user: User;
    commentId: number;
    userId: number;
}
