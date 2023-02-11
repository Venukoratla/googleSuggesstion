// Write your code here
const SuggestionItem = props => {
  const {details, fullfillValue} = props
  const {id, suggestion} = details
  const clickedSuggestion = () => {
    fullfillValue(suggestion)
  }
  return (
    <li key={id}>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={clickedSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
