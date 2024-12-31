import './EmptyList.css';

function EmptyList({message}) {
    return (
        <div className="empty-list">
            <h2 className="empty-list__message">{message}</h2>
        </div>
    )
}

export default EmptyList;