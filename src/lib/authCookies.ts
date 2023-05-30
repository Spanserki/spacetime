import { cookies } from "next/dist/client/components/headers";
import decode from 'jwt-decode'

interface UserProps {
    sub: string;
    name: string;
    avatar_url: string;
}

export function getUser(): UserProps {
    const token = cookies().get('token_client_github')?.value
    if (!token) {
        throw new Error('Unoauthorized!')
    }
    const user: UserProps = decode(token)
    return user
}