import React from "react";

class List extends React.Component {
    state = {
        activities: ["Take the trolley to Fisherman's Wharf", "Stroll the Gardens at Golden Gate Park", "Do Some Shopping in the Financial District", "Escape to Alcatraz", "Dine al Fresco"]
     }

    render() {
        return (
            <div>
                <h3><u className="toplist">Top 5 Things to Do:</u>
                <ul>
                    {
                        this.state.activities.map( (activity, idx) => {
                            return <li key={ idx }>{ activity }</li>
                        })
                    }
                </ul>
                </h3>
            </div>
        )
    }
}

export default List
