import React, {DetailedHTMLProps} from "react";

export type DivProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const isLogin = () => {
    const name = localStorage.getItem('name');
    if (name === null) {
        return false;
    }
    return true;
}

export function getName(){
    const name = localStorage.getItem('name');
    if (name === null) {
        return 'Unknown';
    }
    return name;
}

export function logout() {
    localStorage.removeItem('name');
}
export function login(name: string) {
    localStorage.setItem('name', name);
}