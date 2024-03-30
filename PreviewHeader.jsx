function PreviewHeader({firstname, lastname, email, address}) {
    return (
      <div className="preview-name-div">
        <div className="name-div">
          {firstname} {lastname}
        </div>
        <div className="general-info-div">
          <h5>Email: {email}</h5>
          <h5>Address: {address}</h5>
        </div>
      </div>
    );
  }

  export default PreviewHeader