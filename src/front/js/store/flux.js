const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      ApiUrl:
        "https://3001-jorgereboll-sistemadeau-sst5jib9zru.ws-us59.gitpod.io",
      currentUser: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getLogout: () => {
        if (sessionStorage.getItem("currentUser")) {
          sessionStorage.removeItem("currentUser");
          setStore({ currentUser: null });
        }
      },
      getRegister: async (info = { email: "", username: "", password: "" }) => {
        try {
          const { ApiUrl } = getStore();
          const response = await fetch(`${ApiUrl}/api/user`, {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();

          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      getLogin: async (info = { email: "", password: "" }) => {
        try {
          // fetching data from the backend
          const { ApiUrl } = getStore();
          const response = await fetch(`${ApiUrl}/api/login`, {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          if (data.access_token) {
            setStore({ currentUser: data });
            sessionStorage.setItem("currentUser", JSON.stringify(data));
          }
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const response = await fetch(ApiUrl + "/api/login");
          const data = await response.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
