export const data = (user) => {
  return {
    type: "SET",
    payload: user,
  };
};
export const detail = (user) => {
  return {
    type: "NOOB",
    payload: user,
  };
};

export const All = (user) => {
  return {
    type: "ALL",
    payload: user,
  };
};


export const Following = (user) => {
  return {
    type: "FOLLOWING",
    payload: user,
  };
};
export const Posts = (user) => {
  return {
    type: "POSTS",
    payload: user,
  };
};

