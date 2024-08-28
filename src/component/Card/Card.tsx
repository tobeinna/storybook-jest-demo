import { useState } from 'react';
import Button from '../Button/Button';
import './card.scss'
import TextInput from '../TextInput/TextInput';

interface CardProps {
    id: string;
    content: string,
}

function Card({ id, content }: CardProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [cardContent, setCardContent] = useState<string>(content);

    const onEdit = () => {
        setIsEditing(true)
    }

    const onSave = () => {
        const data: CardProps[] = JSON.parse(localStorage.getItem('data') || '[]')
        const currentItemIndex = data?.map((item: CardProps) => item?.id)?.indexOf(id);
        if (data?.length) {
            data.splice(currentItemIndex, 1, { id, content: cardContent })
            localStorage.setItem('data', JSON.stringify(data));
        }
        setIsEditing(false)
    }

    const onDelete = () => {
        const data: CardProps[] = JSON.parse(localStorage.getItem('data') || '[]')
        const currentItemIndex = data?.map((item: CardProps) => item?.id)?.indexOf(id);
        if (data?.length) {
            data.splice(currentItemIndex, 1)
            localStorage.setItem('data', JSON.stringify(data));
        }
        setIsEditing(false)
    }

    return <div className='card-container'>
        {isEditing ?
            <>
                <TextInput value={cardContent} onChange={setCardContent} />
                <Button type='secondary' text='Save' onClick={onSave} />
            </> :
            <>
                <span>{cardContent}</span>
                <div className='button-group'>
                    <Button type='secondary' text='Edit' onClick={onEdit} />
                    <Button type='danger' text='Delete' onClick={onDelete} />
                </div>
            </>}
    </div>;
}

export default Card;