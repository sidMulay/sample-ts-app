import React from 'react';

type Props = {
    onChange(value: string): void;
}

const Input: React.FunctionComponent<Props> = ({ onChange }: Props) => (
    <input type="text" onChange={(e) => onChange(e.target.value)} />
)

export default Input;