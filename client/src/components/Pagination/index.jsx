const Pagination = (props) => {
  const pageNumbers = [];

  const oper = Math.ceil(props.allCountries.length / props.countriesPerPage);
  for (let index = 1; index <= oper; index++) {
    pageNumbers.push(index)
  }

  const onPreviusPage = () => {
    props.setCurrentPage(props.currentPage - 1)
  }

  const onNextPage = () => {
    props.setCurrentPage(props.currentPage + 1)
  }

  const onSpecificPage = (n) => {
    props.setCurrentPage(n)
  }

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <a className={`pagination-previous ${props.currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Anterior</a>
      <a className={`pagination-next ${props.currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</a>
      <ul className="pagination-list">
        {
          pageNumbers.map(noPage => (
            <li key={noPage}>
              <a className={`pagination-link ${noPage === props.currentPage ? 'is-current' : ''}`} onClick={() => onSpecificPage(noPage)}>
                {noPage}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Pagination;