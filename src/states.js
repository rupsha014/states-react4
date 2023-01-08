import React from 'react';
import ReactDOM from 'react-dom/client';

function States() {

    const [state, setstate] = React.useState("yes")
    function handleclick() {
        setstate("no")
    }
    return (
        <div className="mt-6 ">
            <h1 className=" rounded-full font-bold p-10 text-2xl text-blue-600 bg-orange-400 flex justify-center items-center">Is state important to know?</h1>
            <div className="rounded-full ml-auto mr-auto  h-32  w-32 flex justify-center items-center bg-orange-400 text-blue-600 mt-5 text-2xl font-bold" onClick={handleclick}>
                <h1>{state}</h1>
            </div>
        </div>
    )
}
export default States


