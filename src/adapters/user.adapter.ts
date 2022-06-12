export const createUserAdapter = (user: any) => ({
    id: user.data.id,
    name: user.data.name,
    lastName: user.data.lastName,
    userName: user.data.userName,
    avatar: user.data.avatar,
    email: user.data.email,
    password: user.data.password,
});
