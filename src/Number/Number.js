import React from 'react';


const Number = (props)=>{
    const numberFormat = Array.from(props.number).map((el,i)=>!((i+1)%4)? `${el} ` : el);
    return(
        <h1>{numberFormat}</h1>
    );
}

export default Number;