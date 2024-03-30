function PersonalData({ personalInfo, onInfoChange }) {

  return (
    <div className="Personal-Data">
      <h2>Personal Data</h2>
      <form>
        <div className="personal-data-names">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            autoComplete="off"
            value={personalInfo.firstname}
            onChange={onInfoChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            autoComplete="off"
            value={personalInfo.lastName}
            onChange={onInfoChange}
          />
        </div>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          autoComplete="off"
          value={personalInfo.email}
          onChange={onInfoChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          autoComplete="off"
          value={personalInfo.address}
          onChange={onInfoChange}
        />
      </form>
    </div>
  );
}

export default PersonalData;
