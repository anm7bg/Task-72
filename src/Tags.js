// import React, { createElement } from "react";


function Tags({ tags = ["boomdotdev", "task", "tags", "react"] }) {
   
    // let div = <div className="tags" id="tags"></div>

    return (
        <ul className="tags">
            {
                tags.map((x, i) => <li key={i} className="tag">#{x}</li>)
            }
        </ul>
        );
   

        
}
export default Tags;