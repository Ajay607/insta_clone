export const validEmail = new RegExp(
    '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
 );
 export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');