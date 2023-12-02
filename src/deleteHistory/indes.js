import './index.css'

const DeleteHistory = props => {
  const {webDetails, deleteItem} = props
  const {id, title, timeAccessed, domainUrl, logoUrl} = webDetails

  const onDeleteHistory = () => {
    deleteItem(id)
  }

  return (
    <li className="list">
      <p className="site-time">{timeAccessed}</p>
      <div className="website">
        <img src={logoUrl} alt="domain logo" className="site-logo" />
        <div className="website-detail">
          <p className="site-title">{title}</p>
          <p className="site-url">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default DeleteHistory
