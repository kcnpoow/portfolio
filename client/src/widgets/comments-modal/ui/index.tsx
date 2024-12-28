import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IoSend } from 'react-icons/io5';

import { Project } from '@entities/project';
import { CommentApi, Comment, CommentRow } from '@entities/comment';
import { Modal } from '@shared/ui/Modal';
import { IconButton } from '@shared/ui/IconButton';
import { useAuth } from '@shared/hooks/useAuth';
import { socket } from '@shared/config/socket';
import { useAlert } from '@shared/hooks/useAlert';

type Props = {
  project: Project | null;
  onHide: () => void;
};

export const CommentsModal = ({ onHide, project }: Props) => {
  const { user } = useAuth();
  const { addAlert } = useAlert();

  const [message, setMessage] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (!project) return;

    const fetchComments = async () => {
      try {
        const fetchedComments = await CommentApi.getComments(project._id);
        setComments(fetchedComments);
      } catch (e) {
        addAlert({
          message: 'Something went wrong',
          severity: 'error',
          timeout: 3000,
        });
      }
    };

    fetchComments();

    const event = `comment:${project._id}`;
    socket.on(event, (comment: Comment) => {
      setComments((prevState) => [comment, ...prevState]);
    });

    return () => {
      socket.off(event);
    };
  }, [project]);

  if (!project || !user) {
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    if (!user.email) {
      console.error('User email is undefined');
      return;
    }

    await CommentApi.createComment({
      message,
      senderEmail: user.email,
      projectId: project._id,
    });
    setMessage('');
  };

  return (
    <Modal open onHide={onHide}>
      <div className='flex flex-col h-full'>
        <div>
          <p className='text-casper text-lg font-bold'>feedback on</p>
          <h2 className='text-3xl truncate'>
            {project.title || 'Untitled Project'}
          </h2>
        </div>

        <div className='flex-grow overflow-y-auto'>
          {comments.map((comment) => (
            <CommentRow key={comment._id} comment={comment} />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className='flex items-center'>
            <input
              type='text'
              value={message}
              onChange={handleMessageChange}
              className='w-full p-3 mr-6 bg-transparent border-2 border-white/50 rounded-lg focus-within:outline-none'
              placeholder='Write a comment...'
            />
            <IconButton type='submit'>
              <IoSend size={25} />
            </IconButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};
