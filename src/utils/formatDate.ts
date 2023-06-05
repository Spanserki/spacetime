import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function FormatDate(date: string) {
    const createdAt = format(new Date(date), "d 'de' LLLL 'às' HH'h'mm", { locale: ptBR })
    return createdAt;
}