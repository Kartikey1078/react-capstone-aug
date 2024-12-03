import { useState } from "react";

export default function SignUpForm() {
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    userName: "",
    termsAndCondition: false,
  });

  const [error, setError] = useState({
    Name: false,
    Email: false,
    Mobile: false,
    userName: false,
    termsAndCondition: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Email, Mobile, userName, termsAndCondition } = FormData;

    // Validate and update errors in a single call
    setError({
      Name: Name.trim().length === 0,
      Email: Email.trim().length === 0,
      Mobile: Mobile.trim().length === 0,
      userName: userName.trim().length === 0,
      termsAndCondition: !termsAndCondition,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Signup Form</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          border: "none",
          gap: "10px",
        }}
        onSubmit={handleSubmit} 
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...FormData, Name: e.target.value })}
          value={FormData.Name}
        />
        {error.Name && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              margin: "0px",
            }}
          >
            Name is required
          </p>
        )}
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setFormData({ ...FormData, Email: e.target.value })}
          value={FormData.Email}
        />
        {error.Email && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              margin: "0px",
            }}
          >
            Email is required
          </p>
        )}
        <input
          type="text"
          placeholder="Mobile"
          onChange={(e) => setFormData({ ...FormData, Mobile: e.target.value })}
          value={FormData.Mobile}
        />
        {error.Mobile && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              margin: "0px",
            }}
          >
            Mobile is required
          </p>
        )}
        <input
          type="text"
          placeholder="UserName"
          onChange={(e) =>
            setFormData({ ...FormData, userName: e.target.value })
          }
          value={FormData.userName}
        />
        {error.userName && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              margin: "0px",
            }}
          >
            Username is required
          </p>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <input
              type="checkbox"
              id="checkbox"
              style={{ alignSelf: "start" }}
              onChange={(e) =>
                setFormData({ ...FormData, termsAndCondition: e.target.checked })
              }
              checked={FormData.termsAndCondition}
            />
            {error.termsAndCondition && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "0px",
                }}
              >
                Terms and conditions are required
              </p>
            )}
            <label
              style={{
                color: "white",
              }}
              htmlFor="checkbox"
            >
              Share my registration data with Superapp
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "center", height: "25px" }}>
            <button
              style={{
                width: "50%",
                height: "100%",
                borderRadius: "20px",
                border: "none",
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
