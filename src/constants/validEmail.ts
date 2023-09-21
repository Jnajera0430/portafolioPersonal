export const ValidEmail = (email:string) =>{
    let expresionRegular= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return expresionRegular.test(email);
}