import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import todoList from "./store/store.js";

const entryPointOfApp = document.getElementById("root");
const root = createRoot(entryPointOfApp);

// const store = configureStore({
//   reducer: { todoList },
// });
root.render(
//   <Provider store={store}>
    <App />
//   </Provider>
);
