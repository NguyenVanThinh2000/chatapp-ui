export interface IRoom {
  id?: string;
  name: string;
  members: IUser[];
}
export interface IUser {
  id?: string;
  name: string;
}
export interface IMessage {
  id?: string;
  roomId: string;
  sendBy: IUser | null;
  type: string;
  content: string | null;
  timestamp: number;
}
