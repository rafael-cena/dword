export default function Selector({ opt, setOpt, select_options }) {
    return (
        <select className="select">
            {
                select_options.map(item => <option onClick={() => setOpt(item.id)} selected={opt === item.id} className="option" value={item.id}>{item.name}</option>)
            }
        </select>
    );
}