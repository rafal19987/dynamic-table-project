'use client';

import { useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';
import { INICIAL_API_URL } from '@/constants/constants';

const BreadCrumb = () => {
  const { breadcrumb, getData, resetBreadcrumb, hideDetails } =
    useContext(TableContext);

  const handleHomeClick = () => {
    getData(INICIAL_API_URL);
    resetBreadcrumb();
    hideDetails();
  };

  return (
    <nav className="flex items-center w-full h-full p-2">
      <span className="h-7 pl-4">{'>'}</span>
      <button
        className="w-fit py-2 pl-1 tracking-wide text-lg text-[var(--navigate-color)] hover:text-[var(--navigate-color-hover)] hover:cursor-pointer transition-colors after:content-['/'] after:text-[var(--text-dark)]"
        onClick={handleHomeClick}
      >
        Home
      </button>
      {breadcrumb}
    </nav>
  );
};

export default BreadCrumb;
