import React from 'react';

const BasicTypes: React.FunctionComponent = () => {

    //Basic Types
    let firstName: number = 35;
    //let firstName: boolean = true;
    //let firstName: number[] = [1,2,3,4]; //TS Treats this as an object
    //let firstName: string = "Yo!";
    //let firstName: Array<string> = ["Yo!", "2"]; //TS Treats this as an object

    //void - return types for functions which don't return anything
    const warning = (): void => {
        console.log("warning");
    }

    return (
        <div className="basicTypes">
            Type of {firstName} is {typeof firstName}
        </div>
    );
}

export default BasicTypes;
