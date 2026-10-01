export const ValidEmail = (email:string) =>{
    const expresionRegular= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return expresionRegular.test(email);
}