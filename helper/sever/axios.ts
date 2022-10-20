import axios from "axios";


const root = process.env.NEXT_PUBLIC_BASE

const apiWorker = axios.create();

// apiWorker.interceptors.request.use(function (config:any) {
//   config.headers.branch_id = 1;
//   config.headers.company = 1;
//   return config;
// });

apiWorker.interceptors.response.use(
  function (response) {
    if (response.data && response.data.ok == false) {
      //error
    }
    return response;
  },
  function (error) {
    console.log(error,"kjsbakhvgsak");
    
    return Promise.reject(error);
  }
);

export const getApiOptions = (path = null) => {
  return {
    root: `${root}${path}`,
    options: {
      headers: {},
    },
  };
};

export default apiWorker;
