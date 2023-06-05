import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function FormatDistanceDate(date: string) {
    const createdAt = formatDistanceToNow(new Date(date), {
        locale: ptBR,
        addSuffix: true
    })
    return createdAt;
}