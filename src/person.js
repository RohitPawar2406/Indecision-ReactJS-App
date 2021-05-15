export const isAdult=(age)=>{
    if(age>=18)
    {
        return true;
    }
    return false;
}

export const canDrink=(age)=>{ // This is named export 
    if(age>=21)
    {
        return "Can Drink!!";
    }
    return "Can not Drink";
}

// export{isAdult, canDrink}      This is also method to write named export