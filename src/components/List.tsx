import React from 'react';

type Props = {
    listItems: string[];
}

const List: React.FunctionComponent<Props> = ({ listItems }: Props) => {
    return (<div className="list">
        {listItems.map(item => (
            <div key={item}>
                {item}
            </div>
        ))}
    </div>)
}

export default List;