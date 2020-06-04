import axios from "./axios";
import MockAdapter from "axios-mock-adapter";
import MockResponses from "./mocks";

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

export const getMockResponse = (url, method, scenario="success") => {
  const responseSet = MockResponses[url].filter((val) => {
    return (
      val[0].toLowerCase() === scenario && val[1].toLowerCase() === method
    );
  });
  return responseSet[0][2];
};

mock.onPost("/login").reply((config) => {
  console.log("in mocked login", config);
  return getMockResponse(config.url, config.method);
});

mock.onGet("/roles").reply((config) => {
  console.log("in mocked roles", config);
  return getMockResponse(config.url, config.method);
});

if (window.location.hostname !== "localhost") {
  console.log("resetting mocks");
  mock.restore();
}
