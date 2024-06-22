import React from 'react';
import styled from "styled-components";
import DateTimes from './components/DateTimes';
import SearchBar from './components/SearchBar';

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
const Bookmarks = styled.div`
  border: 2px solid black;
  margin: 5px;
  width: 240px;
  height: 100%;
  position: absolute;
  top: 50px; right: 0px;
  padding: 10px 30px;
`;

function App() {
  return (
    <MainWrapper>
      <MainItems>
        <DateTimes />
        <SearchBar />
      </MainItems>
      <Bookmarks>
        <h4>북마크바</h4>
        <div>
          북마크 추가
        </div>
        <div>
          <div>북마크 1</div>
          <div>북마크 2</div>
          <div>북마크 3</div>
          <div>북마크 4</div>
          <div>북마크 5</div>
        </div>
      </Bookmarks>
    </MainWrapper>
  );
}

export default App;
