import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import List from '../components/List';

const Home: React.FunctionComponent = () => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const [allListItems, addListItem] = React.useState<string[]>([])

    const handleInputChange = (value: string): void => {
        setInputValue(value)
    }

    const handleButtonClick = (): void => {
        addListItem(allListItems => [...allListItems, inputValue]);
    }

    return (
        <div>
            <Input onChange={handleInputChange} />
            <Button onClick={handleButtonClick} />
            <List listItems={allListItems} />
        </div>
    )
}

export default Home;