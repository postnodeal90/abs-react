import Input from '@atoms/Input';
import Button from '@atoms/Button';
import './SearchBar.css';

export default function SearchBar({ 
  value,
  onChange,
  onSearch,
  placeholder = 'Search...'
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
}
