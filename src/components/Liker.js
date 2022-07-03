
import React, { useState } from "react";
import { FcLike, FcDislike } from "react-icons/fc";

function Liker() {
    const [like, setLike] = useState(false);

    return (
        <div className="Liker">
            <h1>A Like Button</h1>
            <h2 className="like" onClick={() => setLike((prevLike) => !prevLike)}>
                {like ? <FcLike /> : <FcDislike />}
            </h2>
        </div>
    );
}

export default Liker;