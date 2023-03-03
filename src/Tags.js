// import React, { createElement } from "react";


function RenderTags({ tags = ['"boomdotdev"', '"task"', '"tags"', '"react"'] }) {
   
    // let div = <div className="tags" id="tags"></div>

    return (
        <ul className="tags">
            {
                tags.map(x => <li className="tag">#{x}</li>)
            }
        </ul>
        );
   

        
}
export default RenderTags;