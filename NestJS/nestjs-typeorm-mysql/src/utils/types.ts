export type CreateUserPrams = {
    username: string,
    password: string
}

export type UpdateUserParam = {
    username: string,
    password: string
}

export type CreateUserProfileParams = {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    dob: string
}

export type CreateUserPostParams = {
    title: string,
    description: string
}