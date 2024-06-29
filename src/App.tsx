import React from 'react';
import styled from "styled-components";
import DateTimes from './components/DateTimes';
import SearchBar from './components/SearchBar';
import Bookmarks from './components/Bookmarks/Bookmark_Bar';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  width: 70%;
  height: 100%;
`;

function App() {
  return (
    <MainWrapper>
      <MainItems>
        <DateTimes />
        <SearchBar />
      </MainItems>
      <div>
        <Bookmarks />
      </div>
    </MainWrapper>
  );
}

export default App;
