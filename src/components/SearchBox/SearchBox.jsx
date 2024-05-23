// import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
