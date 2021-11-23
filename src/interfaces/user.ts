export default interface IUser {
    _id: string,
    uid: string,
    name: string,
}

export const DEFAULT_USER: IUser = {
    _id: "",
    uid: "",
    name: ""
}

export const DEFAULT_TOKEN = ''
