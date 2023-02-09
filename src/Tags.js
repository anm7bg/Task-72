import React, { createElement } from "react";


function RenderTags() {
    const tags = ["boomdotdev", "task", "tags", "react"];
   
    // let div = <div className="tags" id="tags"></div>

    return (
        <div className="tags">
            {
                tags.map(x => <span className="tag">#{x}</span>)
            }
        </div>
        );
   

        
}
export default RenderTags;