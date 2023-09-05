import './Search.scss'

type Props = {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}
const Search = ({ setSearchQuery }: Props) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setSearchQuery(e.target.value)
        }, 1500)
    }

    return (
        <div className="search_box">
            <input
                className="search_input"
                type="text"
                onChange={handleSearchChange}
                placeholder="Search…"
            />
        </div>
    )
}
export default Search
