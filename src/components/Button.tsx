import React from 'react';

type Props = {
    onClick(): void;
}

const Input: React.FunctionComponent<Props> = ({ onClick }: Props) => (
    <button type="button" onClick={onClick}> Add Item</button>
)

export default Input;