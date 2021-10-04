import React, { FC } from 'react'
import { Button } from 'carbon-components-react';
import { useHistory } from 'react-router-dom'

const ContentManager: FC<{}> = () => {
    const history = useHistory();
    const handleClick = () => {

        history.push("/detail")
    }

    return (
        <div>
            <p>Content-Manager</p>
            <div><Button onClick={handleClick}>Go to detail</Button></div>
        </div>
    )
}
export default ContentManager;