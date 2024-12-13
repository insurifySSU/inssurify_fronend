import Identification from './components/Identification/Identification';
import { useState } from 'react';

const Contract = () => {
  const [isDoneIdent] = useState(true);
  const renderPage = () => {
    return isDoneIdent ? <Identification /> : <div>인증 완료</div>;
  };
  return renderPage();
};

export default Contract;
