import { io, Socket } from 'socket.io-client';

import { Comment } from '@entities/comment/model';

interface ServerToClientEvents {
  comment: (comment: Comment) => void;
}

interface ClientToServerEvents {}

export const socket: Socket = io(
  'http://localhost:8080'
);