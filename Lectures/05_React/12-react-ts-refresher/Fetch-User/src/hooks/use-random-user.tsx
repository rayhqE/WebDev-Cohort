import * as React from "react";

export interface FreeApiGetRandomUserResponse {
  statusCode: number;
  data: {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: {
      date: string;
      age: number;
    };
    registered: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    id: number;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  };
  message: string;
  success: boolean;
}

export function UseRandomUser() {
  const [user, setUser] = React.useState<
    null | FreeApiGetRandomUserResponse["data"]
  >();

  const [isFetching, setIsFetching] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<null | string>(null);
  async function fetchRandomUser() {
    try {
      setIsFetching(true);
      const rawResponse = await fetch(
        "https://prod-main-api-704464-00tre1p1erm.compute.instacloud-edge.com/api/v1/public/randomusers/user/random",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setError(null);
      const response =
        (await rawResponse.json()) as FreeApiGetRandomUserResponse;
      if (response.data && response.success) {
        setUser(response.data);
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsFetching(false);
    }
  }

  return {
    user,
    fetchRandomUser,
    isFetching,
    error,
  };
}
