import { Comment } from '../model';
import { formatTimestamp } from '@shared/lib/formatTimestamp';

type Props = {
  comment: Comment;
};

export const CommentRow = ({ comment }: Props) => {
  const date = formatTimestamp(comment.timestamp);

  return (
    <div className='my-6'>
      <div className='mb-2'>
        <span className='mr-4'>{comment.senderEmail}</span>
        <span className='text-sm opacity-65'>{date}</span>
      </div>
      <p className='text-lg'>{comment.message}</p>
    </div>
  );
};
