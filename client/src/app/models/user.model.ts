export interface User{
    _id: string;
    Uid: string;
    Username: string;
    Password: string;
    createAt: Date;
    updateAt: Date;
}
export function isUser(obj: any): obj is User {
    return (
      obj._id &&
      obj.Uid &&
      obj.Username &&
      obj.Password &&
      obj.createAt &&
      obj.updateAt
    );
  }