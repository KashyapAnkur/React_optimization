import React,{useState, useMemo} from 'react';

function UseMemo() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    
    let increaseCounter1 = () => {
        setCounter1(counter1 + 1);
    }

    let increaseCounter2 = () => {
        setCounter2(counter2 + 1);
    }

    // let called = () => {
    //     let i = 0;
    //     while(i< 2000000000) i++;
    //     console.log("I am called again");
    // }
    /*  this is the normal function and will be called again again on every render. 
        state or props change can be the cause of re-rendering the component.
    */


    let called = useMemo( () => {
        alert("Some calculation going on");
        // let i = 0;
        // while(i< 2000000000) i++;
        return counter1;
    },[counter1]);
    /*  with the help of useMemo we memoized the called function.
        Memoization is the optimization technique which passes a complex function to be memoize.
        In memoization the result is remembered when the same parameters are passed in subsequently.
        Memoization has dependency on the second paremeter which can be the array
    */


    // let called = useMemo( () => {
    //     let i = 0;
    //     while(i< 2000000000) i++;
    //     console.log("I am called again");
    // },[]);
    /* Empty [] means, called is run only on initial render */
    
    return (
        <>
            <button onClick={increaseCounter1}>{counter1}</button><br /><br />
            {called}<br /><br />
            <button onClick={increaseCounter2}>{counter2}</button>
            {console.log("Rendered")}
        </>
    )
}

export default UseMemo;