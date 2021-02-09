import http from 'k6/http';
import { check } from 'k6';

export const options = {
  scenarios: {
    reviews_request: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      duration: '1m',
      preAllocatedVUs: 80,
      maxVUs: 100,
    },
  },
};


export default function () {

  let res = http.get(`http://localhost:3002/api/reviews/${Math.floor(Math.random() * 10000000) + 1}`);

  check(res, {
    '<2s to completion': (r) => r.timings.duration < 2000,
    'no errors returned': (r) => !r.error,
    'all status code 200': (r) => r.status === 200
  });
}
