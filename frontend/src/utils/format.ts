export function formatCpf(cpf: string): string {
    return cpf.replaceAll(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2") || "";
}

export function formatPhone(phone: string): string {
    if (phone.replaceAll(/\D/g, "")?.length <= 10) {
        return phone.replaceAll(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    }
    return phone
        .replaceAll(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");

}