//init
import http from "k6/http";

//Default function
export default function () {
  const url = "http://test.k6.io/login";
  const payload = JSON.stringify({
    email: "aaa",
    password: "bbb",
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  http.post(url, payload, params);
}
