import React from 'react';
import styled from 'styled-components';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </PageButton>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </PageButton>
        ))}
      <PageButton onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </PageButton>
    </Nav>
  );
}

export default Pagination;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const PageButton = styled.button`
  border: none;
  padding: 8px;
  margin: 0;
  color: black;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    border: 1px solid black;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
