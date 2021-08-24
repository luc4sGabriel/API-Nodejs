interface IUser{
    name: string;
    email: string;
    password: string;
}

interface IUserUpdate{
    id: string;
    name: string;
    email: string;
    password: string;
}

interface IUserDelete{
    id: string;
}

export {
    IUser,IUserUpdate,IUserDelete
}