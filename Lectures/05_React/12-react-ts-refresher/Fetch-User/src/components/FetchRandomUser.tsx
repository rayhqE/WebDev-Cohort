import { UseRandomUser } from "../hooks/use-random-user.tsx";
import "./FetchRandomUser.css";

export function FetchRandomUser() {
  const { user, fetchRandomUser, isFetching, error } = UseRandomUser();
  return (
    <section className="fetch-user-card">
      <button className="fetch-user-button" onClick={fetchRandomUser}>
        Fetch Random User
      </button>
      <div className="fetch-user-result" aria-live="polite">
        {user ? (
          isFetching ? (
            <p className="fetch-user-status">Loading...</p>
          ) : (
            <h1 className="fetch-user-name">
              {user.name.first} {user.name.last}
            </h1>
          )
        ) : (
          <p className="fetch-user-status">No User Found</p>
        )}
      </div>
      {error && <p className="fetch-user-error">{error}</p>}
    </section>
  );
}
