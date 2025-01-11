import { createContext, useReducer } from "react";
//  import PostList from "../components/PostList";

export const PostList=createContext ({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

// const postListReducer = createContext(DEFULT_CONTEXT);

const postListReducer = (currPostList , action) => {
  return currPostList;
}

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[DEFULT_POST_LIST]);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};


const DEFULT_POST_LIST =[
  {
  id: '1',
  title: 'Go to Nepal',
  body: 'Hi Friend, I am going to Nepal for my vacation.',
  reactions: 2,
  userId: 'user-9',
  tags:['vacation','Nepal'],
},
  {
  id: '2',
  title: 'Pass',
  body: '4 year enjoy. Hard to belive',
  reactions: 15,
  userId: 'user-12',
  tags:['Graduation','unbelivable'],
},
];
export default PostListProvider;
