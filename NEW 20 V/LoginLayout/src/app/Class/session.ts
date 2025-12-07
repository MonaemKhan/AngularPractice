export interface Session{
  userId : string,
  userToken : string,
  isRemember : boolean
}

export enum SessionEnum{
  userId = "UserId",
  userToken = "UserToken",
  isRemember = "IsRemember"
}
