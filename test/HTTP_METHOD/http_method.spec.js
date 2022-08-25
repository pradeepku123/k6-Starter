//init
import http from "k6/http";

//Default function
export default function () {
  http.get("http://test.k6.io");
}
