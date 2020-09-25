import React from "react";

var url: 'http://localhost:4848/user';

function postRegister (){
    const sendUser  = () => {
         fetch(url)
            .then(response => response.json())
    }
}

export default postRegister;
