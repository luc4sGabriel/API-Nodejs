interface ICompany{
    name: string;
    cnpj: string;
}

interface ICompanyUpdate{
    id: string;
    name: string;
    cnpj: string;
} 

interface ICompanyDelete{
    id: string;
}

export {
    ICompany,ICompanyUpdate,ICompanyDelete
}