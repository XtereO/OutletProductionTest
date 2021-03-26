import React from "react";
import preLoader from "../../media/loading.gif";

let withSuspense =(Component)=>{
    return<React.Suspense fallback={<img 
    className="center" src={preLoader} />}>
        <Component/>
    </React.Suspense>
}

export default withSuspense