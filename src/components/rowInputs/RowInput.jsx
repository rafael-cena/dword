export default function RowInput({ keys }) {
    return <div
        className="row-inputs"
    >
        {
            keys.map(key => <span
                type="text"
                id={key.id}
                key={key.id}
                className={`letter-input ${key.class}`}
            >
                {key.letter}
            </span>)
        }
    </div>
}