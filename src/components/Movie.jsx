function Movie(props) {
  const { Title, Year, ImdbID, Type, Poster } = props;

  return (
    <div id={ImdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === 'N/A' ? (
          <img
            className="activator"
            src={`https://dummyimage.com/300x400/332a33/59a646.png&text=${Title}
          `}
            alt="poster"
          />
        ) : (
          <img className="activator" src={Poster} alt="poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
